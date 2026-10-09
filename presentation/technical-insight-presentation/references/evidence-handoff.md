# Evidence-to-Presentation Handoff

Do **not** start with “make a PPT” while the underlying research is still structurally undecided.

## Required global context
- Audience and specific decision(s); domain, target platform, time horizon.
- Authority/currentness of the research conclusion, as-of date, known unknowns.
- Strongest alternative technical approaches; what is proven/possible/unsupported.
- Allowed content and source usage; confidentiality, media licensing and experiments authorized or forbidden.
- Owners of technical layers vs actual, independently authorized organizational owners.

## Per-claim record (one row per consequential statement)

| Field | Required meaning |
|---|---|
| `claim_id` | Stable reference into the evidence archive |
| `exact_statement` | Source-faithful claim, no rhetorical strengthening |
| `status` | FACT / SOURCE CLAIM / CROSS-SOURCE OBSERVATION / INFERENCE / HYPOTHESIS |
| `source_type_title_url` | Paper, official doc, company claim, patent, dataset or synthesis, original link |
| `location` | Figure/Table/section/page supporting the statement |
| `support_summary` | What the source actually demonstrates |
| `boundary` | What that source cannot demonstrate or generalize |
| `experimental_scope` | Device, workload, model, kernel/stage/agent-E2E, runtime/backend, precision |
| `comparison` | Exact strong baseline, unit, statistic, and whether comparability is direct |
| `independence_cluster` | Same lab, vendor, dataset or software stack? |
| `relevant_decision` | Which conclusion or technical-control point it affects |
| `presentation_policy` | Show as chart, mechanism, short citation, notes only, or omit |

## Acceptance
1. Claims on “performance advantage” must carry comparable metric scopes and baseline.
2. Neither a patent application nor an official API doc automatically proves a shipped feature or measured whole-device benefit.
3. The inference/hypothesis boundary is visible in the page contract **and** speaker notes.
4. Source list is an evidence set, not a citation quota; discard unrelated links.
5. Every presentation-decision item is linked to research provenance. If the report is not decision-ready, return to research rather than inventing a conclusion.

## Example of correctly split support
- Direct: an official SDK supports shared-buffer registration.
- Inference: version-aware lifecycle management may affect a repeated Agent workload.
- Not established: the official SDK proves a new Agent-only CPU coherence primitive or a measured handset battery improvement.
