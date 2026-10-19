---
title: 'From Autocomplete to Delegating: My Experience Developing with Agents'
description: 'How my way of building software went from Cursor autocomplete to delegating whole tasks to agents, and what I learned about specs, harnesses, and not betting on a single model.'
date: 2026-10-19
lang: en
---

## 1. Starting point

I remember my first interactions with AI models. I think my earliest steps included creating a Claude account back when it was still a web-only experience where you had to copy and paste content. Up to that point, my work was still the work of before: I wrote code by hand, spending hours sometimes trying to fix a bug or figure out how to get something done. Cursor came along shortly after. I remember being amazed to suddenly have tools that didn't just autocomplete code but started offering suggestions, trying to guess the next chunk of code. And yet, as amazed as I was, I was also somewhat skeptical. Most of the use cases I saw were in JavaScript, and as a Flutter developer I figured it would be a while before all those wonderful features became useful to us.

Back then, we had to wait longer to access better models. Skills didn't exist yet either. Meanwhile, I kept trying out Claude through its website, clearing up the occasional doubt, asking about some specific BLoC or Cubit question but not much more. Time went on, and what had seemed far off was starting to become real: Cursor's autocomplete was beginning to work decently with Flutter. The suggestions I got made sense, but I'd often end up rejecting them because they either didn't apply or weren't what I wanted to do.

And then, chat arrived. **That was the first turning point: it was no longer copy-pasting from Claude's website — the change was applied directly to the code.** It was wonderful.

## 2. The first shift: conversing and giving context

I started having my first conversations. I felt the results were improving, but not because I'd gotten better at asking — it was simply that, little by little, the models were becoming more capable. Around that time, new concepts slowly started to appear, like *context*, *tokens*, *memory*. And it wasn't just new concepts — new ways of interacting with these models were showing up too. I remember when the first articles about *prompt engineering* started appearing, along with the supposed benefits of applying it. It was still fairly easy to keep up, because the pace at which new concepts or tools were being published let me absorb them gradually.

Every day that passed, I found myself using this new way of interacting with models more and more in my development workflow. Still, I'd often get frustrated and end up deleting the whole suggestion and starting from scratch. On top of that, in many cases it was obvious the models were still giving suggestions that could be better: using a `Container` unnecessarily, for example, when a `SizedBox` would have actually fit better (back then the models weren't the models we know today: super thorough, high-performing, and so on).

## 3. The leap to delegating

By then, Cursor had become my default IDE, leaving VS Code behind. Still, when Claude Code emerged as a product and became the tool everyone was talking about online, I started trying it out and realized this was something else entirely: sessions felt endless, results kept getting better, and usage never seemed to run out. The moment of the real quality leap had arrived.

I was using Cursor and Claude Code in parallel, throwing prompts, watching the code change, stepping in by hand every now and then. That slowly transitioned into what we now know as agentic development. **Slowly, and without my quite noticing, my role started becoming that of an orchestrator delegating tasks to several agents, rather than a programmer typing out lines of code.**

## 4. From throwing prompts to writing specs

I consume a lot of X, and being part of the IT world, I get to stay at the forefront of whatever is emerging and whatever the community is discussing. The leap to *spec-driven development* was, again, mostly a matter of watching how the community was operating, what it was trying out, what people reported as useful, plus trial and error in my own work and in personal projects.

By that point, models were already capable of doing the whole job, and letting a model write the code on its own had become a reality. That's when I started learning about harness engineering too — another term that kept shifting: what used to be about learning how to write to the model is now something the community talks about in terms of the documents that guide and support the agent's work. The topic genuinely interested me, so I started reading [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering), and as a result I managed to build my own harness for one of my personal projects, Telar.

## 5. Where I am today

At some point Claude stopped being what it used to be, and ChatGPT took the lead. I stopped paying for my subscription and switched to ChatGPT for a while. That whole stretch was a huge learning experience: the realization that you shouldn't marry one particular model, but keep trying different things.

**I think the instability that used to exist around which model was better has settled down: Claude and ChatGPT now coexist as the two leaders in agentic development,** each with its own models, and on top of that, new models or tools from different companies keep showing up every day, with different capabilities or serving different purposes (Jev from TypeSafe AI, for instance). That lesson shows up in something very concrete in how I organize my tools: both my Claude Code and ChatGPT subscriptions are monthly, not annual. This gives me the flexibility to switch whenever I need to. The only one I have annual is Cursor, for the value of having several models all plugged in there. Cursor ended up as the stable base; the models, as interchangeable pieces on top of it.

I feel like I still have a long way to go (open-source models, going deeper into harnesses beyond Claude and ChatGPT, and so on). **What matters is keeping up with a reality** (often a pretty overwhelming one) **that puts new opportunities on the table every single day.**
