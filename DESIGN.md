# Design

## Reference

A real terminal window (macOS/iTerm-style): traffic-light dots, a `zsh — user@host:~` title bar, monospace `$` prompts and `>` output. Chosen deliberately over the earlier oscilloscope/HUD direction after a round of exploring several distinct visual systems (blueprint, spec-document, server-rack, circuit-board, nautical-chart, and others) — this is the one that stuck.

This supersedes the previous "precision test-equipment / avionics instrumentation" reference below this doc used to describe. That direction was written but never built; the terminal direction is what's actually live.

## Color strategy: Committed

Near-black surface throughout; one saturated teal carries links, prompts, buttons, and stat values. Red is reserved narrowly for the `// OUTPUT` marker and for the two confidential case studies' simulated `403 Forbidden` response — everywhere else the page stays teal-on-graphite.

```css
:root {
  --bg: #0A0D11;
  --panel: #10161C;
  --panel-head: #161D24;
  --panel-alt: #0D1217;
  --border: #212B33;
  --ink: #E7EEF0;
  --muted: #9AA7AE;
  --dim: #7C8B94;
  --accent: #1FCFC0;
  --accent-hover: #17ADA1;
  --danger: #F5402F;
  --danger-ink: #F0A79E;
}
```

## Typography

- Display / headings: **Space Grotesk** (600/700).
- Everything else — body copy, prompts, labels, tags, stats: **Fragment Mono**. The whole page reads as one long terminal session; body text staying monospace is the point, not an oversight.

## Layout

Every section opens with a `$ cd ~/section-name` line, echoing the idea that this is one continuous shell session scrolling down the page. Each project — and the About section — is its own terminal window (traffic-light chrome, title bar naming the "host"), so the page reads as a stack of terminal panes rather than conventional cards. The two AI/agent case studies with no public demo get a literal simulated command or in each project's terminal instead of a generic "confidential" badge: `curl -s gateway.internal/demo` → `403 Forbidden — confidential client deployment. No public demo.`

## Motion

A blinking cursor in the hero (CSS `steps()` animation) and a pulsing status dot in the nav logo — both respect `prefers-reduced-motion`. No scroll-triggered reveals; the design doesn't need them.

## Imagery

Real screenshots only (HillSkills), framed as a `$ ls ./screenshots` directory listing followed by a file grid. No stock imagery.
