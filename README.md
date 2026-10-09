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

- [Academic Insight v0.7.1 case review](research/academic-insight/REVIEW_2026-10-09.md) and [proposed v0.8.x incremental improvements](research/academic-insight/PROPOSED_V0_8_ADDENDUM.md). **The currently installed Academic Insight plugin is not updated by these files.**
- [Technical Insight Presentation v0.1.0](presentation/technical-insight-presentation/SKILL.md), with evidence handoff, page design, source-backed speaker notes, user-review change control and release QA templates. Draft pending validation outside the CPU-uArch case and any separate installation/release action.

The two Skills exchange an **evidence-backed decision package**, not a raw list of links. GitHub migrations and repository restructuring are explicitly out of scope for Academic Insight.
