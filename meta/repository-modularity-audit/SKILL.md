# Repository Modularity Audit

## Purpose

Identify repository structures and files that create unnecessary coupling, oversized change surfaces, duplicated state, or poor long-term maintainability.

## Use when

- a repository is becoming a long-lived knowledge/project database;
- Markdown registries or status files grow continuously;
- small updates require editing large files;
- multiple documents duplicate current state;
- evidence objects should be independently editable;
- before or after a governance/refactor round.

## Do not use when

- the repository is a tiny disposable prototype;
- the requested task is only a local content correction with no structural implication.

## Inputs

- repository tree
- key current-state documents
- file sizes or approximate content lengths
- evidence/index conventions
- current authority rules

## Procedure

1. Identify authoritative state pages and detect duplicates.
2. Find continuously growing registries/logs.
3. Flag large catch-all files and mixed-responsibility files.
4. Check whether independent evidence objects have independent files.
5. Check whether indexes are thin navigation layers rather than evidence containers.
6. Check whether small edits cause broad file rewrites.
7. Check whether history is separated from current state.
8. Propose the smallest safe modularization; avoid fragmentation for its own sake.
9. Preserve stable IDs and links during migration.
10. Validate references after restructuring.

## Heuristics

A file deserves review when:
- it is continuously append-only and mixes many independent objects;
- unrelated edits regularly touch the same file;
- merge/review scope becomes difficult to understand;
- it duplicates canonical data held elsewhere.

Size alone is not a defect. Size is a signal when combined with mixed responsibility or frequent independent edits.

## Outputs

- findings by severity
- keep / split / archive recommendations
- target ownership for each module
- migration sequence
- link/reference impact
- post-change validation checklist

## Quality checks

- no stable evidence IDs broken without migration mapping
- no current-state authority duplicated
- indexes remain readable and thin
- modularization reduces change coupling
- no needless explosion into tiny files

## Exit criteria

A repository has:
- explicit state authority;
- bounded modular files for independently changing objects;
- a clear index/navigation layer;
- validated links after any restructure.

## Safety / privacy

This Skill is structural and must not publish private repository contents into public artifacts.
