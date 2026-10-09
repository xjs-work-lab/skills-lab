# Evidence extraction template v0.7

## Source identity
| Field | Value |
|---|---|
| Evidence ID | |
| Canonical object ID(s) | |
| Title / patent / source | |
| Source type | Academic / Patent / Vendor / Official doc / Open source / Independent measurement |
| Primary/original URL | |
| Authors / inventors | |
| Affiliations / assignee | |
| Year / venue / publication date | |
| Peer-reviewed / grant status | |
| Artifact / code / data | |

## Authority / provenance context
| Field | Value |
|---|---|
| Key scholar/group | |
| Repeated relevance to topic | |
| Institution / field-strength context | |
| Ranking source/year if used | |
| Independent corroboration | |
| Authority caveat | Reputation/ranking is context only |

## Technical evidence
| Field | Value |
|---|---|
| Research question | |
| Setting / target system | |
| Workload / population | |
| Method / intervention | |
| Comparator / baseline | |
| Outcome metrics | |
| Resource / budget | |
| Method overhead | |
| Main result | |
| Mechanistic evidence / ablation | |
| Failure cases / boundary | |
| Limitations | |
| Public-disclosure status | Fact / company claim / independent measurement / not publicly evidenced |

## Claim extraction
For each decision-relevant claim:
- Claim ID:
- Claim text:
- Grammar: FACT / CLAIM / OBSERVATION / INFERENCE / HYPOTHESIS
- Source/evidence pointer:
- Directness:
- Contradicting evidence:
- Capability implied:
- Decision relevance:

## Object / relation mapping
Objects touched:
- SOURCE:
- CLAIM:
- CAPABILITY:
- ACTOR:
- DIRECTION:
- EXPERIMENT:
- DECISION_EVENT:

Relations:
- source -> EVIDENCES -> claim
- claim -> SUPPORTS / CONTRADICTS -> direction
- capability -> EVIDENCED_BY -> source
- actor -> HAS_CAPABILITY -> capability
- direction -> VALIDATED_BY -> experiment
- decision -> KILLS / NARROWS / UPGRADES -> direction

Use only relations actually supported by evidence/reasoning.

## Prior-art / novelty fields
- Mechanism actually covered:
- Relevant claim/section:
- Broad novelty impact: Keep / Kill / Narrow / Unclear
- Product/public capability gap: evidenced / not publicly evidenced / unclear
- New-regime differentiation: Native / Amplified / Generic enabling
- Residual whitespace:
- FTO/legal caveat:

## Normalization
- Same workload/system?
- Same protocol?
- Same comparator?
- Same hardware/environment?
- Same software/compiler/runtime version?
- Same metric/aggregation?
- Same repetitions/noise treatment?
- Same measurement budget?
- Same overhead?
- Same correctness/product constraints?

Comparability: Direct / Approximate / Non-comparable

## Insight mapping
- Five-Look category:
- Phenomenon:
- Pattern across sources:
- Mechanism:
- Tension:
- Insight [INFERENCE]:
- Competing hypothesis:
- Smallest discriminating experiment:

## Decision status
- Current status: KEEP / UPGRADE / DOWNGRADE / NARROW / KILL
- What exactly is being killed or kept?
- Evidence gate: NOT_EVALUABLE / STRUCTURAL_SIGNAL / SYSTEM_VALUE / ARCHITECTURE_OR_PRODUCT_CANDIDATE
- Capability maturity:
- Evidence confidence:
- Next evidence required:

## Confidence audit
- Evidence strength: High / Medium / Low
- Directness: Direct / Indirect
- Freshness:
- External validity:
- Reproducibility:
- Independent corroboration:
- Public-disclosure limitation:
- Major uncertainty:

## Research transaction footer
- Transaction ID:
- Objects created/updated:
- Relations added/removed:
- Current-state conclusion changed?:
- Decision event changed?:
- Repository canonical write location:
- Derived/generated views to refresh:


## v0.8.0 decision-closure supplement
- Research execution mode (PUBLIC_ONLY / EXPERIMENT_DESIGN_ONLY / EXECUTION_AUTHORIZED):
- Decision question and closure status (CLOSED / CLOSED_WITH_BOUNDARY / PARTIAL / OPEN):
- Proof-scope exclusion / what this SOURCE does NOT demonstrate:
- Metric layer (kernel/operator/stage/model-E2E/agent-E2E/device-QoE/device-energy):
- Cross-paper comparison validity:
- Evidence independence cluster (shared group/artifact/device):
- Strongest alternative and counterevidence:
- Physical residual / hardware four-gate status (only when relevant):
- Actionable technical layer versus organization authorization:
- Evidence-backed presentation handoff exact claim and limitations:
- Future public evidence that would reopen decision:
