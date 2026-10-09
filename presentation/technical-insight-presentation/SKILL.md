---
name: technical-insight-presentation
description: Use when turning finished academic/industrial insight research into high-quality, editable technical leadership decks. Carries an executable design system, 6 slide recipes, palette tokens, evidence-correct charts, native connector code, render-and-review loops, source-first accuracy and explanation-first Notes; for adapting to new subjects without re-teaching visual taste.
version: 0.2.0
---

# Technical Insight Presentation v0.2.0 — Design + Production System

## What this skill guarantees as a workflow
Build **evidence-faithful, visually designed, technical-leadership-readable, editable PowerPoint**, not generic boxes with text. The result requires both (A) scientific/narrative quality and (B) strong visual craft. **Color is configurable; composition rigor is not.** This bundle includes native-editable slide recipes, a working PptxGenJS generator, reproducible sample renders, and QA scripts, not only verbal rules.

### Activation / loading requirements
When using this skill, read these bundled files **before laying out pages**:
1. `references/visual-system.md` — layout grid, type hierarchy, whitespace, palette tokens, adaptive compositions, independent artwork policy.
2. `references/slide-recipes.md` — six ready-to-reuse page anatomies and when to select each.
3. `references/evidence-and-story.md` — research → decision → page contract, charts / published figure semantics.
4. `references/production-and-qa.md` — executable routes, pilot gates, render inspection and zero-drift QA.
5. `references/speaker-notes.md` — teaching-first and independent source records.
6. `scripts/README.md` — executable demo, environment and portability.

**Use `scripts/make_template_deck.js` as an actual layout/styling reference**, not merely a source of inspiration. It renders a six-slide 16:9 PPTX from native PowerPoint objects, with externally configurable themes. `scripts/render_and_qa.py` renders all slides and detects basic clipping and low-editability traps. Outputs and full-resolution sample images live in `assets/`.

## Gate 0 — Recover goals and evidence before design
Clarify technical audience, decision/outcome, time horizon, page budget, language, display format (screen/room), copyright/distribution, editability, approved content, device/workload constraints, unavailable evidence, and **whether the user provided a visual reference**. If a reference deck or PNG exists, **study its actual compositions and assets**; do not blindly reproduce its words in a different project. Data must be traceable to original documents, including exact Table/Figure, sample/device/backend, units, baseline and measurement layer.

Research should already be converged, or use Academic Insight first. A deck cannot turn a SOURCE CLAIM into a proven RESULT. Strong software/industry baselines and negative evidence matter. Do not invent hardware novelty, institutional affiliation, sample sizes or gains.

## Gate 1 — Narrative architecture BEFORE rendering
Build the story in this causal order where appropriate: user/system change → pain and current baselines → original evidence → candidate mechanism / technical ownership → opportunity and limits → roadmap / decision. A technical manager should follow the logic without guessing arrows or internal codes. Write conclusion headlines, not vague section labels or teaching-method labels (“pyramid principle”). Record why each page follows and precedes another. Draft exact visible paragraphs, diagram labels, data panels, and links before drawing. The storyboard is a **layout brief, not a paper-summary dump**.

## Gate 2 — Visual design, not merely a pretty palette
Choose **three visually distinct page roles** as a pilot: (i) measured evidence/comparison, (ii) mechanism/dependency/flow, (iii) strategy/ownership/roadmap. For each, use the matching recipe from `references/slide-recipes.md` and materialized layout primitives from `scripts/make_template_deck.js`. Define a visual anchor from the user reference or from the visual token system. If no accepted visual anchor exists, show previews before full batch. User approval is page-specific and versioned.

**Make layout decisions from content geometry**: number of modules, arrows, chart labels, needed explanation, conclusion length, and type. Pick the page anatomy **before** choosing icons or gradients. Complex figure fidelity + editable text is a valid hybrid. If a paper figure is useful, verify caption/legend, rights and conditions, and crop only a semantically self-contained panel. Avoid one-image-per-slide flattening, non-editable major copy, microtype, low-contrast axes, ambiguous connectors, homogeneous “3 little cards” on every slide, and enormous empty regions next to overflowing text.

**Themes are independent tokens**: ocean/forest/plum/graphite/other custom palettes all follow the same contrast, whitespace and visual hierarchy gates. Accent color, background/surface, evidence-series colors and decorative tint are separate roles; do not globally recolor imported scientific figures or change their legends. For any theme, the main headline and evidence values maintain projected legibility.

## Gate 3 — Production tool routing
- **Native editable PPTX**: PptxGenJS (JS) is the preferred default for reproducible cards, labels, diagrams, multi-panel chart areas and arrows. Group complex static art as independent movable images; major text stays editable. Microsoft Office, other builders and export tools are alternatives depending on user/tool access.
- **Quantitative evidence**: native PowerPoint chart or a true-data Python chart + native PPT text; chart must show metric, baseline, units and platform, and label different measurement scopes independently. Do not use generative image for data.
- **Mechanism**: first specify node/edge semantics via Mermaid/DOT/structured table, then render as native shapes/lines/SVG. CPU ISA extension is not a separate accelerator; compile/run/device are distinct levels.
- **Art**: use image tools to generate or edit **decorative** assets only. Preserve meaningful icons and acceptable source figures. Generate full-slide images only if explicitly asked; never treat a full-slide PNG as “editable PPT.”
- **Renderer**: after writing PPTX, render **every page** as PDF/PNG; inspect full-resolution images and a contact sheet. Rendering is mandatory, not a nice-to-have; fix overflowing text, uneven alignment, wrong connector endpoints, unbalanced empty space and insufficient explanatory context before advancing.

## Gate 4 — Six repeatable page roles
1. `COVER`: title anchor, disciplined artwork and scope/date strip, no complex content squeezed in.
2. `EVIDENCE`: 2–3 **separately scoped** data/comparison panels, direct conclusion and exact citation/limit.
3. `MECHANISM`: dependency chain with clearly identified inputs, outputs, branches and constraints; no arrows into undefined entities.
4. `OWNERSHIP`: CPU/Compiler vs Runtime/OS vs Application/Agent vs accelerator roles, with accurate responsibility separation.
5. `ROADMAP`: year/layer matrix with gates and conditional language; not an implied approved product/budget schedule.
6. `DECISION`: prioritized actionable recommendations, reserves, evidence gates and explicit management asks.

The **same palette does NOT mean every page has the same composition**. Layouts are stable enough to reuse but adapt to content density, number of actual actors and source visual forms. See exact dimensions and page recipes in the references and sample generator.

## Gate 5 — Embedded PowerPoint Notes
**Every slide: Part I first, Part II second.** Part I is a detailed technical teaching walkthrough of the ACTUAL visual objects/axes/branches/equations/scope and the page's role in the argument. Part II provides individual original sources with authors/institution/venue/year, URL, exact figure/table, methods, baseline, results, exactly supported claim, limitations, and clearly labeled analyst synthesis. Cover/agenda explain scope/reading path; do not force fake citations. Include these Notes in the PPTX itself and, when useful, an independent export. See `references/speaker-notes.md`.

## Gate 6 — Minimal change, version lock, release QA
**最小变更与内容保真**: each revision declares authorized target, protected content and comparison gate. For visual-only edits, compare exact text/data/links/Notes. For notes-only, PPT slide XML/media/links remain unchanged. For technical content edits, change only approved claim IDs and their dependent figures/Notes. Old accepted page revisions cannot silently reappear during integration. Page numbers, footer safe margins, source URLs, all diagrams and all thumbnails require a final sweep.

**Do not call a generic exported PDF “visually accepted.”** Users must see 2–3 page pilots and the full deck previews. Automated QA is necessary but insufficient; Office/projector compatibility only if actually tested. Deliver the editable PPTX, rendered PDF/PNG, asset/source manifest, text+Notes map, and a precise QA/remaining-issues log.

## Prescriptive anti-failure gates
- No bulk deck generation from just slide titles or a loose Markdown outline.
- No invented scientific claim, invented Figure, fictitious numeric axes or “benchmark” without source; demo data in sample must visibly say *mock*.
- No purely decorative generated visualization masquerading as experimental evidence.
- No unreadable text to improve thumbnail cleanliness; dense but hierarchical slides are allowed.
- No uncontrolled font shrink below project thresholds. Default projected body text aim ≥ 13–15pt, footnotes ≥ 9–10pt at 16:9; if content doesn't fit, **redesign into another anatomy or split**. Thresholds must adapt to actual viewing conditions.
- No non-parallel lines pretending to be horizontal arrows; coordinates should be mathematically aligned.
- No false visual peer relation among CPU, SME, NPU, LLVM, Runtime and OS.
- No claim that source files exist, plugins ran, PPT is installed or reports passed Office QA unless verified.

## Outputs and version
Design source (`.js`, themes, assets) + evidence ledger + per-page contract + editable PPTX + same-source PDF/PNG previews + real Notes + link/geometry/science QA and accepted-version map. **v0.2.0 candidate**: now ships a portable executable visual prototype but still requires cross-domain human approval; avoid declaring the generic result stable solely because pilot files render.
