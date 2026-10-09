# Per-Slide Detailed Design Contract

**No visual rendering until this contract is coherent.** A vague outline of topics is not a detailed slide specification.

```yaml
slide_id: "06"
section: "Evidence"
audience_question: "Which processor really improves end-to-end latency?"
takeaway_headline: "A clear full sentence the leader can repeat"
previous_slide_bridge: "What question did previous slide leave?"
next_slide_bridge: "Which question will this slide raise?"
status: "DRAFT | PILOT | USER_ACCEPTED | INTEGRATION | FINAL"
locked_content_version: "v1"
page_number_convention: "physical pages, includes cover+agenda"
visible_copy:
  title: "VERBATIM"
  subtitle: "VERBATIM"
  blocks:
    - id: "a"
      heading: "VERBATIM"
      body: "complete exact text"
      why_here: "what this contributes to the takeaway"
visual:
  form: "native diagram | native chart | coded plot | published figure | hybrid"
  reading_order: "A -> B -> C"
  axes_or_nodes:
    - "each axis, major node, layer"
  arrows:
    - from: "source box"
      to: "target box"
      meaning: "condition/data dependency/action sequence/causal influence"
      intended_orientation: "horizontal / vertical / deliberately angled"
  comparisons: "device/model/backend/metric unit/baseline/scopes"
  artwork: "decorative only / original conceptual / published Fig X"
  editability: "all text, boxes, arrows native; artwork independent image"
evidence:
  source_claim_ids: ["..."]
  visible_citations: ["source title/link"]
  unsupported_inferences_to_avoid: ["..."]
notes:
  part_I_content_explanation: "visual reading script: all blocks, causality, number meaning"
  part_II_sources: "one entry per cited source and its limits"
page_qa:
  scientific_accuracy: "PASS/OPEN"
  independent_readability: "PASS/OPEN"
  cross_page_logic: "PASS/OPEN"
  editability: "PASS/OPEN"
  citation_traceability: "PASS/OPEN"
  revision_scope: "visual-only / notes-only / authorized-content"
```

## Per-page review questions
- Could the target reader state the result in 10 seconds and explain a diagram in 30 seconds **without pretending an unknown is proven**?
- What precisely enters/exits every arrow and why? Are multiple levels (ISA/CPU/NPU, compile/runtime, tool success/outcome) accidentally drawn as peers?
- Is every quantitative bar on the same measurable basis? Are all technical names explained locally?
- Is the amount of copy appropriate for projection? Explanations should not disappear simply to improve thumbnail cleanliness.
- Do citations identify which specific measured claim they support, not merely appear at the page bottom?
- Does Part I of Notes explain *visible content* in more depth instead of merely rephrasing the headline?
- Does the page lead naturally to the next, and does it support the deck-level leadership decision?

## Composition guidance
- Use different forms for evidence, mechanism and roadmap pages; visual consistency means one controlled style system, **not every page having identical cards**.
- Prefer native shapes/diagrams for cross-paper abstraction. Do not make pseudo-quantitative bar lengths for conceptual estimates.
- Every slide has one primary conclusion; dense source method details belong in notes/appendix, but necessary measurement bounds must remain visible.
