# Six page anatomies: exactly how to compose technology insight slides

All numbers are in PowerPoint inches (16:9, W=13.333, H=7.5). Templates are editable and scalable, *not* strict grid cages. Code examples: `../scripts/make_template_deck.js`. Color values are theme tokens, never hard-coded final policy.

## 1. COVER — thesis and scope
- Left `x≈0.7–7.0`, thesis at y≈1.6 with 2 large editable lines. Support in 2 sentences y≈4.3; stable bottom scope chip strip y≈6.25.
- Right illustration or original abstract-native geometry `x≈8–12.9, y≈1.1–5.6`; preserve intentional negative space. Single optional decoration, not a massive complex gradient under text.
- No source clutter. Accurately state research status/time period; no made-up organizations or approved budget.

## 2. EVIDENCE — source-to-conclusion, comparability first
- Top conclusion headline, contextual subtitle clearly naming equipment/workload/baseline.
- Main broad white panel `x≈0.35 y≈1.5 w≈12.63`.
- 2–3 separate lightly tinted comparison panels (not all values forced onto one scale). Each panel: a verbal question, measured quantities chart/table with exact unit, 1-line interpretation, source.
- Bottom full-width implication strip: **what is actually supported** vs **what cannot be concluded**. Prefer one chart panel large and 1–2 narrower interpretation panels if data distribution is uneven.
- Demo deliberately labels mock values as mock, not scientific findings. For real data populate native data chart and Notes with original Figure/Table.

## 3. MECHANISM — explain every step
- One main panel with visible 4–5-stage horizontal chain; arrows may only point between adjacent stage cards or precisely named interfaces.
- Each stage: index, action verb and actor, reason/technical constraint, output handed to next step. Card height fits text; never clip flow labels.
- Provide an explanatory row or equation underneath linking steps to paper mechanism; bottom strip says how this relates to decision, including limits.
- If branching/feedback is essential, use 2-row flow or dependency graph instead of forcing everything through a 5-card chain. Label split/join conditions.

## 4. OWNERSHIP — layered execution/control responsibilities
- Horizontal lanes, each with control owner and concrete contract: Agent/App (intent/permissions), Runtime/OS (placement/scheduling), CPU/LLVM (kernels/call paths), GPU/NPU (accelerated kernels). **Layers do not imply OS electrically directs an NPU core**; explain software API/control semantics.
- Use vertical callouts for contract boundaries; connect only actual data or authority relations. Annotate background resource conflicts, shared memory and fallback path only if evidence warrants.
- Bottom external arrow to what remains physically irreducible or still unproven.

## 5. ROADMAP — time × technology, with evidence gates
- Top: timeline years or phases; left: technical layer rows; cells: **action + outcome + gate**. Mark conditional research and watch separately from committed engineering.
- Don't imply human resources, budget or product release approvals absent authorization. Column subtitles should describe change in decision maturity (e.g. baseline quality → cross-layer contract → re-evaluate physics).
- Show 3–4 layers and 3 columns, not a dense Gantt full of fake precision.

## 6. DECISION — prioritized action vs research reserve
- Left 60–70%: 2–3 active recommendations, each with expected engineering output and owner **technology layer**. Right 30–40%: evidence gap, conditional reserve, non-investment/Watch, reopen trigger.
- Each card must explain its conclusion sufficiently so leadership does not have to guess meaning from an acronym or research code.
- Bottom: 2–3 exact decisions or questions sought from management; distinguish *recommendation* from *approval*.

## Cross-domain recipes (same visual grammar, different evidence anatomy)
- **Compiler research**: pipeline arrows (front-end → intermediate representation → optimization → codegen) should be real code/method dependencies, plus institution/group evidence cards; group names and year/venue readable.
- **Mobile thermal**: original device cross-section, heat-spreading stack and experimental boundary dominate; composition should place physical/measurement Figure first, and authors/institutions and strategic applicability second. Use meaningful material/geometry annotations, never invented thermal performance data.
- **CPU-uArch**: performance evidence at exact operator/stage/system layer, execution ownership and conditional hardware necessity gates.
- If a source does not justify arrows, choose a statement/annotated comparison instead. Scientific communication beats forced “infographic” decoration.

## Starter palette meanings
- `ocean`: precise engineering, cool technical evidence (not mandated).
- `forest`: materials/thermal/sustainability, calm strong contrast.
- `plum`: research/strategy with subtle warmth, suitable for international group comparisons.
- `graphite`: minimal neutral executive technical report, colored emphasis intentionally sparse.

Theme can be overridden in JSON; custom colors go through luminance/contrast checks and full PNG user review. Never auto-recolor source Figure legends or a photo.
