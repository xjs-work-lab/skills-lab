---
name: technical-insight-presentation
description: Use when producing an editable, evidence-backed academic/industry technology-insight leadership PPT, technical roadmap deck, source-cited figures, explanation-first presenter notes, incremental visual revisions with zero unauthorized text changes, and QA of a PowerPoint report.
---

# Technical Insight Presentation v0.1.1 — Evidence backed, editable, auditable

## Purpose and triggers
Turn **reviewed academic/industrial insight decisions and sources** into a technically correct, audience-readable, editable PowerPoint plus PDF/PNG and embedded speaker notes. Appropriate for technology insight, strategy and engineering roadmaps; not a substitute for doing the original academic research, not a generic marketing-image generator and not a GitHub repository migration method.

## Inputs / Goal lock
Recover: audience, the decisions to enable, technical scope, platform, time horizon, approved language/page count/theme, original papers/vendor docs with precise URLs and constraints, strongest alternatives, source-derived metrics/baselines/units, explicit uncertainty, allowed image assets, authorized output/editability, and **previously accepted slide versions**. Identify what content is immutable vs authorized to revise.

## Phase 1 — Evidence-to-decision contract (Gate 0)
Before creating slides, classify material assertions as: source FACT, author/vendor CLAIM, cross-source OBSERVATION, analyst INFERENCE or untested HYPOTHESIS. For each decision-critical assertion record title/author/URL and Figure/Table/section, exact system/workload, comparator, unit, measurement layer and what the source **does not prove**. Link technical ownership to actual control layers, not fictitious budgets or product schedule. A vendor API/press release is not an end-to-end empirical result. If a slide cannot be sourced, narrow the assertion rather than inventing content.

## Phase 2 — Narrative before rendering (Gate 1)
Draft a story arc internally: what changed -> resulting user/system pain -> technical evidence & competing baseline -> residual mechanism -> engineering opportunities vs speculative reserves -> roadmap/decision. Explain why each page is next. **Do not put internal research IDs, “pyramid principle”, unexplained scores or authoring-process labels on leadership slides.** A decision headline is a verifiable complete claim, not just a research topic.

## Phase 3 — Detailed per-slide page contract (Gate 2)
For every slide specify audience question, full intended visible copy, full-sentence takeaway, visual reading path, card/axis labels, EXACT source/baseline/units, and every arrow's source, target, action/conditional/data/causal semantics and intended direction. Define figure selection and editability (native text/shape/chart vs movable cited image), named citations, source-note mapping, anticipated misreading, previous/next slide bridge. No visual batch work based on a shallow title-only outline.

## Phase 4 — Evidence-correct media (Gate 3)
Use native editable PowerPoint shapes/connectors for cross-source system logic; reproducible coded/native charts for comparable quantitative data; existing published figures only after verifying caption/axis/provenance and rights, keeping their limits visible; independent vector/image decorations with a consistent subdued tone. **Never let image generators manufacture benchmark numbers, mechanisms or unapproved textual conclusions.** A raster figure may move but its internals aren't editable. Preserve CPU ISA extension vs separate NPU, tool success vs actual effect, and compile-time vs run-time layers.

## Phase 5 — Production and visual-system coherence (Gate 4)
Select 2–3 representative pilot slides, agree the technical academic feel; then enforce coherent body background, header title band, font sizes/positions, muted icons/background art, page numbering including cover/agenda per specified scheme, and safe lower margin under visible source links. Technical body compositions may vary by role. Keep primary logic and captions native/editable. Check connector endpoints; **intended horizontal arrows have equal start/end y**, no 0.02in accidental downward slope. Images of chips are decoration, not technical proof. Keep version IDs and accepted-source page manifest to prevent rollback.

## Phase 6 — PowerPoint Speaker Notes (Gate 5)
**Every slide must put Part I before Part II:**
I. *详细解释本页实际内容*: why this page follows, how to read its layout, each major diagram/card/arrow/condition, technical input/output/actor, all quantified data with device/model/baseline/level/units, causal meaning, constraints, team implication and next slide bridge. Not just re-reading the on-screen title.
II. *逐来源详细解读*: EACH genuine paper, official doc, patent or vendor technical source receives title/author/venue or institution/year/version/original URL/Fig/Table, studied question, method and experimental basis, main results, exact visible claim supported, failure boundary, what cannot be inferred, independent or shared artifacts, and clearly identified analyst synthesis. Don't call a vendor document a paper or combine unrelated measurements. Cover and agenda explain real scope/page sequence without invented paper citations. Embedded Notes must survive the final editable PPTX, not solely exist as Markdown.

## Phase 7 — Minimal Change & Content Fidelity（最小变更与内容保真）, iteration and release (Gate 6)
An edit request defines a permission boundary: authorized objects/properties, protected content, and checks. **Not a ban on modifying text when the user explicitly approves a content edit.**
- VISUAL_ONLY (margins, brightness, typography, arrow layout): compare all visible slide strings, evidence values, link destinations and Notes; unapproved textual changes are failures.
- NOTES_ONLY: may rewrite Notes, but slide content/OOXML/media/links/page count must remain unchanged.
- ARROW_ONLY: native connector geometry/anchors only; compare text, data, Notes, source links and render.
- CONTENT_EDIT: exact approved sentences and dependent evidence/notes can change, with recorded claim-source diff; unrelated pages stay locked.
- INTEGRATION: combine only accepted revisions, preserve editable objects/images/links/Notes, check every slide against source rendered preview.

For every full deck: render all slides (not just contact-sheet), inspect clipping, padding, arrows, footer source legibility, header lightness, consistent backgrounds and full resolution; audit hyperlinks, exact physical page sequence, Notes' two sections and original-source mapping; export editable PPTX plus PDF, all-page PNG preview, QA report and version/issue log. A successful PDF export is **not** proof of Windows Microsoft PowerPoint/projector compatibility. User sign-off is separate from automated checks.

## Outputs / exit
1. Evidence claim-to-slide ledger, decisions & uncertainties.
2. Storyboard and per-page detailed contracts.
3. Fully editable PPTX with detailed explanatory/source Notes, aligned theme and hyperlinks.
4. Same-source PDF, PNG/contact-sheet preview, asset/editability inventory and QA/diff report.
5. Precise review status: pilot, integration candidate, user approved and Office/projector tested only when each truly occurred.

## Principles
Never invent metrics, baseline, source, original Figure, hardware gains or authorized budget. Do not hide data applicability limits for a prettier slide. Protect author/source semantics while simplifying leadership phrasing. Tool choice is replaceable (PowerPoint/PptxGenJS/Python/SVG/chart engines); do not claim a tool was actually run unless it was. Distinguish what is **published fact**, **official declared capability**, **composite analyst inference**, **hypothesis**.

For operational checklists use the bundled references: `references/evidence-handoff.md`, `page-contract.md`, `notes-evidence.md`, `change-control.md`, and `qa-release-gates.md`.
