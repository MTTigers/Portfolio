# Patterns

本文件整理睿知页面中可复用的业务组合模式。

## 组合原则

- 页面框架使用睿知 shell：左侧主导航、Header、workspace tabs、内容区布局不重做。
- 通用控件使用调整后的 antd token / 默认组件逻辑。
- 表格、批量编辑表格、分页节奏使用睿知规则。
- Dialog / Drawer 容器使用睿知规则，内部 Form 使用原 index 表单规则。
- 同一模块只允许一个间距拥有者；外层已有 `16px` 时，内层不要再次叠加。
- 视觉上独立的区域，结构上也必须是独立模块；不要把多个独立模块塞进一个大模块后用内部网格模拟。
- 承载贯穿线条的层不要同时承担内容 padding；横线、竖线、圆角裁切应落在模块边界或专门的结构层上。

## 工具栏 + 表格

适用于列表管理、配置列表、查询结果。

结构：

```html
<section class="rd-content-panel">
  <div class="rd-toolbar">
    <div class="rd-toolbar-left">...</div>
    <div class="rd-toolbar-right">...</div>
  </div>
  <div class="rd-table-wrap">...</div>
  <div class="rd-pagination">...</div>
</section>
```

规则：

- 工具栏左右边距 `16px`。
- `.rd-toolbar` / `.toolbar` 自身上下 padding 为 `16px`，由 toolbar 承担垂直留白。
- 工具栏与下方表格、卡片网格等首个内容之间的垂直间距由 toolbar 的下 padding 承担；内容容器不再额外加顶部 margin。
- 表格与分页直接衔接。
- 工具栏按钮、输入、下拉使用调整后的 antd token。
- 表格本体使用睿知表格规则。

## 左树右表

适用于分类、配置、资料目录。

规则：

- 左侧内容区树使用调整后的 antd Tree 组件逻辑。
- 主导航不参与该模式。
- 树列表正文文字使用次级文本色 `rgba(0, 20, 50, 0.65)`，由 Tree / `.tree-list` 全局规则承载，不在单页补色。
- 树区域搜索框 `panel-search` 有 hover / focus-within 主色边框状态，和普通搜索框保持一致。
- 右侧表格使用睿知表格规则。
- 左右列贴合内容区，不额外做人为留缝。
- 树选中项只影响右侧数据，不修改 workspace 页签。

## 页内 Tabs + 内容面板

适用于配置分组、详情页签、子模块切换。

规则：

- 页内 Tabs 使用调整后的 antd Tabs 逻辑。
- workspace tabs 不使用本规则。
- active tab 使用主色文字和底部 indicator。
- 页内一级 / 二级标题类 tabs 的非 active hover 不变蓝；hover 不替代 active 状态，active 表达只来自当前选中 tab。
- 切换 tab 时只替换内容面板，不重建 shell。
- 带 Tabs 的模块必须拆成 Tabs 区和内容区两个兄弟部分。Tabs 区的底部分割线贯穿整个模块宽度，Tabs 文案通过内层容器保留左右 `16px` 缩进。
- 下方内容区单独保留左右 `16px` 缩进，不把 padding 加在承担全宽分割线的父模块上。

## 页内 Tabs + 左右配置表格

适用于类型属性管理、属性约束配置、规则矩阵维护等“顶部页内 Tabs + 下方左右配置区域”的页面。

结构：

```html
<section class="rd-page-panel">
  <div class="rd-tabs-area">
    <div class="rd-tabs-inner">...</div>
  </div>
  <div class="rd-tab-content">
    <section class="rd-left-panel">...</section>
    <section class="rd-right-panel">
      <div class="rd-panel-title">...</div>
      <div class="rd-right-panel-body">...</div>
      <div class="rd-side-tools" role="tablist">...</div>
    </section>
  </div>
</section>
```

规则：

- 外层页面白色面板使用 `2px` 圆角，必要时用 `overflow: hidden` 裁切内部边线。
- 顶部 Tabs 区和下方内容区必须是兄弟结构；Tabs 底线贯穿整个页面面板宽度，Tabs 文案由内层容器承担左右 `16px` 缩进。
- 下方内容区按视觉拆成左、右两个兄弟面板，不能把左右表格塞进一个大模块再用内部布局模拟。
- 左右面板之间的竖线由面板边界承担；不要在表格、内容区和竖条上重复画同一条线。
- 右侧若有竖向工具条，工具条必须是整高独立模块，从右侧面板顶端贯穿到底；内容区需要预留工具条宽度。
- 竖向工具条只保留容器左侧边线，图标按钮之间不加横向分割线；active / hover 通过背景和图标色表达。
- 竖向工具条左侧边线必须由容器自身承载并贯穿到底；内部按钮宽度使用内容区 `100%`，不得用固定宽度覆盖容器边线，active 白底不能遮断左侧边线。
- 竖向工具条如果用于切换右侧面板主体内容，必须是真实交互控件：按钮可点击、可聚焦、有 active 状态，并联动标题栏与左侧内容区；不得使用 `aria-hidden` 静态图标。
- 右侧面板如果展示左侧当前选中项的明细 / 下级 / 关联数据，必须使用独立数据源和独立 pageKey；左侧选中变化时右侧数据随之变化，并清空右侧勾选状态。不得直接复用左侧表格数据造成左右完全一样。
- 右侧表格也必须有自己的 toolbar；新增、删除、搜索等操作只作用于右侧当前数据，不影响左侧列表。
- 右侧表格到竖向工具条左侧必须保留 `16px` 间距，表格自身仍保留完整边框。
- 左右面板内的 toolbar 由自身上下 `16px` padding 承担垂直留白；toolbar 后的表格不额外加顶部 margin。
- 表格使用睿知表格规则；复选框勾选和行 selected 是两套逻辑。
- 删除、移除等依赖选中数据的操作按钮由勾选集合驱动渲染；未勾选时不显示该按钮，不用 disabled 或局部隐藏样式假装状态。
- 表格内 Select、输入框、查找按钮等控件使用全局控件状态；下拉菜单单元格允许弹层溢出，不被普通表格文本省略规则裁掉。

## 上方信息 + 左右配置

适用于生命周期模板查看、规则配置查看、上方基础属性下方左右联动配置等详情页面。

结构：

```html
<section class="rd-page-panel">
  <section class="rd-basic-panel">...</section>
  <section class="rd-left-panel">...</section>
  <section class="rd-right-panel">
    <div class="rd-tabs-area">
      <div class="rd-tabs-inner">...</div>
    </div>
    <div class="rd-panel-content">...</div>
  </section>
</section>
```

规则：

- 外层页面白色面板保留 `2px` 圆角，并用 `overflow: hidden` 裁切内部模块边线。
- 页面 / 模块一级标题和标题类 tabs 使用 `16px / 24px`、`font-weight: 700`；不要在单页局部降回 `500`。
- 详情页一级模块标题栏高度为 `48px`，贴模块顶部放置，标题栏自身承担左右 `16px` 缩进；二级模块标题栏高度为 `40px`，标题文字使用 `14px / 24px`、`font-weight: 700`。
- 标题栏接续关系由标题栏是否承担分区分割线决定，不是所有标题下方都统一加或不加 `16px`。有 `border-bottom` 分割线的标题栏表示标题区和下方内容区是两个分区，下方无论接表格、表单输入框、列表还是 toolbar，都由内容区承担标准 `16px` 起距。没有分割线的标题栏只是内容区行标题，不承担分区边界，下方直接接表格、输入框或列表时不额外加顶部 `16px`；紧跟操作行时操作行自身使用 `padding: 0 16px 16px`。不要在标题栏外额外包一层 `16px` 大 padding。
- 上方信息区、左下区域、右下区域是兄弟模块，不是一个大内容模块内部的三个子块。
- 上方信息区下沿的横向分割线应贯穿左右下方模块的起始位置。
- 左右下方模块之间的竖向分割线从下方模块顶端开始贯穿到底。
- 右侧带 Tabs 时，Tabs 区底线贯穿右侧模块全宽，Tabs 文案和内容分别在内层做 `16px` 缩进。
- 左侧表格、右侧矩阵表格使用睿知表格规则；表格状态色只在真实 hover、选中或明确业务态下出现。

## Index 扩展模式

适用于 `cases/index.html`。

规则：

- 直接在 `cases/index.html` 上扩展，不另建单独 case 文件。
- 默认 active page、左侧主导航、Header、workspace tabs 结构保持 index 原状。
- 需要新增组件能力时，优先挂到现有页面、页签或内容区，不替换已有页面展示。
- 扩展 CSS 必须使用明确作用域前缀，避免覆盖原页面类名。
- 扩展 JS 集成到现有 page definition、稳定 shell 分支和事件分发中，不再新增包裹 `render` 的补丁式代码。
- 新增页面原型必须默认带交互状态；缺少 hover、focus、open、selected、checked、disabled、empty、error、loading 等状态时，先补全对应组件 / 全局写法，再在页面中复用。
- 同类视觉或行为问题不得按页面临时覆盖处理；应沉淀到 token、组件类、渲染 helper、统一事件分发或业务组合模式中，页面只负责组合这些能力。
- 弹窗和抽屉继续复用 index 中的 drawer layer 宿主和容器节奏。

## 表单弹窗

适用于新增、编辑、导入参数设置。

规则：

- 弹窗容器使用睿知 Dialog：header/footer `48px`、遮罩 `35%`。
- 内部 Form 使用原 `index.html / 睿知v1.md` 表单规则。
- 双列表单列间距固定 `24px`，字段垂直间距固定 `16px`；输入框、文本域、Select / 下拉选择必须保留 hover、focus、open 状态。
- footer 右侧放取消和确定，间距 `8px`。
- 校验信息显示在控件下方。
- 关闭按钮保持右侧 `16px`。

## 抽屉详情

适用于详情查看、轻量编辑、关联资料。

规则：

- 抽屉容器使用睿知 Drawer：右侧滑出、默认宽 `700px`。
- header/footer `48px`。
- 内部可放 Form、描述信息、表格或附件列表。
- Form 使用原 `index.html / 睿知v1.md` 表单规则；通用控件按对应组件规则。
- 双列表单列间距固定 `24px`，输入框、文本域、Select / 下拉选择必须保留 hover、focus、open 状态。
- 表格使用睿知表格规则。

## 批量编辑表格

适用于批量新增、批量修改、属性维护。

规则：

- 容器通常放在睿知 Dialog 或内容面板内。
- 表格使用 `border-collapse: separate; border-spacing: 0;`。
- 第一列复选框 `32px`，第二列编号 `40px`。
- 单元格默认轻量文本，hover / focus 后出现编辑控件。
- 行选中与复选框勾选分离。
- 横向滚动、纵向滚动在局部重渲染后必须保持。
- 全局校验后，必填未填单元格持续显示错误态。

## 导入导出流程

适用于配置导入、模板下载、导出确认。

规则：

- 入口按钮使用调整后的 antd Button。
- 容器使用睿知 Dialog。
- 上传控件使用调整后的 antd Upload 逻辑。
- 预览表格使用睿知表格。
- 不做额外完成页；结果通过消息反馈或业务提示表达。

## 状态反馈

适用于保存成功、校验失败、处理提示。

规则：

- Message / Notification 使用调整后的 antd feedback 逻辑。
- 局部状态放在表格单元格、表单 help 或状态标签中。
- 不用大面积装饰卡片表达简单反馈。

## 禁止模式

- 不把 Menu、Breadcrumb、Steps 接入主导航或页面框架。
- 不用卡片列表替代高密度批量编辑表格。
- 不在弹窗和抽屉外再套一层卡片。
- 不在表格与分页之间加额外空白。
- 不把 Form 做成 antd Form；Form 按原 index 的睿知表单规则。
