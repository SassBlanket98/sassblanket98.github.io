# Design

## Reference

Precision test-equipment / avionics instrumentation: an oscilloscope trace or a calibrated cockpit HUD readout on a dark bezel — legible, exact, no ornament. Not "hacker terminal," not editorial-magazine.

## Color strategy: Committed

Dark near-black surface throughout; one saturated signal-green carries the brand identity in text, links, tags, and rules. A second accent (amber) is reserved narrowly for "confidential / no public demo" badges — everywhere else the page stays green-on-graphite.

This hue was chosen deliberately to sit apart from every project it showcases: Doctors Map and MarketPulse are both blue, Charlie Dashboard is blue/cyan cyber-terminal, and HillSkills is an orange-to-magenta gradient. Green is the one hue on the page that belongs to the portfolio itself, not to any demo it's framing.

```css
:root {
  --bg:      oklch(0.09 0 0);        /* near-black, zero chroma */
  --surface: oklch(0.15 0.006 160);  /* bg pulled toward ink, faint green family */
  --surface-raised: oklch(0.19 0.008 160);
  --ink:     oklch(0.95 0.004 160);  /* near-white body text, ~13.5:1 on bg */
  --muted:   oklch(0.68 0.01 160);   /* secondary text, ~5.4:1 on bg */
  --primary: oklch(0.78 0.15 158);   /* signal green — links, tags, rules, live-demo state */
  --primary-ink: oklch(0.12 0.02 158); /* text on filled primary */
  --accent:  oklch(0.80 0.13 80);    /* amber — "confidential" badges only, nowhere else */
  --accent-ink: oklch(0.15 0.03 80);
  --border:  oklch(1 0 0 / 0.09);
}
```

## Typography

Brand-voice words: **sharp, calibrated, unhurried.**

- Display / headings: **Big Shoulders Display** (variable, black/bold weights) — industrial signage lettering, not a training-data reflex pick, reads as engineered rather than decorative.
- Body: **Public Sans** — USWDS's functional-documentation sans; calm, exact, built for technical reading rather than marketing.
- Data / tags / tech-stack chips / code fragments: **JetBrains Mono** — used narrowly (badges, stats, inline tech names), never for body copy or headings, so it earns its "technical" register instead of costuming as one.

Modular type scale, fluid `clamp()`, ratio ≥1.25. Hero heading ceiling 6rem. `text-wrap: balance` on headings.

## Layout

Long single-page scroll. Two headline AI/agent case studies get full-bleed architecture-diagram treatment (styled SVG/CSS renders of their ASCII diagrams, not raw `<pre>` blocks) with a "confidential — architecture documented, no public demo" amber tag. The four with real product screenshots (Doctors Map, MarketPulse, Charlie Dashboard, HillSkills) get an asymmetric image-led layout, alternating side, real screenshots framed in a neutral device-less crop (no glossy browser-chrome mockup cliché). Each keeps its own product's screenshot colors intact rather than being color-corrected to match the portfolio palette.

## Motion

One deliberate load-in on the hero (staggered line reveal on the headline, respecting `prefers-reduced-motion`). Section entrances on scroll are a restrained opacity/translateY reveal, not uniform across every block — the two diagram sections get a slightly different reveal (the diagram draws in) than the four screenshot sections (image + copy cross-fade).

## Imagery

Real screenshots only (captured from the live demos and the live HillSkills site) — no stock imagery, no placeholder panels. The two confidential case studies use a styled recreation of their real ASCII architecture diagrams as their "imagery," not a substitute stock graphic.
