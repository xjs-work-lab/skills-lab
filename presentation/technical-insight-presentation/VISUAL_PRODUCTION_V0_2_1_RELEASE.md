# Technical Insight Presentation v0.2.1 — 完整视觉生产 Skill 发布验收

**日期：2026-10-09。正式发布：ChatGPT 私有插件 v0.2.1，版本ID `pluginrel_6ac93dff63b08191ab3c679c8090da05`。状态：代码+视觉样板交付，已进行四套跨配色/跨内容生成器 smoke test；作为视觉设计 Skill 的候选版，仍待在真实新领域报告中完成审阅与用户验收。**

## 为什么要重构

原 v0.1.1 仅包括“叙事与证据流程 + 质量清单”，**没有真实 PPT 生产资产**：没有已经认可的版式参照、JS布局函数、渲染器和 PNG 样板。CPU-uArch 本次17页汇报实际通过 PptxGenJS、独立装饰图、原生形状、OOXML和高分辨率PNG反复审阅完成；只有文字规则不足以在新场景重现相同视觉完成度。

v0.2.1 不再把蓝色或芯片装饰作为唯一风格：**固定视觉布局品质、可切换配色变量、可切换学科内容配置**是三个独立控制面。

## 已实际归档的组件

| 位置 | 用途 | 状态 |
|---|---|---|
| [SKILL.md](SKILL.md) | 目标/七道Gate/强制加载视觉资产与工具 | 已发布 |
| [视觉系统](references/visual-system.md) | 16:9页面骨架、原标题区域几何参数、字体/对比度、密度、背景/装饰策略 | 已发布 |
| [六类版式食谱](references/slide-recipes.md) | 封面、证据、机制、责任、路线、决策页；按内容选择构图 | 已发布 |
| [研究逻辑与页面合同](references/evidence-and-story.md) | 原始来源→主张→标题/模块/图形/演讲提示 | 已发布 |
| [生产与QA](references/production-and-qa.md) | 实际引擎路线、三页 Pilot、Native/Notes/链接/箭头验收 | 已发布 |
| [备注写法](references/speaker-notes.md) | 第一部分先详细讲本页，第二部分逐来源证明及边界 | 已发布 |
| [PptxGenJS完整JS样板引擎](scripts/make_template_deck.js) | 6类真实可编辑页面、可换配色、可换内容JSON；支持安全对比度检查、卡片数量与文字限额 | 已发布 |
| [PPTX→PDF/PNG自动渲染/结构检查](scripts/render_and_qa.py) | 检查16:9、native对象、Notes、页界，导出全页PNG与总览图 | 已发布 |
| [自定义配色](templates/custom-theme.example.json) | semantic tokens；不锁蓝色 | 已发布 |
| [编译器内容配置](templates/content-compiler.example.json) | 换论点、流程、各层职责和路线，不让CPU文案混入 | 已发布 |
| [散热内容配置](templates/content-thermal.example.json) | 换热学问题、物理证据分层、合作方向，不继承CPU中心语义 | 已发布 |
| [GitHub真正生成的可编辑样板和PNG](visual-gallery/) | 可从仓直接查看视觉、下载PPTX；由CI从JS源码重建 | 自动构建 |
| 插件内 `assets/reference-case/` | CPU-uArch实际获认可的第6/9/10/15页缩略图作为**工艺参照**，不是科学证据或必须使用的蓝色 | 已打包并读回 |
| 插件内 `assets/native-editable-*.pptx` | 绿色、紫色、编译器、散热4套可编辑示例 + PNG全套总览 | 已打包并读回 |

## 实测

本地用与本次CPU PPT相同的**PptxGenJS → LibreOffice → PDF/PNG**路线实际生成：

1. 中性技术示例 + 森林绿主题：**6页**，全部Native PPT元素，Notes 6/6；检查无越界。
2. 中性技术示例 + 紫色主题：**6页**，同布局、不同语义色号；检查无越界。
3. 公开文献方法框架的**编译器内容JSON + 紫色**：**6页**，已替换流程步骤、责任层、路线与管理决策；无越界。
4. **移动散热内容JSON + 森林绿**：**6页**，已替换热源/传热/整机适用、热控/结构职责、阶段建议和证据决策；无越界。

生成器单套演示 330个原生PowerPoint对象，0张不可编辑内嵌图片（右侧装饰也为 native shapes），六页均有Embedded Notes。视觉层包含真实 6 页布局，非全页粘图。

**重大限制**：四套示例的定量条形数据均明确写 `MOCK/模拟`，仅用于验证版式；它们不构成编译器/热管理真实实验结果，也不能证明已完成一次真实新领域研究与领导验收。后续必须替换成论文表格、原Figure、设备/基线/单位，并由用户审核三类Pilot后才做完整报告。样板的美术质量是制作起点，不是替用户接受成稿。

## 视觉品质为何能够复用

- 视觉骨架来自真实17页微架构PPT的几何和已审阅材料，**不是把16:9改为统一三卡片**。
- 主图/机制/路线/决策**分别有明确的页面 anatomy 和原生可编辑示例**。
- 主题JSON独立，遵循文字与背景对比度规则；蓝色、绿色、紫色、中性灰为可切换starter，支持自定义品牌色。
- 学科内容JSON独立，不能在热学报告中出现错误CPU ISA模块；流程步数不同必须重选页面类型，不允许无脑缩小字号。
- 全量PNG渲染与碰撞/箭头/证据审查分开：自动结构Pass**不等于**视觉已通过人类验收。

## 归档与插件一致性

- GitHub `skills-lab` 保存当前**源代码、JSON内容配置、文字/视觉方法、由CI构建的可编辑样板及联系图**。旧 v0.1.1 源快照保留在 `releases/chatgpt-v0.1.1/`，但不再作为当前生产指令。
- 已发布的插件 v0.2.1 **包含4套可编辑PPTX、对应样板总览PNG和4张原CPU PPT视觉锚点图**；本仓当前文本入口指向同一生产方法，但原CPU的静态视觉锚点图主要随插件二进制包发布。
- 可完整复原的发布ZIP还另存于 ChatGPT Library：`/Skills/technical-insight-presentation/v0.2.1/technical-insight-presentation-v0.2.1-plugin.zip`。
- 插件URL：[Technical Insight Presentation](https://chatgpt.com/plugins/plugins_6ac8e41bf6ac8191a5b33fd81a37246c)。

## 尚待加强/开放项

- 生成器属于组件样板，不是任意新领域文案的自动分页引擎；更复杂的科学Figure和机构矩阵需根据真实证据扩展更多页面模块。
- QA当前可检查结构越界和统一数值、页数/Notes，仍需人工全尺寸检查遮挡、标题过长、图间距、美观与技术语义。
- Windows PowerPoint与现场投影**尚未完成实际验收**。
- 至少一个真实不同领域报告的逐页技术/视觉评价通过后，才考虑标记视觉Skill为稳定版。
