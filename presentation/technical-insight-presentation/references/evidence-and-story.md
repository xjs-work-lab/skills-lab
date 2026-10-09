# Research evidence -> narrative -> complete page contract

## Research handoff (required fields)
`question | exact_conclusion | claim_status (FACT/SOURCE_CLAIM/OBSERVATION/INFERENCE/HYPOTHESIS) | source_title | original_URL | Figure/Table/section | publication_version | measured_level | device/workload/model/backend/precision | value/unit/statistic | strongest_baseline | source_proves | cannot_infer | confidence | owner_layer | change/reopen_trigger`.

Do not treat vendor marketing as peer-reviewed replication; cluster shared author/artifact/baseline sources. Single operator μs, aggregated operator ms, model stage seconds and full Agent task E2E are separate layers. No multiplying unrelated improvements. Patent methods/claims are not proof of device shipping/energy benefit or FTO.

## Narrative / story-arc map
For each planned page: `page_number, reader_question, conclusion_headline, why_previous_slide_leads_here, direct_evidence, strongest_alternative, expected_next_question, visual_role`.

First draft exact page text and intended technical image BEFORE production; note every arrow's source/target/branch/meaning; establish which findings are measurements and which are conceptual. Include first-line descriptions for readers unfamiliar with the specific mechanism. Document where the evidence sentence is supported.

## Full per-page design object
```yaml
page_id: 07
status: DRAFT | PILOT | USER_ACCEPTED | INTEGRATED
conclusion_headline: "A complete technical conclusion, not a label"
reader_question: "What decision does this page help?"
bridge_previous: "Why this page follows"
bridge_next: "What new question the next page answers"
visible_copy:
  subtitle: "scope and interpretive boundary"
  modules: [{id: m1, heading: "...", body: "VERBATIM"}]
visual_role: EVIDENCE | MECHANISM | OWNERSHIP | ROADMAP | DECISION | COVER
visual_recipe: "from slide-recipes.md; why chosen"
reading_order: [m1, m2, m3]
geometry_map: [{id: m1, target_rectangle_in_inches: [0.5,2,4,2]}]
connectors: [{from: m1, to: m2, meaning: "data transfer", branch: "condition"}]
metrics: [{value: 10.5, unit: ms, scope: operator, baseline: "...", source: "..."}]
evidence: [{claim_id: "...", source_URL: "...", figure: "...", what_it_cannot_prove: "..."}]
editable: [text, card, connector, table, key result]
movable_noneditable: [source_figure_or_decorative_art]
notes_part_I: "walkthrough all visual content"
notes_part_II: "each original source and limitations"
review_flags: [small_type, uncertain_source, arrow_semantics]
```

## The most important narrative QA
- The title states a testable or bounded conclusion (avoid “金字塔结论”, “总体判断”, undefined internal IDs).
- Visible modules together explain WHY conclusion follows; no decorative filler.
- Mechanism explanation matches exactly drawn connections, not loose analogy.
- Source relationships distinguish paper *claims*, vendor docs and analyst synthesis.
- Management recommendations are technical propositions, not approved internal resourcing or a product schedule.
