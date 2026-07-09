# Checklist

交付前按本清单检查。

## 结构

- [ ] 文件位于 `D:\antdesign\reachdesign\antd-design-v2`。
- [ ] `SKILL.md`、`references/tokens.md`、`references/components.md`、`references/patterns.md`、`cases/index.html`、`assets/checklist.md` 都存在。
- [ ] `assets/tokens.css` 存在，并包含源码 token 翻译后的 CSS 变量。
- [ ] `assets/icons.css` 存在，并从 `cases/component-library-single.html` 抽取 FD / IDS / PLM iconfont。
- [ ] `references/icons.md` 存在，并列出常用图标映射和使用限制。
- [ ] 已完成批次组件必须有对应 `components.batch-xx.css`，需要交互时有对应 `components.batch-xx.js`。
- [ ] 不生成单独的 case 文件。
- [ ] demo 可以直接用浏览器打开。
- [ ] 后续 case 直接以 `cases/index.html` 为基础扩展，不重新生成独立 shell。
- [ ] 新增页面原型默认包含组件交互状态：hover、focus / focus-visible、active、selected、checked、disabled、open、empty、error、loading 按组件类型补齐。
- [ ] 同类视觉或行为问题已在 token、组件类、渲染 helper、统一事件分发或业务组合模式中处理，没有在页面末尾追加只服务当前截图的覆盖样式或孤立脚本。
- [ ] 详情查看类页面中，视觉独立的上方信息区、左下列表区、右下配置区在 DOM 中也是兄弟模块。
- [ ] 页面 / 模块一级标题和标题类 tabs 使用 `16px / 24px`、`font-weight: 700`，没有单页降回 `500`。
- [ ] 详情页一级模块标题栏高度为 `48px`，二级模块标题栏高度为 `40px`，标题栏顶到模块顶部。
- [ ] 无分割线标题只是内容区行标题，下方直接接表格、输入框或列表时不额外加顶部 `16px`；紧跟操作行时操作行 padding 为 `0 16px 16px`，没有外层 `16px` 大 padding。
- [ ] 有 `border-bottom` 分割线的标题栏表示上下分区，下方接表格、输入框、列表或 toolbar 时内容区保持标准 `16px` 起距。
- [ ] 带页内 Tabs 的模块已拆分为 Tabs 区和内容区；Tabs 底部分割线贯穿模块全宽，内容缩进由内层承担。
- [ ] 页内一级 / 二级标题类 Tabs 可切换，但非 active 项 hover 不变蓝。
- [ ] 右侧竖向图标栏用于切换内容时，使用真实按钮 / tablist 语义，有 active 状态，并联动标题栏和内容区；没有使用 `aria-hidden` 静态图标。
- [ ] 右侧竖向图标栏只保留容器左侧边线，图标按钮之间没有横向分割线。
- [ ] 右侧竖向图标栏 active / hover 背景没有覆盖或遮断容器左侧整高边线。
- [ ] 外层白色页面面板需要圆角时使用 `2px`，并用 `overflow: hidden` 裁切内部边线。
- [ ] 页面滚动条宽度为 `6px`，滑块颜色为 `rgba(93, 112, 146, 0.5)`，轨道透明，没有局部改成其他颜色或宽度。

## 裁决来源

- [ ] `references/components.md` 已按本地 `D:\antdesign\components` 目录核对组件范围。
- [ ] 没有回到原版 antd 重新推导组件范围。
- [ ] 通用组件按当前文件源码里的调整后 antd token / 默认组件逻辑。
- [ ] Form 按 `index.html / 睿知v1.md` 的原表单规则。
- [ ] Table / Editable Table / Batch Edit Table 按 `index.html / 睿知v1.md`。
- [ ] Dialog / Drawer 容器按 `index.html / 睿知v1.md`。
- [ ] antd 导航类组件没有被整理或接入。

## Shell

- [ ] 左侧主导航没有被替换。
- [ ] 左侧主导航一级菜单首次渲染即完整显示；展开/收起只影响本组二级菜单，不影响后续一级菜单显隐。
- [ ] Header 没有被替换。
- [ ] workspace tabs 没有被替换。
- [ ] 页面仍挂在 1440 x 900 睿知 shell 中。
- [ ] 默认打开后的 active page 不被擅自改动。
- [ ] 类型属性管理这类页面使用“顶部页内 Tabs + 下方左右配置表格”框架：Tabs 区和内容区为兄弟结构，左右面板为兄弟结构。
- [ ] 右侧竖向工具条是整高独立模块，右侧表格到竖条左侧保留 `16px` 间距，表格自身保留完整边框。
- [ ] 左右面板的边线、表格边框和竖向工具条不重复画同一条竖线。
- [ ] 左右主从表格使用独立数据源和独立 pageKey；左侧选中变化时右侧数据变化并清空右侧勾选，右侧 toolbar 只作用于右侧当前数据。

## 组件

- [ ] Button、Input、Select、Tree、Tag、Status、Tooltip、Popover 使用 `--ant-*` token。
- [ ] 主色蓝色按钮 hover 背景和边框为 `#59A2EB`。
- [ ] 白底默认按钮的文字和图标颜色为次级文本色 `rgba(0, 20, 50, 0.65)`，图标继承 `currentColor`。
- [ ] 按钮图标尺寸按用途区分：带文字按钮左侧图标为 `14px`，纯图标按钮主图标为 `16px`，按钮内下拉箭头为 `12px`。
- [ ] 分裂按钮组内按钮贴合无 `8px` 间距，只保留整组外侧 `2px` 圆角，中间相接处没有圆角或空白缝隙。
- [ ] Tag / Status 高度 `22px`、左右 padding `8px`、圆角 `2px`，并使用全局语义色。
- [ ] 新增图标前已先在 `cases/component-library-single.html` 图标库页面查找语义匹配图标，并确认字体族和 class。
- [ ] 新增组件图标只使用 `assets/icons.css` 中来自 `component-library-single.html` 的 iconfont 类。
- [ ] 新增组件 demo 中没有手写临时 SVG、字符箭头或外部图标库。
- [ ] 部件类业务对象图标使用 `rd-iconfont iconfont-plm plm_tools_Part icon-16 part-icon`，没有使用手写 SVG、齿轮图标或通用工具图标替代。
- [ ] Select、Dropdown、输入框后缀、按钮、分页尺寸选择、表格操作列中的下拉箭头使用 `iconfont-fd / common_others_Down`，容器尺寸为 `12px`，颜色继承 `currentColor`。
- [ ] 内容区 Tree / `.tree-list` 节点文字颜色为次级文本色 `rgba(0, 20, 50, 0.65)`，没有单页改回主文本色。
- [ ] 表单 label / control 同行、列内 label 等宽、双列间距 `24px`、字段垂直间距 `16px`；输入框、文本域、Select / 下拉选择具备 hover、focus、open 状态。
- [ ] 带后缀图标的输入框仍是真实 `input` / `textarea` + affix / suffix 结构，没有被写成只读展示 `span`。
- [ ] 树区域 `panel-search` 有 hover / focus-within 主色边框状态。
- [ ] `.toolbar` / `.toolbar.wide` 上下 padding 为 `16px`，外层容器没有重复叠加第二层上下 `16px`。
- [ ] toolbar 后的表格、卡片网格等首个内容容器没有额外顶部 margin。
- [ ] 表格表头 `36px`，行高 `36px`。
- [ ] 表格表头文字为主文本色，表格正文文字为 `rgba(0, 20, 50, 0.65)`。
- [ ] Pagination 普通文字、页码、箭头、每页条数、跳转文字和输入框文字为 `rgba(0, 20, 50, 0.65)`，active 页码保持主色。
- [ ] Descriptions / 属性描述列表默认单行高度为 `36px`，多行内容才自然撑高。
- [ ] 表格 hover 为 `#F5F5F5`，selected 为 `#E6F7FF`。
- [ ] 表格 hover / selected 状态没有作为初始静态背景出现。
- [ ] 无标题全宽表格页的 toolbar、table、pagination 由同一个横向 `16px` 内容区承载，左边界一致。
- [ ] 表格复选框列宽 `32px`。
- [ ] 表头复选框可全选 / 取消全选当前表格全部数据行。
- [ ] 表头排序按钮没有浏览器原生按钮边框、背景或黑色 focus 框，排序图标保持 `10px x 16px`。
- [ ] 表格操作列“更多 + 下拉箭头”间距为 `4px`，箭头与“更多”文字同色继承。
- [ ] 带复选框的表格有勾选驱动的 toolbar 删除按钮；未勾选时不显示，勾选任意行后显示，弹窗和抽屉内表格同样适用。
- [ ] 表格删除按钮点击后先出现“删除确认”弹窗；取消不改变勾选，确认后从当前渲染数据中移除对应行并清空勾选。
- [ ] 表格行渲染、表头全选 rowIds 和分页总数使用同一个过滤后数据源，删除后行和总数同步更新。
- [ ] 复选框未选中边线为 `rgba(0, 0, 0, 0.45)`，且使用全局 checkbox 规则。
- [ ] 弹窗、抽屉、表单配置区里的复选框同样使用全局 checkbox 规则；表格场景外层带 `.checkbox-align`。
- [ ] 复选框 checked 态的对号来自 `assets/icons.css` 的 `iconfont-fd / common_others_Check-Check`，没有用 CSS 画线或临时 SVG。
- [ ] 批量编辑表格行选中和复选框勾选分离。
- [ ] 弹窗和抽屉 header/footer 均为 `48px`。
- [ ] 弹窗 top 栏右侧有关闭按钮，按钮和图标尺寸均为 `16px`，右侧边距 `16px`。
- [ ] 抽屉关闭按钮保留右侧 `16px`。

## 交互

- [ ] 下拉展开 / 收起不直接修改值。
- [ ] 下拉菜单项、Select option、Dropdown item 文字颜色为次级文本色 `rgba(0, 20, 50, 0.65)`。
- [ ] 点击下拉 option 后才写入值。
- [ ] 表格点击普通单元格会更新当前行选中。
- [ ] 复选框点击只改变勾选集合。
- [ ] 表头复选框全选只改变勾选集合，不把所有行变成 selected 背景。
- [ ] 表单提交时能展示错误态。
- [ ] Dialog 和 Drawer 能打开和关闭。
- [ ] demo 中没有使用 React 或 antd 运行时。
