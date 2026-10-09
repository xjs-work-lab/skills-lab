# ChatGPT plugin release ledger — 2026-10-09

Two PRIVATE, **USER-scoped** ChatGPT plugin releases were actually created or updated through Plugin Creator, not merely drafted in GitHub. Links below are user-facing plugin entry points.

| Skill | Canonical GitHub path | Plugin URL | Plugin ID | Released version | Release ID | State |
|---|---|---|---|---|---|---|
| Academic Insight | [research/academic-insight/SKILL.md](research/academic-insight/SKILL.md) | [Academic Insight](https://chatgpt.com/plugins/plugins_6abe1edc35d88191863eee29d3ae6b0f) | `plugins_6abe1edc35d88191863eee29d3ae6b0f` | **0.8.0** | `pluginrel_6ac8e42daa4c8191b3f475b46e2b9876` | UPDATED / back-end source verified |
| Technical Insight Presentation | [presentation/technical-insight-presentation/SKILL.md](presentation/technical-insight-presentation/SKILL.md) | [Technical Insight Presentation](https://chatgpt.com/plugins/plugins_6ac8e41bf6ac8191a5b33fd81a37246c) | `plugins_6ac8e41bf6ac8191a5b33fd81a37246c` | **0.1.1** | `pluginrel_6ac8e41e20f88191a13561ce4bf2be0a` | CREATED / back-end source verified |

## GitHub canonical versus release snapshot

- Academic Insight canonical content: full [v0.8.0 SKILL.md](research/academic-insight/SKILL.md) contains all earlier v0.7.1 core workflow and normative incremental extensions, plus [extended evidence template](research/academic-insight/references/evidence-template.md). [Released plugin overlay](research/academic-insight/releases/chatgpt-v0.8.0/) includes a new callable `academic-insight-v08` skill and decision-gate reference alongside the **unchanged pre-existing v0.7.1 core skill**. Old core is preserved within plugin, not deleted. Snapshot is **overlay**, not full consolidated plugin archive.
- Technical Insight Presentation canonical content: [full source](presentation/technical-insight-presentation/SKILL.md) with detailed companion templates. [v0.1.1 private plugin release snapshot](presentation/technical-insight-presentation/releases/chatgpt-v0.1.1/) contains **exact files fetched back from the created plugin**, including manifest, operative skill and five references. The installed executable skill is a concise operational variant of the richer canonical guide, not byte-identical to it. Amend both intentionally when releasing new features.
- The phrase **“最小变更与内容保真” / Minimal Change & Content Fidelity** is explicit in both the canonical presentation SKILL.md and the published v0.1.1 plugin skill.
- Neither skill contains GitHub repository migration mechanics as academic or presentation methodology.

## Verified and not yet verified

**Verified on 2026-10-09**:
- Both plugin create/update calls returned success and user-owned private plugin URLs.
- `get_plugin_files` read both current releases back from the plugin service: Academic Insight v0.8.0 has 7 file entries (original core + new enhancement + 3 manifest files), Technical Insight Presentation v0.1.1 has 9 file entries (skill + five references + 3 manifests).
- Feature checks succeeded: original Academic Insight 10Q and field map preserved; v0.8 public-only and hardware causal gates present; new presentation note-first and minimal-change policy present.
- Release-specific GitHub mirror files committed under `releases/chatgpt-...`.

**NOT yet verified / limitation**:
- The active conversation's `skills__list` still advertised the original `academic-insight` URI and did **not** yet list the new `technical-insight-presentation` after plugin creation. This may be session-cached availability; do not report the new plugin was successfully invoked in the current chat. Open plugin URL, activate/install if prompted, and start a new chat/refresh to load current skill manifests; then verify both skills by actual invocation.
- The presentation skill is a new v0.1.1 **candidate**. Cross-domain validation on compiler or thermal insight reports remains open; deployment does not change that claim.

## Verification prompts (separate new chat after enabling plugins)

1. `@Academic Insight 请先确认当前技能版本/研究执行模式，然后帮我梳理一项公开资料限定的技术研究，从权威会议/学者入手、讨论最强软件基线，并允许零个有证据的新硬件方向。`
2. `@Technical Insight Presentation 请先确认你加载的技能名称，然后给我一张包含完整可见文案、图表/箭头语义、逐来源备注结构和QA门槛的详细技术洞察汇报页合同；暂不生成PPT。`

Confirm the plugin details and name in the chosen ChatGPT plugin UI; if both paths are visible and responses follow the contracts, mark UI invocation verified. Do not confuse registered plugin with per-chat loaded skill.

## Maintenance procedure

Before a future release, modify the canonical GitHub SKILL.md and references, run regression tests on two domains, assemble the versioned archive and update the plugin using its **expected current release ID**. After update, read plugin manifest and skill files back, copy exact released text to the release snapshot area and update this ledger. Do not conflate a GitHub commit with ChatGPT plugin publication.
