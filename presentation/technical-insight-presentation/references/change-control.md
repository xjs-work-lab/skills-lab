# Change Control and Scientific Fidelity

## Approved revision manifest
At every user review track: `page_id`, `revision`, `what_the_user_accepted`, `what_remains_open`, `content_lock`, `visual_style_anchor`, `source_links`. The accepted page is the revision base for future edits, unless user explicitly approves a rebuild.

## Categorize changes before editing

| Authorized change | Allowed mutations | Forbidden mutations without separate authorization |
|---|---|---|
| `VISUAL_ONLY` | fonts, spacing, lines/arrow position, image brightness, background, safely reflowed layouts | ANY visible textual statement/data, source/notes text, URL target, metric/baseline |
| `ARROW_ONLY` | native line endpoints/arrowheads for specified diagrams | text, boxes, numeric data, note content, unintended connectors |
| `NOTES_ONLY` | specified slide Notes text | any slide XML, diagram/media object, hyperlinks, order, page count |
| `CITATION_ONLY` | approved citation label/URL repair; notes source mapping | new evidence interpretation, chart, headline |
| `CONTENT_EDIT` | explicitly approved text/claim IDs and directly dependent notes/figures | silent updates to other pages' claims, changing baseline or experiment semantics |
| `INTEGRATION` | combine accepted slide versions and safe global template normalization | version regression, whole-slide rasterization, omission of Notes/links |

## Invariance tests (for OOXML/PPTX files)
- **VISUAL_ONLY**: extract full slide text in reading order and compare exact strings/values; notes/links identical; reproduce projected layout.
- **NOTES_ONLY**: unzip old/new PPTX, compare all parts excluding explicitly permitted `ppt/notesSlides/notesSlide*.xml`; all other members should be byte-identical whenever package strategy allows.
- **ARROW_ONLY**: compare all texts, notes, hyperlinks/media and check the allowed native connector paths only. For expected horizontal lines, assert `y_start == y_end` at presentation geometry precision; compare exact neighboring shape targets visually.
- **CONTENT_EDIT**: require a source-backed diff note `claim_id: before → after; primary_source; why changed`; update provenance and notes, not just title.
- **INTEGRATION**: explicit input-deck/page manifest; check outputs have expected page count, notes, linked source targets and native element counts. Compare renders with approved source slides to catch old revisions.
- For any output: render every page, inspect full resolution, and check bottom citations' safe margin, bright header artwork, title-band consistency and page numbers including cover/agenda as **defined by this deck's content contract**.

## Evidence/visual traps observed in practice
- Tiny `0.02in` native line height makes a nominal right arrow slant downward. Connectors must have honest endpoints.
- A template copied from different pilot rounds yields five background shades, title sizes and header heights in one deck.
- Moving bottom citations upward can accidentally overlap cards; re-render and compare.
- A bright generated header image can overpower a dark technical title and differ between pages; reuse one muted asset.
- A public source link may be genuine, but the slide claim can overstate what it proves; source QA is semantic, not URL-only.
- Speaker Notes may be thoroughly sourced but fail as a technical teaching script; require explanation first.

## Release language
Write `QA: validated with renderer X, PPTX structure, hyperlinks, Notes` precisely. Do not claim “tested in Windows PowerPoint / boardroom projector” without real testing. Never claim a user accepted a page only because automated checks pass.
