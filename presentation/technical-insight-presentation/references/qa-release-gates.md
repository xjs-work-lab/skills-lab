# Technical Insight Deck QA and Release Gates

## QA matrix

| Gate | Automatic / structured checks | Human review (mandatory) |
|---|---|---|
| **G0 Research input** | Claim IDs, source URLs, latest known research status, fact/inference labels and comparison fields complete | Do the claims warrant decisions or only questions? |
| **G1 Story** | Every slide has conclusion headline, prior/next bridge and page role | Can a technically literate outsider follow the narrative without us? |
| **G2 Science** | Chart data == archived source values; units/baselines/scope displayed; links and notes map to same claims | Do source figures and text really justify the inference? Are alternatives fairly treated? |
| **G3 Graphics** | Objects inside page, font coverage, title-band geometry, image dimensions/brightness metadata, horizontal arrow slopes | Arrow semantics, z-order, clipping, contrast, projected readability at target resolution |
| **G4 Notes** | All slides have Notes with Part I before Part II; source count/URLs; cover/agenda page labels sync | Does Part I explain actual visible page fully? Does each cited source add concrete proof? |
| **G5 Revision integrity** | Zero text/notes/data diffs for visual-only changes; zero slide part diffs for Notes-only; link/media parity; exact revision manifest | Did micro-changes accidentally weaken a previously accepted slide? |
| **G6 Delivery** | PPTX opens in tooling, 16:9 or configured size, all slides PDF/PNG render, native objects/links/Notes preserved | Microsoft PowerPoint and actual projection only if access provided; user acceptance |

## Specific rules

1. **Every source-derived measurement**: metric layer + device/experiment + baseline + units + direction + statistic. Kernel vs stage vs agent E2E are distinct quantities.
2. **Every meaningful arrow**: anchored source and target, branch condition, data/causal/temporal semantics; intentional diagonal paths are acceptable, accidental crooked horizontal arrows are not.
3. **Header/footer**: shared geometry, palette and subdued decor; sources legible with safe margin; cover and agenda may have intentionally different compositions but a consistent theme.
4. **Page numbering**: one explicitly chosen scheme, including cover/agenda if requested. Do not retain old notes saying pages are unnumbered.
5. **Editability**: all principal text and logic native/editable; decorative/complex published figures may be movable raster with original source still traceable.
6. **Integrity**: no forbidden wording, internal research tags or novel hardware claims inserted by styling/prompted images; approved text exact.
7. **Speaker notes**: explanatory teaching layer first, source-by-source proof second. A long notes file is not automatically good; compare notes with actual slide details.
8. **Rights**: cite original Figure/Table and check license or display conditions before pasting/cropping source figures.
9. **Reference drift**: citations cannot move to the footer while their meaning disappears. Visible claims and note claims must agree.
10. **Status honesty**: renderer/OOXML QA is not actual Windows Office/projection QA, and researcher-recommended roadmap is not an authorized program budget.

## Deliverables at each review stage
- **Pilot**: editable page(s) + full-resolution PNG + page contract + known caveats.
- **Integration candidate**: full PPTX + PDF + thumbnail sheet + original source links/notes + page version manifest.
- **Final**: same plus only *actually completed* cross-client/projector checks and user-approved status.

## Stop rule
Do not continue indefinitely “polishing” with wholesale redesign when the user already accepted a page. Repair only a documented readability, fidelity, scientific or compatibility issue. If a claim is not evidenced, downgrade or label it rather than invent a new chart.
