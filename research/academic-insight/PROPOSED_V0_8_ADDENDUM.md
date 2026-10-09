# Proposed Academic Insight v0.8.x addendum (drop-in modules)

**Status: candidate, not deployed in the installed Academic Insight v0.7.1 plugin.** Preserve all other sections of v0.7.1, including Field Map → authority-guided expansion, research lineage, Five-Look-Three-Set, Paper/Patent 10Q and evidence grammar.

## A. Insert into §1 Goal Lock — evidence execution mode

Set one explicit mode before research:
- `PUBLIC_ONLY`: public paper, patent, official vendor/standards documentation, published benchmark/artifact/reproducibility and publicly available independent tests only. **No owned tests, simulation, benchmarks, phone instrumentation, PoC or new experiment execution.** Missing evidence becomes a decision confidence ceiling.
- `EXPERIMENT_DESIGN_ONLY`: may describe discriminating experiments and acceptance/Kill criteria but must not execute them or assume assets/access.
- `EXECUTION_AUTHORIZED`: run tests only when explicitly requested/authorized, tools and data are actually available, with controlled baselines.

Never silently escalate a mode. On `PUBLIC_ONLY`, §17 “smallest discriminating experiment” becomes **smallest discriminating published evidence or future falsifier**; experiments are not a required next task or a blocker to bounded conclusion.

## B. Add to §4 Evidence grammar — claim-level proof scope

Every decision-critical claim requires the fields:

```
proposition_id | statement | FACT/CLAIM/OBSERVATION/INFERENCE/HYPOTHESIS
source_id + title + type + original_url + section/Table/Fig
what_the_source_directly_supports
method + system/phone + model + backend + version + metric + baseline + units
what_the_source_does_NOT_support
researchers_inference_and_dependencies
independence_cluster
confidence_and_required_next_public_evidence
```

Papers, official API documentation, patents, OEM product pages and analyst conclusions have **different warrant**. A vendor API document can evidence API capability, but not phone-wide energy/Agent goal completion unless measured there. A patent documents disclosed/claimed methods, not OEM deployment, validity of product gains or legal freedom to operate.

## C. Add after §§12–14 — strongest alternatives / physical necessity gate

**Trigger only when the desired output includes new hardware/uArch/ISA/IP necessity, or equivalent irreducible physical novelty.** Run four tests in order:

1. **Target significance**: credible direct evidence that the claimed problem occurs often enough on the actual target system and materially affects a real user/system outcome. Cross-platform analogy must be labeled indirect.
2. **Strong alternatives**: compare state-of-the-art compiler, optimized kernel/ISA, OS/runtime/scheduler, caching, protocols and existing product hardware. No weak baseline as sole argument for a proprietary primitive.
3. **Residual physical cause**: identify exactly which physical state, control point, energy/latency path cannot be replicated sufficiently by the strongest general software/hardware mechanisms. “Agent workflow has state” does **not** establish non-reconstructible Agent-private hardware state.
4. **Benefit vs silicon cost**: show credible same-scope latency/energy/QoE/correctness gain relative to area, leakage, security, verification complexity, ecosystem and deployment burden. Missing target-phone evidence is an OPEN/GAP, not an invented gain.

Possible outcomes: `ENGINEERING_ACTIONABLE`, `CONDITIONAL_RESEARCH`, `WATCH`, `NOT_SUPPORTED`. **Do not claim a new hardware Bet without gates 1–4**; any one missing may lead to conditional research rather than rejection of the underlying engineering problem. Four gates are **this Skill's analyst screening framework, not a published industry standard**.

## D. Add after §§13–15 — comparability and independence

A measured result should be tagged with its layer:
`KERNEL_CALL`, `OPERATOR_AGGREGATE`, `MODEL_STAGE`, `MODEL_E2E`, `AGENT_TASK_E2E`, `DEVICE_QOE`, `DEVICE_ENERGY`.
For each: units, numerator/denominator, equipment, model, precision, software/runtime/backend, fallback, CPU/NPU transfers, mean/peak/best-case and repetition protocol when known. Do not place different layers on one unlabeled axis or multiply their ratios to derive global benefit.

Identify **independence clusters**: same lab/author, artifact/code, workload or vendor disclosures may be complementary but not independent replications. Two vendor pages about the same device do not count as two independent performance demonstrations.

## E. Add after §18 — bounded decision closure, zero quota

Do not mechanically fill a requested number of recommendations. Report four separate sets:

1. **Engineering / platform priorities** — validated practical action with current ISA/compiler/OS/product leverage; not necessarily unique novelty.
2. **Distinctive directions satisfying their own evidence gates** — may be **zero**.
3. **Conditional reserves / watch** — researchable hypotheses with explicit reopen and Kill conditions, not stealth commitments.
4. **Do-not-start / unsupported claims** — exactly what novelty/causal assertion is unsupported, without banning the entire useful baseline technology.

Use `CLOSED_WITH_BOUNDARY` when all in-scope decision questions have bounded answers and known missing evidence cannot be acquired within the authorized mode. “No publicly proven silicon opportunity” is not “no silicon opportunity exists”.

## F. Add after §27 — seven-question closure board (generic)

Define the **specific** final decision questions for the project at Goal Lock (number may vary). Track each:
`QUESTION | EVIDENCE_FOUND | WHAT_WE_CAN_ANSWER | REMAINING_GAP | BOUNDARY | CLOSED / CLOSED_WITH_BOUNDARY / PARTIAL / OPEN`.
End each major round with cumulative goal progress, not document count. A still-open science question can coexist with a closed management recommendation when confidence ceilings are explicit.

Never say an unperformed test, user review, deployment or management approval is complete.

## G. Add to §28 Final deliverable — cross-layer actionability and presentation handoff

Separate:
- **technical control point** (compiler/CPU, Runtime/OS, Agent/App, memory/SoC, etc.);
- **recommended action** (follow, engineer, conditionally research, do not initiate);
- **actual organization authorization** (unknown unless explicitly documented).

An optional evidence-to-report handoff for a presentation should contain:
`claim_id / exact factual statement / slide-use summary / source URL / figure or table / experimental scope / baseline / cannot infer / status / technical owner / confidence`.
The receiving **Technical Insight Presentation** Skill handles leadership narrative, page design, visual rendering and speaker notes. Academic Insight remains source-of-truth for what is and is not evidenced.

## H. Suggested small patch to references/evidence-template.md

Add fields: `Evidence execution mode`, `Proof-scope exclusion`, `Metric layer`, `Same-scope comparability`, `Independence cluster`, `Strongest alternative`, `Physical residual` (when new hardware is claimed), `Bounded decision closure state`, `Actionable layer vs authorized owner`, `Reopen trigger by new PUBLIC evidence`, and `Evidence-to-report sentence`.

## Acceptance tests for the revised Skill

- **CPU case**: keep three engineering tracks and a valid **zero new ISA** answer; reject treating single-kernel gains as full Agent task speedup; `PUBLIC_ONLY` must not generate a self-run PoC task.
- **Non-hardware case**: hardware four-gate test must **not** be forced on compiler/thermal collaboration research; preserve group/institution lineage, scholarly authority-first search, real original links and direct paper methods.
- **Vendor documentary case**: distinguish source API capability from measured OEM deployment/end-to-end outcome.
- **Portfolio quota case**: user asks for 3 novel bets but evidence justifies 0 or 1; output honest counts and explicit unfilled slots.
- **Handoff case**: a report or PPT cannot upgrade an `INFERENCE` to a `FACT` merely because a persuasive diagram was drawn.

## Release status update — 2026-10-09

The above text remains the original design proposal. **Academic Insight v0.8.0 is now released** as an updated private ChatGPT plugin. The existing v0.7.1 core skill is retained and a compatible `academic-insight-v08` skill and decision-gate reference are added. The [canonical integrated v0.8 SKILL.md](SKILL.md) preserves the earlier workflow, and the exact [released plugin overlay snapshot](releases/chatgpt-v0.8.0/) is archived. See [release ledger](../../PLUGIN_RELEASES_2026-10-09.md). Actual invocation in a refreshed ChatGPT conversation remains to be confirmed.
