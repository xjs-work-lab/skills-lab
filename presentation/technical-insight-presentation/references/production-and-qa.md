# Production, visual QA and minimal-change release contract

## Standard stack (replaceable when tools unavailable)
- Page production: **PptxGenJS** for native PowerPoint text/cards/diagrams/charts. `scripts/make_template_deck.js` provides a working tokenized layout engine and page components.
- Charts: PptxGenJS native chart / matplotlib from authoritative CSV/JSON. No quantitative ImageGen.
- Graph semantics: Mermaid/DOT/PlantUML/structured edge table first, render diagram editable when reasonable.
- Illustrations: original vector/native geometry, optional appropriately licensed/cited published Figure or independent image asset. No flattened whole-slide PNG.
- Renderer: LibreOffice → PDF → poppler (`pdftoppm`) PNG; use **actual target PowerPoint** review if available; do not claim equivalence.
- QA: Python zipfile/PPTX XML and `python-pptx` text/external-links/shapes, PyMuPDF or PDF text extraction, pixel comparisons for accepted-page merges. Visual review of EVERY PNG is essential.

## Five concrete production gates
1. **Evidence handoff** checked: source/claim map with all limits.
2. **Storyboard and exact copy** checked before opening a slide generator.
3. **3 page-role pilot** produced with a chosen visual theme; show a high-resolution preview of Evidence, Mechanism and Roadmap/Decision. User accepts visual direction or choose another composition. This is a mandatory stop, not implicit approval.
4. **Batch generation** preserving accepted pilot IDs, using same panel grid/font/component functions. On each page: render, open PNG, inspect title, x/y overlap, text clipping, connectors, chart scales, page numbers, source footer, ornament brightness.
5. **Final integration**: exact version manifest, notes, hyperlinks, 17/? page count, full contact sheet, high-res PNG, PDF and PPTX; pack code/assets/chart data with outputs when requested.

## QA: real geometry, not only source text
- All shapes and text inside W/H. Verify no collision/overlap of title/subtitle/footer/citation/figure labels. Some intentional shapes overlap (accent lines, nested panels) — list and exempt only those.
- Rightward horizontal arrows have equal endpoint Y and enough space between modules.
- Visual glyphs match processing semantics (e.g. SME within CPU architecture, not drawn alongside CPU as same kind of SoC device).
- Source figures preserve axes/legends, cropping permissions and readable captions.
- Density is intentional: not tiny faint text, not too many equal boxes, not large unexplained blank regions.
- 2–3 pages may vary composition while keeping common content grid and typography.
- Compare full-slide image not just thumbnail; use side-by-side accepted reference/renderer image when adjusting style.
- Test one alternate palette on pilot pages to ensure the design is truly theme-agnostic.

## Minimal change & content fidelity matrix
| Revision class | Allowed | Must remain exactly equal |
|---|---|---|
| VISUAL_ONLY | color/spacing/font/arrows/artwork | claims, numbers, visible text, links, Notes unless explicitly changed |
| ARROW_ONLY | specified arrow geometry/targets | every other PPT shape and Notes/link/data |
| NOTES_ONLY | notes text | slide XML, visible art/text, media/links/ordering |
| EVIDENCE_CORRECTION | approved claims/data/figures + dependent speaker notes | unrelated slides; provenance must be updated |
| INTEGRATION | use accepted source page versions, consistent header/footer | don't regress to rejected pilots or rasterize entire slide |

Review results: automated success = structural pass, not aesthetic acceptance; LibreOffice export ≠ Windows PowerPoint test; skill installation ≠ running the complete toolchain. If runtime lacks PptxGenJS or renderers, state the missing dependency and choose a feasible tool — do not quietly produce low-quality slide images while claiming the same process.

## 2026-10-09 cross-domain smoke tests
- `--content-json templates/content-thermal.example.json --palette forest` and `--content-json templates/content-compiler.example.json --palette plum` each produce 6-slide 16:9 native-editable decks with Notes; LibreOffice/PDF/PNG export works, no shapes exceed slide bounds.
- These are **synthetic layout exercises**. They demonstrate configurable page copy plus color, not a completed thermal/LLVM research report; bars are MOCK, scientific sources have not been replaced.
- A full new-topic deployment still requires direct-paper evidence, original figure/measurement fidelity, per-page detailed content contract and user review.
