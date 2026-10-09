# 技术洞察汇报 Skills

本目录负责将已审阅的学术/产业洞察证据转换为领导可读、科学可复核、**主要文字与图表可编辑**的技术汇报，不代替原始学术研究，也不纳入 GitHub 仓库迁移方法。

## 当前可调用 Skill

**[Technical Insight Presentation v0.2.1](technical-insight-presentation/SKILL.md)** — [打开 ChatGPT 私有插件](https://chatgpt.com/plugins/plugins_6ac8e41bf6ac8191a5b33fd81a37246c)。

它不再只是规则说明，还包括：

- [视觉系统](technical-insight-presentation/references/visual-system.md)：从认可的 CPU-uArch PPT 提取构图、比例、字号、背景和组件层级，颜色保持可配置；
- [六种页面版式](technical-insight-presentation/references/slide-recipes.md)：封面、证据、机制、责任、路线、决策；
- [完整可运行 PptxGenJS 生产脚本](technical-insight-presentation/scripts/make_template_deck.js) + [渲染QA脚本](technical-insight-presentation/scripts/render_and_qa.py)；
- [主题色示例](technical-insight-presentation/templates/custom-theme.example.json)，以及[编译器](technical-insight-presentation/templates/content-compiler.example.json)和[移动散热](technical-insight-presentation/templates/content-thermal.example.json)内容配置；
- [仓内真实可编辑 PPTX + PNG 视觉样板](technical-insight-presentation/visual-gallery/)：自动构建，允许直接下载比照；
- [v0.2.1 发布、测试与待验收事项](technical-insight-presentation/VISUAL_PRODUCTION_V0_2_1_RELEASE.md)。

**原则：视觉设计质量固定，颜色与领域内容分别配置。** 新场景先做证据页、机制页、路线/决策页的3类Pilot，实际渲染逐页审查，再批量完成。不能把“代码能导出PPT”当成用户认可的视觉质量。

## 状态

已发布 ChatGPT 用户私有插件 v0.2.1，技能资产可读回；两个额外领域的内容/配色 smoke test 已完成（演示柱状图为 MOCK，不是研究成果），但**跨领域真实研究汇报的用户验收仍待完成**。

[历史版 v0.1.1 纯规范型草案](technical-insight-presentation/releases/chatgpt-v0.1.1/)仍作为旧版本快照保留，不应成为当前生产依据。
