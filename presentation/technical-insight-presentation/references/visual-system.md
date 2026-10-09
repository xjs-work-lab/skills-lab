# Visual system: transferable appearance without a forced color palette

## 0. Reference priority and what was learned from the CPU-uArch 17-slide case

Use the **user-approved actual PPTX** over an abstract aesthetic description. The final case was composed as **separate native PowerPoint information shapes/text + independent decorative artwork**, with restrained header artwork, grouped content panels, conclusion headlines, blue-color family and page numbers. The source was reviewed repeatedly as full-resolution renders. Reusable properties are **relative proportions, visual hierarchy, emphasis discipline, page role variation and fidelity QA**; one specific color or “chip” image is NOT an invariant.

### Observed reference anatomy (16:9 / 13.333 × 7.5 inches)
- Main slide background: very light, near-white.
- Dense technical pages: header/title band approximately `y=0..1.28in`, top title `x≈0.59in`, title height `≈0.77in` with large dark text; one-line interpretive subtitle at `y≈1.01in`.
- Accent rule near left title `x≈0.34in, w≈0.07in`.
- Most content begins around `y≈1.5in`. Outer horizontal safe margins `≈0.35–0.45in`; content grouped in large white panels with soft borders, lightly tinted sub-cards, strong module headings.
- Decorative header artwork occupies limited top-right `x≈10.48..13.33in`, not full-slide background; it must be low contrast behind or away from title.
- Small page number at right edge, all physical pages numbered consistently if required. Source citations near bottom are separate editable objects with a safe gap from edge.
- Concrete dimensions are a *reference anchor*, not a rigid global template; other domains may need fewer/longer panels.

## 1. Choose visual tone, not color-by-guesswork
Create a `theme` object with semantic color roles and fonts:

| Token | Usage | Constraint |
|---|---|---|
| `ink` | Main headline and technical statement | high contrast against `canvas`/`surface` |
| `muted` | Secondary contextual explanation | legible at projected body size |
| `canvas` | Overall slide ground | never strong saturated background under dense text |
| `header` | Header band | light tinted variant of canvas or carefully contrasted dark band |
| `surface` | Main panel | visually separate from canvas |
| `panelTint` | Nested comparison/flow card | same hierarchy across slide roles |
| `accent` | Section-rule, selected signal, key numbers | strong but not the only cue |
| `accentSoft` | Label/number bubble tint | contrasting foreground |
| `border` | Card and divider lines | visible but subordinate |
| `positive`/`caution` | only when semantics warrant | should not misrepresent research certainty |

Included starter themes: ocean, forest, plum, graphite. User can supply different branding; do not use all accent colors at once for decoration. Reserve secondary hue for **meaningful** splits (e.g. competing paths); otherwise use opacity/shading/tint variation. Do not recolor scientific plots in a way that breaks their original legend/series semantics.

**Contrast**: aim WCAG contrast ≥ 4.5:1 for normal 2D text, ≥ 3:1 for larger labels. Keep source footers readable. Validate the custom theme before rendering. Color alone never indicates a branch or conclusion: labels/shapes must also communicate it.

## 2. Typography scale (16:9 projector baseline)
- Title: 24–30 pt depending on Chinese/English length, 1–2 lines maximum, sentence conclusion.
- Subtitle: 10–13 pt, one or two short lines of contextual scope.
- Panel heading: 14–17 pt; card sub-heading 12–15 pt.
- Body: target 12–15 pt on dense research slides; prefer ≥ 14pt when the room/projector is known.
- Figure labels: 10–12pt; sources: preferably ≥ 9pt. Never use faint gray hairline text to hide content.
- Chinese font: e.g. Microsoft YaHei, Noto Sans CJK SC (only when available); English figures: Aptos/Arial. Use theme-specific font family consistently.
- Adaptive layout before adaptive font: when too dense, abbreviate/restructure the *conceptual layout* or split into two slides after agreeing text changes; don't blindly shrink everything.

## 3. Geometric tokens (default, editable)
- Slide `W=13.333`, `H=7.5` inches.
- Safe outer gutters `0.35–0.45`, content top `≈1.40`, bottom safe band `0.25–0.40`.
- Panel/card gutter `0.16–0.24`, panel corner radius modest, border ≈ `0.6–1.1pt`; consistent x boundaries and y baselines.
- Accent bar `0.05–0.07in`, key-module title baseline aligned to nearby card edge.
- Content should have **one obvious main region and 1–2 subordinate regions**, not an endless equal-card grid.
- A horizontal arrow's start and end Y **must be identical**; its arrowhead must touch intended target with enough breathing room, not cross boxes or text.
- For vertical/swimlane diagrams, align distinct layers by their real execution/control meaning. Use constraints/conditions as named chips attached to relevant edges.

## 4. Decorative assets and illustration treatment
- *Decoration*: restrained optional images/icons at a stable location, e.g. pale top-right technical motif, simple line icon. Decorative imagery must not compete with headline, captions or table.
- *Scientific original Figure*: belongs to evidence plane, not decoration. Must have original citation, figure number and preserved axis/legend/baseline. Crop only when safe and rights-checked.
- *AI-generated visual*: use for decoration or conceptual art only, never authoritative charts/circuit diagrams claiming specific behavior. Text should remain native editables, not baked into generated background.
- *Hybrid fidelity*: complex logo/photo/official Figure may be an independent raster element; all text, process logic, arrows, evidence comparison and concluding statements should stay editable in PowerPoint.

## 5. Content-adaptive composition decision tree
1. **3–5 dependent stages?** → mechanism chain, allow variable stage widths based on text.
2. **Compare measured quantities?** → 2/3 comparable panels, one measurement scope per panel, colored only semantically; show baselines, units, variance and original source.
3. **Different technical layers?** → cross-layer/swimlane with shared interface; don't put CPU and compiler as same types of SoC blocks.
4. **Time × control layer?** → roadmap matrix with conditional gates, no pseudo-scheduled product commits.
5. **Many institutions / people?** → institution-first evidence matrix with 1–2 representative findings each, images optional; avoid identical decorative cards for all entities.
6. **Thermal structures?** → published figures/physical diagrams in prominent image panel, legends/assumptions in separately editable copy, material properties in evidence tables.
7. **No coherent figure?** → text-driven argument with a strong two-column proof/implication relationship, not an invented flowchart.

## 6. Quality review rubric (0–3 each, require ≥ 2 in every dimension)
- **Scientific fidelity**: claims proven as labeled, numbers comparable, figures/citations precise.
- **Headline clarity**: a technical manager sees one actionable conclusion.
- **Visual composition**: balance, focal point, empty space intentional, no overloaded one side.
- **Typography**: projected legibility and consistent hierarchy.
- **Diagram semantics**: arrows connect correct entities, conditions explicit.
- **Craft quality**: aligned grids, harmonious whitespace, restrained ornament, no 0.02in slanted connectors.
- **Editability**: words/data logic editable and assets independent.
- **Consistency**: common chromatic roles/header/footer without monotonous same layout everywhere.

Any dimension < 2 triggers a pilot rework. This is a **human review gate**, not a fake automated aesthetic score.
