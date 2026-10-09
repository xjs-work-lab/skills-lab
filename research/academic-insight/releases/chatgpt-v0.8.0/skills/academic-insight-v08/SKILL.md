---
name: academic-insight-v08
description: Enhanced Academic Insight for evidence-driven technology research, literature reviews, patents and industry insight requiring authority-guided discovery, Five-Look-Three-Set, paper/patent 10Q, strongest alternative baselines, public-only decision closure, no unsupported novelty quotas, and physically necessary hardware evidence gates only where hardware is claimed.
---

# Academic Insight v0.8.0 — compatible enhanced workflow

The Academic Insight plugin also preserves its comprehensive **academic-insight v0.7.1** skill as the reference core. For substantial projects, read and follow the installed academic-insight core first (field map, authority-guided search, five-look-three-set, ten-question paper/patent cards, provenance and object-relation evidence, graph integrity, current state vs history), and apply the stricter v0.8 gates below on top. This is an upgraded skill, not a replacement for academic research with superficial presentation prompts.

## 0. Goal lock, research mode and decision questions
Recover research SSOT if it exists; lock audience/decision, target system/population, timeline, user value and measurable outcome, controllable layers, scope/exclusions, required source types, and decision questions. State one research execution mode:
- `PUBLIC_ONLY`: published papers, patents, official engineering docs, artifacts, and independent public benchmarks. Never perform/require local tests, phone measurement, simulation, proprietary data acquisition or PoCs. Public gaps limit confidence; they don't force an endless research cycle.
- `EXPERIMENT_DESIGN_ONLY`: describe the smallest discrimination test, but do not execute it.
- `EXECUTION_AUTHORIZED`: execute only on explicit user authorization, using available tools, controlled baselines, and ethics/privacy safeguards.
Never silently escalate the mode.

## 1. Field map and search coverage (preserved from core)
First identify authoritative journals, conferences, recurrent scholars and groups, reviews, official benchmark/artifact ecosystems, terminology and adjacent disciplines. Search seeds, expand backward/forward citations, authors, groups, venues and technical synonyms; then search adjacent approaches, industry, vendor, patents, null and negative evidence. Reputation improves discovery but NEVER proves claims. Audit recent/foundational balance, cross-geography and group coverage, and alternative technical mechanisms.

## 2. Five-Look-Three-Set and source-claim semantics
Five-look: trends, workloads/real users, competitors/substitutes, team-control scope, remaining opportunity. Three-set: control point, outcomes under budgets/constraints/overheads, technical route with strongest baseline and falsification. Explicitly separate [FACT] sourced method/results, [CLAIM] author/vendor assertion, [OBSERVATION] cross-source pattern, [INFERENCE] analyst synthesis, [HYPOTHESIS] testable conjecture. Never promote one category to another.

## 3. Proof scope ledger and measurement layers
Decision-critical propositions require an original source title/URL/section/table/figure, source type, exact support, explicit *not proved*, device/model/workload/compiler/runtime/backend/precision/baseline/units and uncertainty. A patent proves the existence of a filing/disclosure/claim, not measured product gain. An official API doc proves API contract/capability, not the OEM's end-to-end user experience. Group/document independence must be recorded: shared authors, artifacts, datasets, model, measurement campaign or a single product disclosure are not independent confirmations.
Tag quantitative claims as `KERNEL_CALL`, `OPERATOR_AGGREGATE`, `MODEL_STAGE`, `MODEL_E2E`, `AGENT_TASK_E2E`, `DEVICE_QOE`, `DEVICE_ENERGY`. Different levels cannot be silently combined into one advantage figure. Compare direct/approximate/non-comparable explicitly.

## 4. Reading depth: paper/patent 10Q, lineage, evidence cards
For important papers: problem mapping; novelty/new-regime relevance; hypothesis; competing prior work; mechanism; experiment design; artifact; evidence-vs-hypothesis; decision contribution; next action. For patents: independent claim, dependent embodiments and claim scope BEFORE a novelty conclusion. Reconstruct group lineages where relevant; record original links, authors, venue/status, artifacts, missing facts, negative evidence, and actor-capability boundaries. Current conclusion and immutable decision history stay distinct.

## 5. Strongest alternatives and conditional physical-hardware gate
When and ONLY when new hardware/ISA/CPU microarchitecture physical uniqueness is asserted, ask FOUR questions in order:
1. Target significance: does credible target-system evidence show a frequent, material user/system problem?
2. Strong alternatives: has optimized current ISA/compiler, CPU kernels, accelerator backend, runtime/OS, existing shared memory/caches/scheduler and product mechanisms been fairly considered?
3. Physical residual: what remaining physical state/control/dataflow latency-energy bottleneck cannot be sufficiently removed by stronger general mechanisms? Narrative complexity alone does not prove new circuitry is needed.
4. Benefit/cost: credible same-scope phone/system gain versus power, area, leakage, ecosystem, security, compatibility and validation overhead?
Gate results: `ENGINEERING_ACTIONABLE`, `CONDITIONAL_RESEARCH`, `WATCH`, `NOT_SUPPORTED`. Missing evidence must remain missing, not synthetic. This four-gate test is *analyst screening*, not an industry-published standard, and is not forced on pure compiler or thermal collaboration questions.

## 6. Research convergence with honest zero
Classify separately: (1) actionable current-platform engineering, (2) distinctive directions with adequate evidence — **zero is valid**, (3) conditional research reserves/watch, (4) unsupported novelty/claims/Kill. A weak case does not become an opportunity because the user requested 2–3 bets. Kill EXACTLY the unproven novelty/necessity, not the underlying useful engineering path. Use `CLOSED_WITH_BOUNDARY` for a decision question answered to the ceiling of authorized evidence, even when unresolved scientific work remains.

## 7. Cross-source synthesis / portfolio / roadmap
Find patterns, competing hypotheses, alternative mechanisms, cost transfer across layers, proxy-vs-end-user mismatch, failure modes and uncertainty; assign concrete technical control domains (e.g. compiler/CPU, Runtime/OS, App, SoC) without inventing team personnel/approval or product commitments. Source -> claim -> capability -> opportunity -> decision traceability required. Classify Native/Amplified/Generic enabling; avoid renaming old primitives “Agent-only” merely because of marketing.

## 8. Review/exit/handoff
Per round summarize cumulative answers to initial decision questions, what changed and why, knowledge gaps, confidence limits, alternative mechanism checks and next smallest **authorized** public research step. Preserve canonical evidence and primary URL. Finalize once a bounded decision is possible; no forced experiments or endless quotas. Send presentation workflow an evidence-backed handoff: exact claim, source type and original URL, Figure/Table, measured scope/baseline, evidence boundaries, analysis status, technical owner and unknowns. A PPT visual must not upgrade an inference into fact. GitHub repository cutovers, migrations and setup operations do NOT belong to Academic Insight methodology.
