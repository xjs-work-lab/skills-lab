## ChatGPT private plugins (2026-10-09)

Both reusable Skills are archived here **and actually released as private ChatGPT plugins**. See the [release ledger, exact published-source snapshots, and activation/verification instructions](PLUGIN_RELEASES_2026-10-09.md).

- [Academic Insight v0.8.0 — open ChatGPT plugin](https://chatgpt.com/plugins/plugins_6abe1edc35d88191863eee29d3ae6b0f): upgraded existing user-owned plugin; original v0.7.1 skill retained and v0.8 enhancement added.
- [Technical Insight Presentation v0.1.1 — open ChatGPT plugin](https://chatgpt.com/plugins/plugins_6ac8e41bf6ac8191a5b33fd81a37246c): new user-owned private plugin for editable evidence-backed PPT/report workflow.

**Published/owned does not by itself confirm the plugin was loaded in an existing conversation.** The current chat's skill list may need a new conversation or plugin selection refresh. Cross-domain validation of the presentation skill remains pending.

# skills-lab

Public library of reusable, runtime-independent skills for research, analysis, engineering, knowledge work, learning, and system operations.

## What a Skill is

A Skill is a reusable method/capability that can be invoked by one or more Agent roles.

Examples:
- academic research
- patent research
- evidence verification
- technology insight
- code review
- knowledge extraction

A Skill is **not**:
- a project
- an Agent role
- a model/runtime
- a project-specific procedure with no demonstrated reuse

## Design principles

1. Runtime independent where practical.
2. Clear inputs, outputs, and exit criteria.
3. Modular and independently editable.
4. Public-safe: no private project data, credentials, or confidential context.
5. Promote project methods here only after cross-project reuse value is demonstrated.

## Structure

- `research/`
- `analysis/`
- `engineering/`
- `knowledge/`
- `learning/`
- `meta/`
- `presentation/`

See `SKILL_SPEC.md` for the canonical Skill contract.

## New skill candidates (2026-10-09)

- [Academic Insight v0.7.1 case review](research/academic-insight/REVIEW_2026-10-09.md) and [proposed v0.8.x incremental improvements](research/academic-insight/PROPOSED_V0_8_ADDENDUM.md). **Historical proposal note:** Academic Insight has since been updated to v0.8.0; see [plugin release ledger](PLUGIN_RELEASES_2026-10-09.md).
- [Technical Insight Presentation v0.1.0](presentation/technical-insight-presentation/SKILL.md), with evidence handoff, page design, source-backed speaker notes, user-review change control and release QA templates. Draft pending validation outside the CPU-uArch case and any separate installation/release action.

The two Skills exchange an **evidence-backed decision package**, not a raw list of links. GitHub migrations and repository restructuring are explicitly out of scope for Academic Insight.
