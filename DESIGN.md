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

Superseded the original single-column scroll with a persistent app shell: a sticky sidebar (`ls -la ~`-style file tree naming every section and project, live/beta status inline) beside a scrolling main column. Every pane still opens with a `$ cd ~/section-name` line, keeping the one-continuous-shell-session feel, but a hiring manager can now jump straight to a project from the sidebar instead of scrolling past everything above it.

Project cards became "spec sheets": a narrow left column (status, stats, tags) beside a wider right column (title, description, decisions, diagram), instead of everything stacked top to bottom inside a terminal window. AI & Agent Systems keeps the full spec-sheet treatment (decisions, topology diagram, simulated `403 Forbidden` box) since that's the headline work; Full-Stack Delivery cards are a lighter version of the same pattern — status, tags, description, links, no diagram — since they carry less architectural weight. Below 880px the sidebar collapses into a top bar and spec-card columns stack.

The two AI/agent case studies with no public demo keep a literal simulated command in place of a generic "confidential" badge: `curl -s gateway.internal/demo` → `403 Forbidden — confidential client deployment. No public demo.`

## Motion

A blinking cursor in the hero (CSS `steps()` animation) and a pulsing status dot in the nav logo — both respect `prefers-reduced-motion`. No scroll-triggered reveals; the design doesn't need them.

## Imagery

Real screenshots only (HillSkills), framed as a `$ ls ./screenshots` directory listing followed by a file grid. No stock imagery.
