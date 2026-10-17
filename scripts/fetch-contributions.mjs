// Fetches the last year of contributions for every account and writes their daily sum
// to src/data/contributions.json. Run by .github/workflows/contributions.yml once a day.
//
// Usage: CONTRIBUTIONS_TOKEN=<token> node scripts/fetch-contributions.mjs
// Any GitHub token that can read public data works. Private contributions are included
// for accounts that turned on "Include private contributions on my profile".

import { readFile, writeFile } from 'node:fs/promises';

const ACCOUNTS = ['augustogiavedoni', 'augustogiavedoni-paigo', 'augustogiavedoni-telar'];
const OUTPUT = new URL('../src/data/contributions.json', import.meta.url);

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

const token = process.env.CONTRIBUTIONS_TOKEN;
if (!token) {
  console.error('CONTRIBUTIONS_TOKEN is not set.');
  process.exit(1);
}

async function fetchCalendar(login) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'augustogiavedoni.com contributions script',
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
  });
  if (!response.ok) throw new Error(`${login}: HTTP ${response.status}`);

  const body = await response.json();
  if (body.errors?.length) throw new Error(`${login}: ${body.errors.map((e) => e.message).join('; ')}`);

  const weeks = body.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  if (!Array.isArray(weeks)) throw new Error(`${login}: unexpected response shape`);
  return weeks.flatMap((week) => week.contributionDays);
}

// Fetch everything first: if any account fails, write nothing and keep the last good data.
const calendars = await Promise.all(ACCOUNTS.map(fetchCalendar));

const totals = new Map();
for (const days of calendars) {
  for (const { date, contributionCount } of days) {
    totals.set(date, (totals.get(date) ?? 0) + contributionCount);
  }
}

const days = [...totals]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([date, count]) => ({ date, count }));

const previous = JSON.parse(await readFile(OUTPUT, 'utf8').catch(() => '{"days":[]}'));
if (JSON.stringify(previous.days) === JSON.stringify(days)) {
  console.log('Contributions unchanged.');
  process.exit(0);
}

const total = days.reduce((sum, day) => sum + day.count, 0);
await writeFile(
  OUTPUT,
  JSON.stringify({ generatedAt: new Date().toISOString(), days }, null, 2) + '\n',
);
console.log(`Wrote ${days.length} days, ${total} contributions across ${ACCOUNTS.length} accounts.`);
