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

See `SKILL_SPEC.md` for the canonical Skill contract.
