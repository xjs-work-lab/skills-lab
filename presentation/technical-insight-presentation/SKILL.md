---
name: technical-insight-presentation
description: Turn evidence-backed academic/industry technology insight or roadmap research into a leadership-readable, technically auditable, editable presentation. Use for PPT/PPTX slide decks, technical decision briefings, evidence-led roadmaps, academic-style executive reports, source-backed speaker notes, and iterative slide review. Enforces research-to-story evidence fidelity, page-by-page design contracts, native editable slide construction, quantitative-data provenance, visual consistency, and zero-content-drift edits.
version: 0.1.1
---

# Technical Insight Presentation — v0.1.1 (candidate)

## Name / purpose
**Technical Insight Presentation** turns an existing, sufficiently reviewed research conclusion and evidence package into a **technically defensible, understandable and usable leadership presentation**. It is an execution skill for decision communication, **not a second academic research engine** and not a one-click “make slides look pretty” prompt.

End-state: an editable deck, full source-aware presenter notes, cited quantitative visuals, same-source PDF/PNG previews, and a reviewed QA / change ledger. Page count, language, technical density, theme and approved artifacts are configurable.

## Use when
- Presenting academic/industry research, future technology insight, platform/architecture directions, evidence-based collaboration candidates or 3–5 year technology roadmaps to leadership or technical reviewers.
- Turning an approved insight report into an editable PPTX with per-slide technical explanation and verifiable primary-source support.
- Incrementally refining a deck with strict “do not change agreed text/evidence” constraints.

## Do not use when
- The underlying research decision questions and sources are missing or unverified: first use **Academic Insight** or an evidence verification workflow. Do not invent results to fill presentation gaps.
- The task is only a casual talk, social-media graphic or unrelated marketing slide, unless the user explicitly wants this scientific-evidence discipline.
- The output is requested as purely static infographic/image; do not falsely promise editable diagram internals.
- Do not treat repository migrations, issue triage or GitHub branching as part of presentation methodology.

## Inputs and scope lock
Before making any slide, obtain or recover:

1. **Goal**: audience, the decision they must be able to make, time horizon, target technology/platform, required depth, final page count or length.
2. **Evidence package**: current conclusion, source-claim map, source originals/links, observed measurements and comparison constraints, strong counterevidence, uncertainty/unknowns.
3. **Content contract**: what is already approved, prohibited wording, allowed inference, whether experimental activities are within scope, technical owners vs organizational approvals.
4. **Output contract**: editable PPTX vs PDF/static images, accepted image assets, required citations/notes, target tool(s) and availability, projected screen size / typography constraints.
5. **Visual design anchor**: approved reference page(s) or deck theme; if none, establish a coherent style before batch production.

**Hard stop:** If evidence is not sufficient to support an important slide claim, mark it conditional, revise the claim with the user, or omit the claim. Never upgrade source conjecture into fact for presentation impact.

## Phase 1 — Evidence-to-decision handoff [Gate 0]

Input must at least identify:
- an exact **decision conclusion** and any conditional/non-recommendation;
- question answered / target workload & system / time horizon;
- source facts vs vendor claims vs cross-source inference vs hypothesis;
- best competing explanation/strongest alternatives and negative evidence;
- experiments if **already published**, with device/model/runtime/baseline/units/metric layer;
- sources, figures and tables needed to substantiate decision-critical statements;
- substantive uncertainties, missing data, and non-generalizable results.

Use [evidence handoff](references/evidence-handoff.md). If Academic Insight is used, its object IDs are optional trace references for the authoring system, **not public-facing headings**. Research process labels, internal score codes and ungrounded novel hardware claims do not appear in the leadership deck.

## Phase 2 — Narrative design, *before* production [Gate 1]

Construct a progressive argument with a visible answer to:
**What changed? Why does it matter? What can we prove? What competing explanation matters? What can we do? What remains unknown? What should leadership decide?**

- Use pyramid/arc reasoning internally, **never announce “pyramid principle” or method labels on the slide**.
- Write a one-page **storyboard map**: slide order, slide-to-slide causal bridge, evidence role and decision role. Not a list of paper abstracts.
- Each page gets **one full-sentence conclusion headline** (not just a topic). Avoid undefined research IDs.
- Separate evidence pages, explanatory mechanism pages, conditional opportunity pages and decision/roadmap pages. Never turn “3 studies” into “3 new hardware projects.”
- Page count is determined by cognitive load, not an arbitrary template. One chart may require its own slide.

**No rendering before every page has a content/diagram contract.** Use [page design contract](references/page-contract.md).

## Phase 3 — Detailed slide design [Gate 2]

For EACH page, define:
- **Audience question** / one-sentence takeaway / why this page is next;
- **Complete visible copy** in its approved language, including short interpretations and limitations — not a vague slide outline;
- read order, blocks, grouping, page number, chart/diagram selection;
- each arrow's source, target, condition and meaning (time sequence vs data flow vs causal claim);
- quantitative chart data **verbatim** with units, baseline, device/model and metric layer;
- source links and direct connection between claim, chart and source;
- what must be native PowerPoint editable, what may remain a separate movable image;
- exact speaker-note outline: FIRST page explanation, SECOND independent source interpretations;
- risk of misreading and explicit caveats.

A technical manager unfamiliar with the particular research should be able to explain the figure *without guessing at tiny process labels*. **More explanation in notes is valuable but does not rescue incomprehensible visible content.**

## Phase 4 — Choose media by evidence semantics

Use the least lossy visual form:
- **Measured comparable numeric values**: programmatically plot with source data (matplotlib/native PowerPoint charts) or editable native bars; show axes/baselines/units/scenario and never derive new gains by merging incomparable experiments.
- **Complex published method Figure**: prefer accurate cited use after reading original text, Figure/Table/caption and rights conditions. Crop only coherent panels without hiding axes, baseline or limitations. A raster paper figure is independent and movable, **not** an editable internal chart.
- **Cross-source technical synthesis**: original native shapes/connectors or SVG/diagram tools; mark “study synthesis / conceptual illustration” where confusion is possible.
- **Icons/decoration**: independent image assets or original vectors with consistent brightness and style. Generative image tools may be useful for decoration, **never for fabricating quantitative figures, claimed mechanisms or invented text**.

Always distinguish CPU ISA extension vs separate accelerator, compiler-time transformations vs runtime execution, tool API success vs real-world effect, source product announcement vs independent measurement.

## Phase 5 — Visual system and editable production [Gate 3]

1. Define an approved theme from 2–3 representative pilot pages, including body background, title band, typography, color roles, margin grid, icon treatment, page numbers, citations/footer and typical content density.
2. Choose page roles: evidence chart / mechanism / technical ownership / roadmap / decision. Keep role-specific compositions but **one shared title/background/footer system**.
3. Use original editable PPT text, shapes, lines, tables and charts wherever reasonable. Independent complex images may remain movable images; don't flatten whole slides to PNG.
4. Review **all arrows** for physical endpoint correctness: a visually horizontal right arrow must have equal y endpoints, not a tiny downward slope from the native shape. Ensure branches are actually labeled and link to correct destination.
5. Build full-speaker-note text in PowerPoint **Notes**, not only a separate GitHub Markdown or slide footer.
6. Include primary citations as legible source labels and clickable links; leave a visible safety margin below footer.
7. Build a **version manifest**: page ID, accepted revision, source, design owner, acceptance status. Never silently replace an accepted page with an older/experimental one.

Detailed quality gates and change-control categories: [QA contract](references/qa-release-gates.md) and [change control](references/change-control.md).

## Phase 6 — Speaker notes are the technical teaching layer [Gate 4]

For every page, Notes follow **this exact order**:

**Part I: Detailed explanation of what is actually on THIS slide**
- Explain the page's role, full visual read order, each major card, flow branch, numerical comparison, mechanism/causality and output.
- Distinguish execution domain ownership, interpretation, source fact and engineering synthesis.
- Explain conditions/limits; tie the page to the next page and to the original decision question.
- Do **not** just paraphrase the title or repeat chart captions.

**Part II: Source-by-source explanation**
For EACH material paper/official doc/vendor source: full citation and original URL; source type; question addressed; method/evidence/main claims (plus units/device/baseline if measured); exact part of the slide it supports; what it **does not** prove; differences between author/vendor claims and our synthesis. Disclose non-independent sources.

Cover and agenda notes explain scope and reading route; do not fabricate citations merely to fill a template.

Use [notes and source explanation contract](references/notes-evidence.md).

## Phase 7 — Iterative user review, visual QA and release [Gate 5]

Sequence:
1. Validate **content logic and source fidelity** before visual decoration.
2. Show 2–3 representative editable slide pilots and **PNG thumbnails** to agree direction.
3. Produce the deck; render EVERY slide using a real slide renderer; inspect thumbnails **and full-resolution** for typography, source links, chart axes and arrows.
4. Review source data against originals, software/hardware hierarchy, measurement scope, and presenter-note-source mapping.
5. Run OOXML/slide inspection of page count, notes, source links, text, page-number convention and editable objects; test PPTX→PDF/PNG consistency.
6. Apply **Minimal Change & Content Fidelity（最小变更与内容保真）**: state the intended edit, allowed fields and protected content. Then run change-specific checks:
   - layout/color/margins/arrows only → visible text, notes, data and links MUST be identical;
   - notes-only → slide XML, graphics, links, relationships must be identical; only notes XML may change;
   - explicit content edit → only approved text/claim IDs may change, update notes/evidence map accordingly.
7. Track user approval by **page and revision**, not by all-deck blanket claims. Retain accepted parts; no wholesale redesign as the default.
8. Release editable PPTX + PDF + preview bundle + QA/issues report. Do not declare Windows PowerPoint/room-projector compatibility tested when only another renderer was used.

## Outputs
- Evidence-backed slide content/storyboard and per-slide contracts.
- Theme/asset policy and page-level revision manifest.
- Editable presentation (normally PPTX), same-source PDF and PNG previews.
- Detailed speaker notes embedded in PPTX plus readable notes export if requested.
- Claim/source/figure traceability record; QA results, open issues and user acceptance state.

## Quality checks / exit criteria
Release as **review candidate** only if:
- every page has a clear reason to exist and can be understood by its target technical reader;
- every measured claim has a faithful source, comparable scope and limitations;
- no unsupported proprietary hardware or performance novelty was invented;
- all important connectors/flows carry the correct semantics;
- header/background/footer citations/page numbering stay coherent across the deck;
- links, Notes and native objects survive export and merging;
- all edits to accepted pages pass declared no-drift checks;
- all untested conditions are explicitly open, not implied “passed.”

Mark **final accepted** only after user content/design approval and whichever actual client/projector tests they require.

## Dependencies
Academic Insight (recommended evidence source), original papers/official documentation, a licensed/available PPTX builder or slide editor, a real slide renderer, quantitative graph tooling where necessary, optional vector/image tools. **Tools are replaceable**; do not assert a third-party app was invoked unless it actually was.

## Safety / privacy
Use public-safe examples and data unless the user explicitly supplies and authorizes other material. Do not disclose internal research labels, confidential organizational owners, unreleased vendor roadmaps, paid images or unlicensed figure assets. Links and figure permissions must be verified for intended distribution. No made-up performance or experimental runs.

## Version notes
- **v0.1.1 / 2026-10-09** — explicit Minimal Change & Content Fidelity rule; arrow-only/notes-only are examples, not a rule that text can never change.
- **v0.1.0 / 2026-10-09** — generalized from iterative engineering/academic leadership deck construction; not yet validated in a second independent domain. Evaluate on a software/compiler or thermal-management report before promoting this candidate to a stable release.
