# Executable production kit (v0.2.1)

**Not just reference prose**: This folder contains a runnable six-page **native editable** demonstration. It deliberately uses conceptual sample content and a visibly marked **mock** bar-chart example: those values are not research evidence and must be replaced from the user's real evidence package before presenting.

## Requirements
- Node.js 18+ and `pptxgenjs` (`npm install pptxgenjs` if missing; global installation works)
- Python 3.10+, optional `python-pptx` for structural QA
- `libreoffice`/`soffice` and `pdftoppm` for PDF and PNG previews

## Commands
```bash
node scripts/make_template_deck.js --palette forest --out /tmp/technical-insight-forest.pptx
node scripts/make_template_deck.js --palette plum --out /tmp/technical-insight-plum.pptx
python scripts/render_and_qa.py /tmp/technical-insight-forest.pptx --outdir /tmp/technical-insight-forest-previews

# Separate domain CONTENT from color and geometry
node scripts/make_template_deck.js --palette forest --content-json templates/content-thermal.example.json --out /tmp/thermal-layout.pptx
node scripts/make_template_deck.js --palette plum --content-json templates/content-compiler.example.json --out /tmp/compiler-layout.pptx
```

Palettes: `ocean`, `forest`, `plum`, `graphite`. For a custom color family use `--theme-json path.json` (see `templates/custom-theme.example.json`). For a new research domain use `--content-json file.json` to replace page titles, 3 evidence scopes, 5 flow steps, 4 ownership lanes, 3×3 roadmap rows, and decision cards; the code enforces fixed card counts so content cannot silently overflow a geometry designed for fewer actors. When the structure differs, choose another page recipe instead of squeezing. The code validates color-token contrast and uses semantic `ink/canvas/header/surface/panelTint/accent` roles, not blue-specific logic.

## How to adapt to new insight content
1. Start by copying a `content-*.example.json` file and a palette/brand JSON. Replace **all** generic demo content with actual research (including footers and Notes); keep page-type functions, grid and visual components. If a section needs more/fewer steps or lanes, choose a new anatomy instead of forcing it into a mismatched number of cards.
2. Use `references/slide-recipes.md` to select the right page type; don't force all research content into three cards.
3. Replace demo example bars with exact source numeric table, measurement scope and independent source link; ensure notes cite actual paper/figure.
4. Call `slide.addNotes` with complete page walkthrough + source-by-source evidence record.
5. Produce PILOT first; inspect full-resolution PNG; use user-approved layout/asset as versioned anchor before batch.
6. Keep exported page images, script and source-data CSV/JSON with the final editable PPT.

## Caution
The demonstration is a *design and editability test*, not validated for the user's new research content, nor a substitute for actual visual review. `render_and_qa.py` verifies bounds/text/notes and renders, but cannot automatically judge scientific truth, typography taste or PowerPoint compatibility.

The two cross-domain demo decks in `assets/` and compiled gallery on GitHub are **layout portability tests only**. Their numeric bars remain intentionally MOCK, and no source-study accuracy or real-user visual acceptance is claimed.
