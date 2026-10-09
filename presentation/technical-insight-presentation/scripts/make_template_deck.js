/**
 * Technical Insight Presentation v0.2.0 — editable native PowerPoint page system.
 * Usage: node make_template_deck.js --palette forest --out /tmp/demo.pptx
 *        node make_template_deck.js --theme-json ../templates/custom-theme.example.json --out /tmp/custom.pptx
 * All numeric values in the quantitative demo are prominently MOCK, never research facts.
 */
'use strict';
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Technical Insight Presentation Skill — Layout Demonstrator';
pptx.subject = 'Native-editable cross-domain visual recipes. MOCK DATA demonstration, not a scientific report.';
pptx.title = '技术洞察演示模板｜示例内容，非研究报告';
pptx.lang = 'zh-CN';
const W = 13.333333, H = 7.5;
const Shape = pptx.ShapeType;
const themes = {
  ocean:    {canvas:'F7FBFE',header:'EAF5FD',surface:'FFFFFF',panelTint:'EFF7FE',ink:'143461',muted:'3B6282',accent:'1674D1',accentSoft:'D9ECFC',border:'C4DBEE',positive:'096E9B',caution:'AC661C',font:'Microsoft YaHei'},
  forest:   {canvas:'F7FAF7',header:'EAF1EB',surface:'FFFFFF',panelTint:'F0F6F1',ink:'163E31',muted:'416457',accent:'26795B',accentSoft:'D8EDE0',border:'CADFD1',positive:'146A55',caution:'A76524',font:'Microsoft YaHei'},
  plum:     {canvas:'FBF9FC',header:'F1EDF8',surface:'FFFFFF',panelTint:'F7F2FA',ink:'322345',muted:'665B77',accent:'704AA4',accentSoft:'E9DDF5',border:'DCCFE7',positive:'286A67',caution:'A16926',font:'Microsoft YaHei'},
  graphite: {canvas:'F7F8FA',header:'EDEFF2',surface:'FFFFFF',panelTint:'F2F4F7',ink:'202C36',muted:'53616F',accent:'394F65',accentSoft:'DFE7EC',border:'D4DCE4',positive:'1B726B',caution:'AC6324',font:'Microsoft YaHei'}
};
const args = process.argv.slice(2);
function opt(key, fallback){ const idx=args.indexOf(key); return idx>=0?args[idx+1]:fallback; }
const palette = opt('--palette','ocean');
let T = themes[palette];
const themePath = opt('--theme-json', null);
if(themePath) T = {...themes.ocean, ...JSON.parse(fs.readFileSync(themePath,'utf8'))};
if(!T) throw Error('Unknown palette '+palette+'; expected '+Object.keys(themes).join(','));
const out=opt('--out',path.resolve(process.cwd(),'technical-insight-demo-'+palette+'.pptx'));
const contentPath=opt('--content-json',null);
const D=contentPath ? JSON.parse(fs.readFileSync(contentPath,'utf8')) : {};
function field(section,name,fallback){return D[section]?.[name] ?? fallback;}
function requireCount(label,arr,n){if(!Array.isArray(arr)||arr.length!==n)throw Error(`Content ${label} must be array of ${n} entries; adjust page anatomy rather than squashing items.`);return arr;}
function fitCap(s,max,label){if(String(s).length>max)throw Error(`${label} is too long (${String(s).length}>${max} chars). Redesign/split instead of shrinking all text.`);return s;}

const hex=c=>c?.replace(/^#/,'').toUpperCase();
const hslRgb=h=>[0,2,4].map(i=>parseInt(hex(h).slice(i,i+2),16)/255);
function luminance(h) { const p=hslRgb(h).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4); return p[0]*0.2126+p[1]*0.7152+p[2]*0.0722; }
function contrast(a,b){let x=luminance(a),y=luminance(b);return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05);}
for(const [a,b,threshold] of [['ink','canvas',4.5],['ink','surface',4.5],['muted','canvas',4.0]]){
 const ratio=contrast(T[a],T[b]); if(ratio<threshold) throw Error(`Unsafe theme contrast ${a}/${b}: ${ratio.toFixed(2)}; minimum ${threshold}`);
}
for(const k of ['ink','canvas','header','surface','panelTint','muted','accent','accentSoft','border','positive','caution'])
 if(!/^[0-9A-Fa-f]{6}$/.test(hex(T[k]))) throw Error('Invalid theme hex '+k+': '+T[k]);
pptx.theme = { headFontFace:T.font,bodyFontFace:T.font,lang:'zh-CN' };
function box(s,x,y,w,h,{fill=T.surface,line=T.border,radius=0.11,pt=0.85}={}){
 s.addShape(radius?Shape.roundRect:Shape.rect,{x,y,w,h,rectRadius:radius,radius,
   line:{color:hex(line),width:pt},fill:{color:hex(fill)},radius:radius});
}
function t(s,text,x,y,w,h,{size=14,color=T.ink,bold=false,align='left',valign='mid',margin=0,breakLine=false,transparency=0}={}){
 s.addText(text,{x,y,w,h,fontFace:T.font,fontSize:size,color:hex(color),bold,align,valign,
 margin,breakLine,fit:'shrink',transparency});
}
function rule(s,x,y,w,{color=T.border,pt=0.8}={}){s.addShape(Shape.line,{x,y,w,h:0,line:{color:hex(color),width:pt}});}
function chip(s,text,x,y,w,{fill=T.accentSoft,color=T.ink,size=10}={}){
 box(s,x,y,w,0.29,{fill,line:fill,radius:0.08,pt:0.0}); t(s,text,x+0.06,y+0.015,w-0.12,0.26,{size,bold:true,color});
}
function line(s,x1,y1,x2,y2,{color=T.accent,pt=1.8,arrow=false,dash}={}){
 s.addShape(Shape.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color:hex(color),width:pt,beginArrowType:'none',endArrowType:arrow?'triangle':'none',dash}});
}
function heading(s,title,sub,n,{decor=true}={}){
 s.background={color:hex(T.canvas)};
 box(s,0,0,W,1.32,{fill:T.header,line:T.header,radius:0,pt:0});
 box(s,0.35,0.18,0.07,0.79,{fill:T.accent,line:T.accent,radius:0,pt:0});
 // geometry-only light technical mark: no baked decorative text and no external raster
 if(decor){ for(let i=0;i<6;i++){
  const xx=11.35+i*0.31, yy=0.15+((i%3)*0.22);
  box(s,xx,yy,0.20,0.20,{fill:T.accentSoft,line:T.border,radius:0.02,pt:0.35});
  if(i<5)line(s,xx+0.2,yy+0.1,xx+0.32,yy+0.1,{color:T.border,pt:0.5});
 }}
 t(s,title,0.60,0.16,10.65,0.68,{size:25,bold:true});
 t(s,sub,0.62,0.98,10.85,0.23,{size:11,color:T.muted});
 t(s,`${String(n).padStart(2,'0')} / 06`,12.30,1.34,0.66,0.19,{size:9,color:T.muted,align:'right'});
}
function smallHead(s,title,x,y,w){
 box(s,x,y+0.01,0.055,0.28,{fill:T.accent,line:T.accent,radius:0,pt:0});
 t(s,title,x+0.16,y,w-0.16,0.31,{size:15.2,bold:true});
}
function footer(s,text,{source='示例模板 · 内容仅供设计演示',y=7.02}={}){
 rule(s,0.42,y-0.11,12.45,{color:T.border});
 box(s,0.40,y+0.02,0.045,0.24,{fill:T.accent,line:T.accent,radius:0,pt:0});
 t(s,text,0.54,y,10.15,0.28,{size:10.4,bold:true});
 t(s,source,10.40,y+0.02,2.48,0.24,{size:8.4,color:T.muted,align:'right'});
}
function notes(s,description){
 s.addNotes(`一、页面内容详细讲解\n${description}\n\n二、来源逐条解读\n本页为设计系统演示。内容、流程、数字均用于版式测试，不构成论文、机构或真实实验的证据。实际交付请逐份列出原始论文/官方文件、作者/机构、年份、直接URL、Figure/Table、实验基线与支撑/无法支撑的结论。`);
}
function card(s,x,y,w,h,title,body,num,tag){
 box(s,x,y,w,h,{fill:T.panelTint,line:T.border});
 box(s,x+0.16,y+0.15,0.38,0.36,{fill:T.accentSoft,line:T.accentSoft,radius:0.13,pt:0});
 t(s,String(num),x+0.16,y+0.19,0.38,0.22,{size:12,bold:true,align:'center'});
 t(s,title,x+0.62,y+0.15,w-0.75,0.38,{size:15,bold:true});
 rule(s,x+0.16,y+0.61,w-0.33);
 t(s,body,x+0.16,y+0.71,w-0.32,h-1.28,{size:11.9,color:T.muted,valign:'top'});
 box(s,x+0.13,y+h-0.46,w-0.26,0.31,{fill:T.surface,line:T.border,radius:0.06,pt:0.5});
 t(s,tag,x+0.23,y+h-0.423,w-0.46,0.22,{size:9.4,bold:true});
}
function titlePage(){
 const s=pptx.addSlide(); s.background={color:hex(T.canvas)};
 box(s,0,0,W,0.11,{fill:T.ink,line:T.ink,radius:0,pt:0});
 box(s,0.74,1.61,0.075,2.33,{fill:T.accent,line:T.accent,radius:0,pt:0});
 chip(s,'技术洞察方法演示 · 样板内容',0.97,1.02,3.03);
 t(s,fitCap(field('cover','title','研究证据如何形成\n可执行的技术判断'),32,'cover.title'),0.98,1.74,7.37,1.58,{size:35,bold:true});
 t(s,fitCap(field('cover','subtitle','六种可编辑页面结构 · 自适应主题配色\n不以换色代替版式、证据和细节质量'),58,'cover.subtitle'),1.01,3.72,6.86,0.85,{size:18,color:T.muted});
 // Native-vector motif with explicit components rather than a pasted slide screenshot.
 const cx=10.04,cy=3.24;
 for(let i=0;i<3;i++){
  const x=8.58+i*0.72,y=1.42+i*0.58;
  box(s,x,y,3.2,1.18,{fill:i%2===0?T.accentSoft:T.panelTint,line:T.border,radius:0.16,pt:1});
  box(s,x+0.14,y+0.15,0.35,0.36,{fill:T.accent,line:T.accent,radius:0.08,pt:0});
  for(let j=0;j<3;j++)rule(s,x+0.63,y+0.27+j*0.23,2.1-j*0.25,{color:T.border,pt:2});
 }
 for(let k=0;k<8;k++){
  const x=9.14+(k%4)*0.42,y=5.24+Math.floor(k/4)*0.41;
  box(s,x,y,0.26,0.22,{fill:k%3?T.accentSoft:T.accent,line:T.border,radius:0.03,pt:0.35});
 }
 rule(s,1.01,5.46,6.55,{color:T.border});
 chip(s,'证据可追溯',1.01,5.72,1.48);chip(s,'逻辑可编辑',2.63,5.72,1.48);chip(s,'视觉可复用',4.25,5.72,1.48);
 t(s,'PptxGenJS 原生对象样板 | '+(T.name||palette)+' 主题',1.02,6.62,7.3,0.26,{size:11,color:T.muted});
 t(s,'01 / 06',12.30,7.1,0.6,0.2,{size:9,color:T.muted,align:'right'});
 notes(s,'此页是视觉系统展示的封面样板。左侧标题和三个关键承诺是原生可编辑文字，右侧技术卡片及装饰为原生形状。展示的并非真实技术产品。切换配色时主内容的行宽、对齐和空间层级保持不变。');
}
function evidencePage(){
 const s=pptx.addSlide();heading(s,field('evidence','title','技术判断需要同时呈现证据结果与测量边界'),field('evidence','subtitle','示例：不同层级的性能数据不可放在同一坐标轴比较；以下柱状图为模拟数据'),2);
 box(s,0.35,1.59,12.64,4.50);smallHead(s,field('evidence','panelHeader','三层测量口径：先明确“究竟快在哪里”'),0.58,1.78,11.8);
 const defaultBlocks=[{title:'一次算子调用',scope:'KERNEL / OPERATOR',a:12,b:8,limit:'不能推出整个任务的收益'},{title:'模型某个阶段',scope:'MODEL STAGE',a:19,b:13,limit:'仍未包含所有工具与系统动作'},{title:'完整用户任务',scope:'AGENT TASK E2E',a:11,b:10,limit:'含处理器切换与系统开销'}];
 const blocks=requireCount('evidence.blocks',D.evidence?.blocks||defaultBlocks,3);
 const x0=0.59,w=3.96,gap=0.18;
 blocks.forEach((d,i)=>{
  let x=x0+i*(w+gap);box(s,x,2.25,w,3.62,{fill:T.panelTint,line:T.border});
  chip(s,d.scope,x+0.16,2.44,1.96,{size:9.6});
  t(s,d.title,x+0.16,2.91,w-0.36,0.35,{size:16,bold:true});
  t(s,'A 路径（演示）',x+0.17,3.44,1.5,0.2,{size:10.5,color:T.muted});
  box(s,x+0.17,3.77,(w-0.43)*d.a/22,0.29,{fill:T.border,line:T.border,radius:0.03,pt:0});
  t(s,String(d.a),x+0.17+(w-0.43)*d.a/22+0.07,3.77,0.42,0.24,{size:10.7,bold:true});
  t(s,'B 路径（演示）',x+0.17,4.18,1.5,0.2,{size:10.5,color:T.muted});
  box(s,x+0.17,4.51,(w-0.43)*d.b/22,0.29,{fill:T.accent,line:T.accent,radius:0.03,pt:0});
  t(s,String(d.b),x+0.17+(w-0.43)*d.b/22+0.07,4.51,0.42,0.24,{size:10.7,bold:true});
  rule(s,x+0.17,5.03,w-0.36);
  t(s,d.limit,x+0.17,5.15,w-0.34,0.48,{size:11.4,bold:true});
 });
 box(s,0.35,6.24,12.64,0.54,{fill:T.accentSoft,line:T.border,radius:0.08});
 t(s,'这是布局演示：A/B 数字均为 MOCK，没有设备、单位、来源，严禁作为论文测量结果使用。',0.55,6.36,11.9,0.22,{size:11.2,bold:true});
 footer(s,field('evidence','footer','只有匹配设备、后端、基线和指标层级，才能比较研究收益'));
 notes(s,'这是定量证据布局的示范。三张卡片代表不同的测量口径，每张卡片内部的两条可编辑原生矩形模拟条形图表示A/B对照，数值并非任何科学实验。真实制作必须使用用户提供或原始论文可核验的数字，并在每块数据旁标注独立基线、单位和平台；下方明确不能以单算子收益代替Agent任务端到端收益。');
}
function mechanismPage(){
 const s=pptx.addSlide();heading(s,field('mechanism','title','完整机制图必须解释每一步为何存在、输出交给谁'),field('mechanism','subtitle','五步流程样板：原生可编辑节点、等高连线、输入与结果语义标签'),3);
 box(s,0.35,1.58,12.64,3.99);smallHead(s,field('mechanism','panelHeader','演示流程：技术要求怎样转成可以验证的执行路径'),0.56,1.79,11.9);
 const defaultArr=[
 ['识别输入条件','明确触发任务、设备环境与需求。','输出：可执行目标'],
 ['选择技术基线','先评估可用工具和替代方案。','输出：可比候选'],
 ['选择实现路径','依据约束挑选计算、数据流与控制。','输出：实施方案'],
 ['核对系统边界','检查异常回退、资源争用与可靠性。','输出：限制条件'],
 ['形成结论','记录能证明的结果与尚存问题。','输出：决策证据']
 ];
 const arr=requireCount('mechanism.steps',D.mechanism?.steps||defaultArr,5);
 const x0=0.59,w=2.29,g=0.195,y=2.41;
 arr.forEach((p,i)=>{
  const x=x0+i*(w+g);
  card(s,x,y,w,2.75,fitCap(p[0],13,`stage ${i} title`),fitCap(p[1],60,`stage ${i} body`),i+1,fitCap(p[2],24,`stage ${i} tag`));
  if(i<4) line(s,x+w+0.017,y+1.32,x+w+g-0.025,y+1.32,{arrow:true,color:T.accent,pt:2.5});
 });
 box(s,0.35,5.76,12.64,0.99,{fill:T.panelTint,line:T.border});
 smallHead(s,'流程边界',0.58,5.99,2.3);t(s,field('mechanism','boundary','这是一条解释性工作流，不是论文原图、量产系统调用图或因果实验结果。'),2.62,5.99,9.82,0.42,{size:12.1});
 footer(s,field('mechanism','footer','如果真实任务需要条件分叉，改用带分支标签的依赖图，而不是强迫线性五卡片'));
 notes(s,'这是技术机制图的原生可编辑五步流程。每个阶段包含操作标题、解释性正文和交付下一步的输出，四条箭头是严格水平线，表达顺序依赖而非物理硬件控制。下面的边界区明确这只是演示型研究过程。遇到异步或互相反馈关系，应由页合同描述真正的条件分叉后更换页面结构。');
}
function ownershipPage(){
 const s=pptx.addSlide();heading(s,field('ownership','title','技术责任应按控制层划分，而不是把所有单元画成并列硬件'),field('ownership','subtitle','示例：App / Runtime / CPU编译快路径 / 加速器各自提供不同契约'),4);
 box(s,0.35,1.57,8.6,4.99);smallHead(s,field('ownership','panelHeader','从用户目的到具体计算路径'),0.57,1.80,7.9);
 const defaultLanes=[['应用 / Agent','意图、权限、工具目标与结果核验'],['Runtime / OS','依赖、任务调度、资源仲裁与回退'],['CPU / Compiler','执行控制、数据布局、现有ISA内核'],['GPU / NPU','适配的批量或模型算子加速']];
 const lanes=requireCount('ownership.lanes',D.ownership?.lanes||defaultLanes,4);
 lanes.forEach((d,i)=>{let y=2.38+i*0.98;
  box(s,0.62,y,7.98,0.78,{fill:i%2?T.surface:T.panelTint,line:T.border});
  chip(s,d[0],0.79,y+0.20,1.69,{size:10.6});
  t(s,d[1],2.71,y+0.17,5.57,0.4,{size:12.8,bold:i===1});
  if(i<3){ line(s,4.53,y+0.80,4.53,y+0.94,{color:T.accent,pt:1.7,arrow:true});}
 });
 box(s,9.13,1.57,3.87,2.58,{fill:T.accentSoft,line:T.border});smallHead(s,'接口与路径',9.38,1.84,3.38);
 t(s,field('ownership','interfaceText','箭头表示软件调用或任务派发合同，\n不表示 CPU 向 NPU 核心直接发送电路控制信号。'),9.44,2.35,3.18,1.27,{size:12.4,color:T.ink});
 box(s,9.13,4.29,3.87,2.27,{fill:T.surface,line:T.border});smallHead(s,'判断边界',9.38,4.58,3.26);
 t(s,field('ownership','boundaryText','已有编译器、运行时和专用加速器能力，是任何新增物理设计必须面对的强基线。'),9.44,5.13,3.13,1.05,{size:12.0});
 footer(s,field('ownership','footer','先明确每一层能控制什么，再讨论什么问题需要新硬件'));
 notes(s,'左侧四层展示应用Agent、运行时OS、CPU编译器和GPU/NPU的不同职责。纵向小箭头表示相邻软件接口/工作委托，不表示物理电路控制，实际场景需按源证据修改。右侧两个边界卡说明执行路径和硬件必要性判断。所有角色与文字均可在PowerPoint中修改。');
}
function roadmapPage(){
 const s=pptx.addSlide();heading(s,field('roadmap','title','分阶段技术路线应写明成熟动作、交付结果与重新判断条件'),field('roadmap','subtitle','示例使用“阶段一/二/三”，避免冒称批准的芯片量产或预算日程'),5);
 box(s,0.35,1.57,12.64,4.94);smallHead(s,field('roadmap','panelHeader','技术层 × 推进阶段：每格必须有可理解的动作'),0.60,1.80,11.9);
 const left=0.60,top=2.43,labelW=2.18,colW=3.22,rowH=1.03;
 ['阶段一 · 基线','阶段二 · 协同','阶段三 · 再判断'].forEach((x,i)=>{
  box(s,left+labelW+i*colW,top,colW-0.08,0.45,{fill:T.accentSoft,line:T.border,radius:0.055});
  t(s,x,left+labelW+i*colW+0.12,top+0.08,colW-0.36,0.28,{size:12.6,bold:true});
 });
 const defaultRows=[
 ['证据与指标',['锁定设备/基线','验证跨层指标','复核公开增量证据']],
 ['软件与系统',['优化成熟快速路径','约定跨组件接口','检查端到端收益']],
 ['硬件探索',['列出物理剩余问题','跟踪强软件替代','仅满足证据门后重审']]
 ];
 const rows=requireCount('roadmap.rows',D.roadmap?.rows||defaultRows,3);
 rows.forEach((r,j)=>{
  const y=top+0.59+j*rowH;
  box(s,left,y,labelW-0.09,rowH-0.11,{fill:T.panelTint,line:T.border,radius:0.06});
  t(s,r[0],left+0.15,y+0.27,labelW-0.39,0.26,{size:12.5,bold:true});
  r[1].forEach((v,i)=>{
    let x=left+labelW+i*colW;
    box(s,x,y,colW-0.08,rowH-0.11,{fill:T.surface,line:T.border,radius:0.06});
    box(s,x+0.14,y+0.23,0.055,0.36,{fill:i===2?T.border:T.accent,line:i===2?T.border:T.accent,radius:0,pt:0});
    t(s,v,x+0.32,y+0.16,colW-0.58,0.54,{size:12.6,bold:i===0});
  });
 });
 box(s,0.60,6.23,12.10,0.43,{fill:T.panelTint,line:T.border,radius:0.04});
 t(s,field('roadmap','boundary','条件研究 ≠ 已立项；阶段顺序代表证据成熟路径，具体项目/人员/预算需单独审批。'),0.81,6.32,11.63,0.21,{size:10.5,bold:true});
 footer(s,field('roadmap','footer','以公开证据重新开启条件研究，不把研究计划写成已批准的项目承诺'));
 notes(s,'这是按研究证据成熟度与技术责任层划分的路线矩阵。横向三个阶段表达判断先后而非已批准的精确年份；纵向分别为证据方法、软件平台与硬件研究。最后一行第三列强调没有四道证据门通过就不应宣称专用硬件立项。下方提醒所有阶段仅为示例内容。');
}
function decisionPage(){
 const s=pptx.addSlide();heading(s,field('decision','title','技术汇报应把可执行工程与有条件研究明确分开'),field('decision','subtitle','决策页样板：管理者能立即知道要确认什么，以及什么仍不能作出承诺'),6);
 box(s,0.35,1.56,8.18,4.89);smallHead(s,'建议优先推进：按已确认的可控技术能力组织',0.59,1.81,7.70);
 const defaultItems=[
 ['完善强基线','对已有编译器、运行时和平台接口做实证范围内的工程优化。'],
 ['建立跨层合同','统一比较条件、任务状态与异常恢复的责任边界。'],
 ['维护来源链','图表、结论、引用与讲者备注保持可追溯和可修订。']
 ];
 const items=requireCount('decision.items',D.decision?.items||defaultItems,3);
 items.forEach((r,i)=>{let y=2.38+i*1.22;
 box(s,0.61,y,7.65,1.02,{fill:T.panelTint,line:T.border});
 box(s,0.80,y+0.19,0.41,0.41,{fill:T.accentSoft,line:T.accentSoft});
 t(s,String(i+1),0.88,y+0.28,0.23,0.20,{size:12.8,bold:true,align:'center'});
 t(s,r[0],1.35,y+0.12,6.56,0.31,{size:14.5,bold:true});
 t(s,r[1],1.35,y+0.51,6.46,0.37,{size:11.2,color:T.muted});
 });
 box(s,8.71,1.56,4.28,2.25,{fill:T.accentSoft,line:T.border});smallHead(s,'条件研究储备',8.96,1.88,3.74);
 t(s,field('decision','reserveText','保留尚未证明的物理剩余问题；\n只在原始公开证据出现重大变化后重新评估。'),9.03,2.38,3.47,0.99,{size:12.5});
 box(s,8.71,3.94,4.28,2.51,{fill:T.surface,line:T.border});smallHead(s,'需要明确的管理问题',8.96,4.25,3.75);
 t(s,field('decision','questions','• 哪些工程能力纳入后续规划？\n• 哪些跨团队接口需要负责人？\n• 哪些证据出现后才重启硬件评估？'),9.03,4.83,3.57,1.17,{size:12.1});
 footer(s,field('decision','footer','提出“建议”不等于宣称审批、人员、预算与产品时间表已经确定'));
 notes(s,'这是面向领导的决策结构。左侧三项为示例性的可执行技术工作（不是本次真实项目的授权行动），右上是严格条件研究储备，右下是实际需管理者确认的问题。准确区分专家的研究建议与组织层立项、时间表、预算已经批准的事实。');
}
(async()=>{
 titlePage();evidencePage();mechanismPage();ownershipPage();roadmapPage();decisionPage();
 fs.mkdirSync(path.dirname(out),{recursive:true});
 await pptx.writeFile({fileName:out});
 console.log(JSON.stringify({output:out,slides:6,palette:themePath?`custom:${themePath}`:palette,content:contentPath||'starter',contrastInkCanvas:contrast(T.ink,T.canvas).toFixed(2)}));
})().catch(e=>{console.error(e);process.exit(1)});
