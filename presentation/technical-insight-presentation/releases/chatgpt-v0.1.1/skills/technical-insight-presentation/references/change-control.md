# Minimal Change & Content Fidelity — revision contract
Declare EDIT_TYPE and allowed/protected object attributes BEFORE work.
- VISUAL_ONLY: background, typography, spacing, decor, line/endpoints may change; zero unapproved visible text/data/links/Notes drift. Compare exact native shape texts, source and note links.
- NOTES_ONLY: only PPTX notesSlide XML may change; all slide XML/relationships/media/master must stay byte-equivalent when package strategy permits.
- ARROW_ONLY: relevant connector coords only; horizontal shapes `start_y == end_y`; verify real source→target, branch semantics and no new overlap.
- CONTENT_EDIT: explicitly approved claim and directly dependent figure/notes may change, track before/after, primary source and decision rationale; unrelated blocks locked.
- INTEGRATION: use accepted source versions only; preserve every editable shape, independent image, hyperlink, notes and page number.
Always render before/after, inspect arrow slopes, source footer margin, brightness, header consistency and full page. Do not claim actual Windows Office/projector QA without that environment. A long notes file cannot compensate for an illegible visible diagram.
