# Technical Insight Presentation v0.2.1 — 验证状态更新（2026-10-09）

> 本文件下方是 v0.1.0 的原始验证计划，仍作为历史测试需求保留。**现行版本请先阅读** [v0.2.1 完整视觉生产交付报告](VISUAL_PRODUCTION_V0_2_1_RELEASE.md)、[四套实际生成的可编辑PPTX/PNG图库](visual-gallery/)、[SKILL.md](SKILL.md)。

## 已实测通过的“生产工具链”层

- 共四套、每套6页的PptxGenJS原生PPT（中性forest、中性plum、编译器plum、热管理forest）；PDF/逐页PNG导出成功。
- 6个实际可编辑页面角色，123个非空PPT原生文字对象（每套），6/6页带备注，原生对象结构与页界检查通过。
- 主题颜色和领域内容均为独立JSON输入；编译器和散热的机制步骤、层级职责、路线与结论内容不依赖固定CPU-uArch字符串。
- [自动CI](../../.github/workflows/build-technical-insight-visual-gallery.yml)可从GitHub源码再生成四套PPTX和总览图，当前最新完成运行 [#37979489278](https://github.com/xjs-work-lab/skills-lab/actions/runs/37979489278) 为 SUCCESS。
- 本轮插件正式为 **0.2.1**；原v0.1.1已非当前版本。

## 仍未通过的“真实跨领域洞察汇报”层

模拟数值仍为 `MOCK`。尚未用具体编译器/热学研究真实论据替换，也未获得用户针对新领域完整报告的视觉质量与论据验收。**不能将图形/脚本Smoke Test误称第三方领域正式应用成功。** 下一轮只需选取另一项目 2–3 张真实证据/机制/结论页完成Pilot审阅、调整页面组件，并把通过的样板反向沉淀入同一Skill；没有必要再次重学构图和色彩体系。

---

# Technical Insight Presentation v0.1.0 — evaluation plan (not completed)

**Candidate status:** built from one substantive Agentic CPU/uArch research + leadership PPT cycle. A second independent use case is required before declaring this Skill generally validated.

## Scenario 1 — CPU/uArch public-evidence leadership briefing (reference case)

- Inputs: a research conclusion with three engineering/platform priorities, three conditional reserves, zero publicly evidenced novel Agent-only hardware directions; same-device Snapdragon CPU/NPU measurements and SME/HeRo mechanisms.
- Pass if:
  - no inflated “three silicon bets” appear;
  - kernel/operator/stage numbers never become global Agent end-to-end figures;
  - compile-time LLVM, CPU ISA extensions, NPU, Runtime/OS are not collapsed into equivalent objects;
  - editable PPTX, first-explanation then source notes, slide-by-slide evidence map and version locking exist;
  - page-number scheme and theme are internally consistent;
  - arrows are semantically directed and geometrically correct;
  - visual-only changes cause **zero visible text/source drift**; notes-only updates do not modify slide XML.

## Scenario 2 — compiler-research technology/partner insight (future live test)

- Input: academic institutions, named scholars, current compiler techniques and collaboration hypotheses with publicly available papers/official implementations.
- Pass if:
  - foregrounds organizations and scholars without treating institutional rank as experimental proof;
  - maps papers to concrete compiler mechanisms and real evidence rather than making silicon assumptions;
  - uses source-by-source notes and a compact collaboration/technical coverage narrative;
  - generates readable static and editable outputs;
  - does not force “four hardware gates” when no novel chip proposal is claimed.

## Scenario 3 — mobile thermal-management insight (future live test)

- Input: institution/author-based evidence, software and physical cooling mechanisms, phone-applicability uncertainty, public-source-only constraints.
- Pass if:
  - avoids silently importing non-phone data as directly measured phone benefit;
  - distinguishes published thermophysical measurements from mobile device extrapolation;
  - creates conclusion-first figures, domain-appropriate visual strategy and traceable presenter notes;
  - uses user/audience-specific constraints and remains editable;
  - respects no-device-testing research mode.

## Anti-regression checks
- Do not mix research methodology with GitHub repo migration or cutover steps.
- Do not mutate published source facts merely to achieve cleaner slides.
- Do not flatten whole pages when the user requested an editable PPT.
- Do not invent quotes, percentages, proof of new hardware, vendor schedules or experiments.
- Do not claim actual PowerPoint-client/projector validation when only a renderer was used.

## Proposed status transitions
`CANDIDATE (now)` → `PILOT-VALIDATED` after independent Case 2 or Case 3 with review notes → `STABLE` after a second cross-domain successful application and explicit acceptance. This is a proposed quality process, not an automatic deployment trigger.
