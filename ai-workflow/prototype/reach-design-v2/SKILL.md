# antd-design-v2

这套规范用于在睿知 / REACH 原型中使用轻量 CSS + 原生 JS 复用调整后的 Ant Design 组件语言。

它不是原版 antd 组件文档，也不是重做睿知后台框架。它的目标是把当前文件源码里已经调整后的 antd token / 默认组件逻辑，整理成可以直接用于 HTML 原型的规范，同时保留睿知现有页面 shell。

## 目录

- `references/tokens.md`：Token、CSS 变量、尺寸和状态表。
- `references/components.md`：按本地 `D:\antdesign\components` 目录核对后的组件结构、类名、状态和 JS 行为。
- `references/icons.md`：从 `component-library-single.html` 固化出的图标使用规则和常用映射。
- `references/patterns.md`：睿知页面内常用业务组合模式。
- `cases/index.html`：用户提供的原始 index 基线文件，也是后续 case 扩展的唯一入口。
- `assets/tokens.css`：源码 token 翻译后的 CSS 变量。
- `assets/icons.css`：从 `cases/component-library-single.html` 抽取的 FD / IDS / PLM iconfont 资产。
- `assets/components.batch-01.css`：第一批 11 个组件的可调用 CSS。
- `assets/components.batch-01.js`：第一批组件的原生 JS 行为；Tag 为纯样式组件。
- `assets/checklist.md`：设计交付自查清单。

## 使用优先级

发生冲突时按下面顺序裁决：

1. 本文件的组件来源裁决表。
2. `references/components.md` 中对应组件章节。
3. `references/tokens.md` 中的 token。
4. `references/patterns.md` 中的业务组合模式。
5. 当前 `index.html / 睿知v1.md` 作为睿知 shell、表格、表单、弹窗、抽屉的规则来源。

不要回到原版 antd 源码或站点重新推导组件范围。用户当前文件源码中的 token 和默认组件逻辑，已经视为调整后的 antd 规范来源。

## 组件来源裁决表

| 范围 | 规则来源 | 说明 |
| --- | --- | --- |
| 左侧主导航、顶部 Header、workspace 页签、1440 x 900 shell | `index.html / 睿知v1.md` | 只保留和承载，不整理为新组件 |
| antd 导航类组件 | 排除 | 不整理 Menu、Layout、Breadcrumb、Anchor、Steps 等会替换产品导航的组件 |
| Button、Input、Search、Select、Dropdown、Checkbox、Radio、Switch、Tabs、Tree、Tag、Badge、Status、Tooltip、Popover、DatePicker、Upload、Empty、Loading | 调整后的 antd token / 默认组件逻辑 | 即使 `index.html / 睿知v1.md` 已有落地样式，也按调整后的 antd 逻辑整理 |
| Form | `index.html / 睿知v1.md` | 按原 index 的横向 label / control 表单规则，不按 antd Form |
| Table、Editable Table、Batch Edit Table、Pagination | `index.html / 睿知v1.md` | 表格不按 antd 默认表格 |
| Dialog、Drawer、Overlay 容器 | `index.html / 睿知v1.md` | 弹窗和抽屉容器结构按睿知；内部 Form 也按睿知原表单规则 |
| 业务页面模式 | 睿知 shell + 对应组件规则 | 页面结构挂在当前 shell 内，组件按各自来源裁决 |

## 工作方式

1. 先确认本次页面或组件属于哪一类。
2. 查上面的裁决表，确定使用调整后的 antd 逻辑还是睿知现有规则。
3. 使用 `tokens.md` 中的 CSS 变量，不在局部硬造第二套颜色、字号、间距。
4. 页面必须挂在睿知现有 shell 中，不重做左侧导航、Header、workspace tabs。
5. 表格、表单、弹窗、抽屉必须保持睿知当前结构；通用控件使用调整后的 antd 组件逻辑。
   做原型时默认就要带完整交互状态：hover、focus、focus-visible、active、selected、checked、disabled、open、empty、error、loading 等状态按组件类型补齐；不得只还原静态截图后等用户逐项提醒。
   同类问题必须在组件 / 全局规则层处理：优先复用或扩展现有组件类、渲染函数、事件分发和 token；如果缺少通用能力，先补组件级写法，再让页面调用。不得在页面末尾追加只服务当前截图的覆盖样式、零散脚本或包裹式 render 补丁。
6. 详情查看类页面如果视觉上是“上方信息区 + 左下列表区 + 右下配置区”，代码结构也必须拆成上、左、右三个兄弟模块；不要用一个大内容模块包住三块再用内部 grid 假装分区。
7. 承载边线的层和承载内容缩进的层必须分离：例如带页内 Tabs 的模块，Tabs 底部分割线应贯穿整个模块宽度，Tabs 文案和下方内容再各自保留左右 `16px` 缩进。
8. 类型属性管理这类“顶部页内 Tabs + 下方左右配置表格”页面必须按 `references/patterns.md` 的“页内 Tabs + 左右配置表格”框架实现：Tabs 区和内容区为兄弟结构，左右面板为兄弟结构，右侧竖向工具条为整高独立模块，右侧表格到竖条保留 `16px` 间距。
9. 表格正文文本、复选框边线、hover、selected、表头复选框全选、表头排序按钮等基础状态必须走全局表格 / 控件规则；不要在单个页面打局部补丁。
   带复选框的表格必须接入勾选驱动的 toolbar 删除按钮：未勾选时不显示，勾选任意行后显示；点击删除必须先弹出“删除确认”弹窗，取消不改变勾选，确认后必须从当前渲染数据中移除对应行并清空勾选；弹窗和抽屉内表格同样适用。
   表格行渲染、表头全选 rowIds 和分页总数必须使用同一个过滤后数据源，删除后行和总数同步更新。
   Pagination 普通文字、页码、箭头、每页条数、跳转文字和输入框文字统一为次级文本色 `rgba(0, 20, 50, 0.65)`，active 页码保持主色。
10. Tag / Status 必须走全局标签规则：高度 `22px`、左右 padding `8px`、圆角 `2px`，并使用统一语义色；不要在单个页面重写 chip 尺寸。
11. Checkbox checked 态的对号必须来自 `assets/icons.css` 中的 `iconfont-fd / common_others_Check-Check`，不要用 CSS 画线、临时 SVG 或字符替代。
    弹窗、抽屉、表单配置区里的复选框同样必须走全局 Checkbox 规则；表格场景外层使用 `.checkbox-align`。
12. 表格操作列的“更多 + 下拉箭头”必须作为同一个操作项处理：文字与箭头间距 `4px`，箭头颜色继承“更多”文字颜色，不单独落正文色。
13. `.toolbar` 和 `.toolbar.wide` 的上下 padding 统一为 `16px`，由 toolbar 自己承担垂直留白；外层容器不要再重复叠加第二层上下 `16px`。
14. toolbar 后的表格、卡片网格等首个内容容器不再额外加顶部 margin；间距由 toolbar 下 padding 统一承担。
15. 无标题的全宽表格页使用内容区横向 `16px` 承载 toolbar、table、pagination；三者左边界必须一致，不使用固定宽居中造成工具栏和表格错位。
16. 白底默认按钮的文字和图标颜色统一为 65% 黑（现有次级文本 token），图标必须继承按钮 `currentColor`，不要单独在局部覆盖成主文本色。
17. 按钮图标尺寸按用途区分：带文字按钮左侧图标默认 `14px`（`icon-14`），纯图标按钮内主图标使用 `16px`（`icon-16`），按钮内下拉箭头始终使用 `12px`（`icon-12` / `common_others_Down`）。
18. 分裂按钮属于同一操作组，组内按钮必须贴合不留 `8px` 间距；只保留整组外侧 `2px` 圆角，中间相接处不得出现圆角或空白缝隙。
19. 页内一级 / 二级标题类 Tabs 可以切换，但非 active 项 hover 不变蓝；hover 不替代 active 状态。
20. 页面 / 模块一级标题和标题类 tabs 使用 `16px / 24px`、`font-weight: 700`；不得在单个页面把标题类字重降回 `500`。
21. 详情页一级模块标题栏高度为 `48px`，贴模块顶部放置，标题栏自身承担左右 `16px` 缩进；二级模块标题栏高度为 `40px`，标题文字使用 `14px / 24px`、`font-weight: 700`。
22. 标题栏接续关系由标题栏是否承担分区分割线决定，不是所有标题下方都统一加或不加 `16px`。有 `border-bottom` 分割线的标题栏表示标题区和下方内容区是两个分区，下方无论接表格、表单输入框、列表还是 toolbar，都由内容区承担标准 `16px` 起距。没有分割线的标题栏只是内容区行标题，不承担分区边界，下方直接接表格、输入框或列表时不额外加顶部 `16px`；紧跟操作行时操作行自身使用 `padding: 0 16px 16px`。不要在标题栏外额外包一层 `16px` 大 padding。
23. 内容区 Tree / `.tree-list` 节点文字颜色统一为 65% 黑（现有次级文本 token），由全局 Tree 规则承载，不在单页补色或改回主文本色。
24. 树区域的 `panel-search` hover / focus-within 边框统一使用主色 `#3182DD`，与普通搜索框一致。
25. 下拉菜单项、Select option、Dropdown item 的文字颜色统一为 65% 黑；hover / selected 只改背景或字重，不把文字改回主文本色。
26. 部件类业务对象图标统一使用 `iconfont-plm / plm_tools_Part`，推荐类名 `rd-iconfont iconfont-plm plm_tools_Part icon-16 part-icon`，不得用手写 SVG、齿轮图标或通用工具图标替代。
27. 主色蓝色按钮 hover 背景和边框统一使用 `#59A2EB`，index 原生 `.btn-primary` 和组件库 primary button 都要走同一 token。
28. 弹窗 / Dialog 顶部栏右侧必须提供关闭按钮，关闭按钮和关闭图标尺寸均为 `16px`，距离顶部栏右侧内容边界 `16px`；删除确认等轻量弹窗同样适用。
29. 双列表单列间距固定 `24px`，字段垂直间距固定 `16px`；输入框、文本域、Select / 下拉选择必须具备 hover、focus、open 等真实交互状态，不能只做静态展示。
30. 右侧竖向图标栏如果用于切换左侧内容区，必须按 Tabs / segmented view 的真实交互实现：图标按钮可点击、可聚焦、有 active 状态，左侧标题和内容由同一状态切换；不得用 `aria-hidden` 静态图标冒充控件。
31. 新增页面或组件时必须按“组件完整状态”实现：按钮至少覆盖默认 / hover / focus-visible / disabled / loading，输入类至少覆盖 hover / focus / disabled / placeholder / error，选择类至少覆盖 closed / open / option hover / selected，表格至少覆盖 hover / selected / checked / empty / delete confirm。状态由真实 DOM、状态变量或事件驱动，不用静态 class 伪造。
32. Descriptions / 属性描述列表默认单行高度为 `36px`，label / value 单元格按该高度对齐；多行内容可以自然撑高，但不得把默认单行行高做成 `40px` 或更高。
33. 页面滚动条统一使用全局 token：滚动条宽度 `6px`，滑块颜色 `rgba(93, 112, 146, 0.5)`，轨道透明；不要在单个页面或模块重写成其他宽度或颜色。

## 变更后设计自查

每次修改 UI、组件、页面结构或交互状态后，必须按本次变更涉及的组件类型做同类自查，不得只检查用户明确指出的单点问题。

1. 先判定本次修改涉及的组件或模式：Button、Split Button、Table、Tree、Tabs、Toolbar、Form、Dropdown、Icon、页面框架等。
2. 按 `references/components.md`、`references/patterns.md`、`references/icons.md` 中对应章节逐项检查结构、尺寸、颜色、间距、圆角、图标来源和交互状态。
3. 对同类残留做全文件搜索：例如改分裂按钮时搜索 `btn-split` / `btn-split-main` / `btn-split-addon`；改部件图标时搜索 `cogSmall` / `plm_tools_Part` / `新增部件`；改 tabs 时搜索 `tab:hover` / `active` / 对应 tab 类名。
4. 区分组件内部规则和组件组规则：例如按钮内部图文间距、分裂按钮组内贴合、toolbar 组间间距不能混用临时类解决。
5. 禁止用局部补丁绕开规范；如果需要新增类，必须确认它是可复用结构规则，而不是只修当前截图的临时覆盖。
6. 检查初始态不得伪造交互态：hover、selected、dropdown open、全选等只能由真实状态或明确业务状态产生；同时检查新增控件是否已经带齐所属组件的基础交互状态。
7. 检查图标必须来自 `assets/icons.css` / `component-library-single.html`，并符合尺寸规则：带文字按钮图标 `14px`、纯图标按钮 `16px`、下拉箭头 `12px`、业务对象图标按对象规范。
8. 完成后至少运行脚本语法检查；如果有条件渲染页面，应验证目标用户路径。
9. 最终回复中说明本次自查覆盖了哪些同类项，以及是否发现并修正了额外问题。

### 常用自查映射

- Button：图标来源、图标尺寸、图文间距、文字颜色、hover、disabled。
- Split Button：组内无间距、只保留外侧圆角、中间无空白缝隙、addon 图标尺寸、主按钮图文间距。
- Table：正文 65% 黑、表头主文本色、checkbox 列宽、hover / selected 不作为初始态、操作列箭头 `12px`。
- Tree：正文 65% 黑、搜索框 hover / focus、节点图标来源、selected / hover 不伪造。
- Tabs / 侧边图标切换栏：tabs 区和内容区分离、底线贯穿全宽、内容缩进由内层承担、非 active hover 不变蓝；竖向图标栏用于切换内容时必须有真实按钮语义、active 状态和内容联动。
- Toolbar：上下 padding `16px`、组间距和组内贴合分清、后续首个内容容器不额外加顶部 margin。
- Icon：先查图标库，不手写 SVG；语义、字体族、尺寸和颜色继承都要对。

## 禁止事项

- 不整理或替换主导航。
- 左侧主导航的一级菜单集合必须在首次渲染时完整显示；一级菜单的展开/收起只影响自己的子菜单，不得控制后续一级菜单显隐。
- 不新增第二套后台布局。
- 不把表格做成 antd 默认表格。
- 不把 Form 做成 antd Form；Form 按原 index 的睿知表单规则。
- 不把弹窗、抽屉容器做成 antd 默认 Modal / Drawer。
- 不在 demo 里引入 React 或 antd 运行时。
- 不把表格 hover / selected 状态作为初始静态展示；这些状态只能由真实交互或明确业务选中状态产生。
- 不把表头复选框全选做成局部页面逻辑；全选只改变勾选集合，不把所有行同步置为 selected 背景。
- 不让表头排序按钮露出浏览器原生 button 样式；排序按钮只提供可点击语义，视觉仍遵循表头文本和排序图标规范。

## 输出目标

生成的 HTML 原型应当可以直接打开。后续 case 直接以 `cases/index.html` 为基础修改，不再生成单独的 case 文件。修改时不重写 shell，不改变默认打开后的原页面展示；需要新增组件能力时，只在当前 index 的既有框架内追加必要样式、结构和 JS。

## 图标规则

- `cases/component-library-single.html` 是唯一图标来源。
- `assets/icons.css` 从 `component-library-single.html` 的 iconfont 样式抽取而来，新增组件页面必须先引入它。
- 图标用法和推荐映射见 `references/icons.md`。
- 页面或组件需要新增图标时，必须先到 `cases/component-library-single.html` 的图标库页面查找语义匹配的图标，确认字体族和 class 后再使用；找不到匹配图标时要说明原因，不得临时手写 SVG、字符或引入外部图标库替代。
- 新增组件、case、规范示例不得手写临时 SVG、字符箭头或引入外部图标库。
- Checkbox checked 态属于控件图标，也必须走 `iconfont-fd / common_others_Check-Check`。
- Select、Dropdown、输入框后缀、白底按钮、分页尺寸选择、表格操作列等下拉箭头统一使用 `iconfont-fd / common_others_Down`，容器尺寸 `12px`，颜色继承 `currentColor`。
- 原 `cases/index.html` shell 中已有历史内联 SVG 可以保留；新增组件规范区一律使用 iconfont 类名。
