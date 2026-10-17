---
title: 'Style guide: every element a post can use'
description: 'A test post that shows every Markdown element in the site design. It is a draft, so it never goes live.'
date: 2026-10-16
draft: true
---

This post exists to check the reading layout. It is marked as a draft, so it shows up in `npm run dev` and never in a production build. Body text is 18px Inter on a 1.7 line height, inside the same column as the homepage, which keeps lines to roughly sixty-five characters.

Links are [underlined, never coloured](https://augustogiavedoni.com), so the page stays black and white. Emphasis uses _italic_ for tone and **semibold** for weight. Inline code such as `BlocProvider` gets a faint grey ground.

## A second-level heading

Headings stay in the sans, one step heavier and larger than the body, with extra space above them so a post reads as clear sections.

```dart
// Code blocks: monospace, no syntax colours.
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
}
```

Lists keep the body size, with a little less space between items than between paragraphs:

- Short items read as a group
- Markers stay in the text colour
- Nesting is avoided where possible

1. Numbered lists work the same way
2. They suit steps that happen in order

> A quote sits behind a single ink rule, the only heavy line in the design.

### A third-level heading

| Layer | Owns |
| --- | --- |
| Data | API clients and storage |
| Repository | Combining sources into models |
| Presentation | Widgets and BLoCs |

---

The post ends with a thin rule and a way back, so a reader who finishes always has a next step.
