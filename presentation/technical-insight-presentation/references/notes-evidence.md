# Speaker Notes — Explain Slide First, Sources Second

For *every page*, Part I must appear before Part II in the **actual PowerPoint Notes XML**.

## Part I — detailed explanation of actual slide content
1. What role does this slide play in the larger decision story?
2. What is the intended on-screen reading path? Explain **every significant card, arrow/branch, chart axis, legend, calculation and outcome** in order.
3. Explain technical nouns the audience may not know; distinguish CPU ISA, processor units, compiler, runtime, OS and App roles.
4. For numbers: exactly which model/device/software, what level (kernel call / operator aggregate / model stage / end-to-end task / device QoE), what baseline and units, what difference means.
5. What is the causal reasoning, and what alternative interpretation remains plausible?
6. What is supported by source measurements vs our synthetic inference vs open hypothesis?
7. How does the page change technical/organizational action and connect to the next page?

Make this section a coherent **teach-from-the-slide walkthrough**. Do not simply recite existing text, paste paper abstracts or write one line of summary.

## Part II — individual source explanation
Each genuinely relevant source gets its own item:

```text
Source N — [Academic paper | Official technical doc | Vendor assertion | Patent | Benchmark]
Full title:
Authors/organization, year, venue/document version:
Original URL and exact Fig/Table/section:
Problem addressed and platform scope:
Main mechanism, research claim and specific methods:
Key argument / data / experimental baseline and unit:
What this directly supports on the slide:
What it does NOT establish:
How this source relates to our synthesis, and independence from other sources:
```

Additional notes:
- Distinguish published study vs manufacturer document vs own conceptual example; do not call docs “papers”.
- Do not synthesize a new statistic from incompatible experiments.
- No fake Figure number or absent original URL.
- Multiple documents from one company/platform may have overlapping evidence, not independent scientific replications.
- A conceptual chart should be labeled “example / original synthesis”, not presented as a source experiment.
- For cover/agenda, explain research scope, conclusion and actual page numbering; avoid manufacturing irrelevant source cards.

## Final optional section
“Potential technical Q&A”: likely challenge, supported answer, remaining public evidence gap. This is supplementary, never a substitute for Part I.

## QA
- Are Part I and Part II both present and in order?
- Does Part I actually cover every major visible element and branch?
- Do individual source items identify evidence scope, proof limits and corresponding claim?
- Is presenter-note source identity consistent with the slide's visible citation?
- Are notes synchronized with current page numbers, actual labels and diagram geometry?
- Can PowerPoint access the Notes content after merge/export? PDF slide pages generally do not show Notes automatically.
