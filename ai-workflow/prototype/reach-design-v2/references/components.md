# Components

本文件按本地 `D:\antdesign\components` 目录核对组件范围，并整理成 CSS + 原生 JS 原型可执行的规范。

## 可调用文件

第一批已经落地为真实 CSS / JS：

```html
<link rel="stylesheet" href="../assets/tokens.css" />
<link rel="stylesheet" href="../assets/icons.css" />
<link rel="stylesheet" href="../assets/components.batch-01.css" />
<script src="../assets/components.batch-01.js"></script>
```

`components.batch-01` 覆盖 11 个组件：

- Button：`.rd-ant-btn`
- Input / TextArea / InputNumber：`.rd-ant-input`、`.rd-ant-textarea`、`.rd-ant-input-number`
- Select：`.rd-ant-select`
- Form：`.document-drawer-field-grid`、`.document-drawer-field`、`.validity-input`
- Checkbox：`.rd-ant-checkbox`
- Radio：`.rd-ant-radio`
- Switch：`.rd-ant-switch`
- DatePicker：`.rd-ant-picker`
- Dropdown：`.rd-ant-dropdown`
- Tree：`.rd-ant-tree`
- Tag / Status：`.rd-ant-tag`、`.rd-ant-tag-info`、`.rd-ant-tag-success`、`.rd-ant-tag-danger`、`.rd-ant-tag-warning`、`.rd-ant-tag-draft`

后续组件按同样方式继续以 `components.batch-02.css/js`、`components.batch-03.css/js` 分批补齐。

图标使用 `references/icons.md` 中的映射，新增组件不得手写临时 SVG、字符箭头或引入外部图标库。
Select、Dropdown、输入框后缀、按钮、分页尺寸选择、表格操作列中的下拉箭头统一使用 `iconfont-fd / common_others_Down`，容器尺寸 `12px`，颜色继承 `currentColor`。

## 原型默认交互状态

做任何页面原型时，组件默认必须包含可用交互状态，不把截图静态还原当作完成：

- Button：默认、hover、focus-visible、active、disabled、loading。
- Input / TextArea / Search：默认、hover、focus、disabled、placeholder、error。
- Select / Dropdown：关闭、展开、option hover、selected、disabled、点击外部关闭。
- Checkbox / Radio / Switch：未选、hover、focus-visible、checked、disabled。
- Tabs / 侧边图标切换栏：可点击、active、focus-visible、内容区联动。
- Table：hover、selected、checked、empty、勾选后操作按钮、删除确认。
- Dialog / Drawer / Overlay：打开、关闭、遮罩、取消、确认、内部控件状态。

同类状态必须在组件类、组件 JS、渲染函数或统一事件分发中实现。不要在单个页面末尾追加只服务当前截图的覆盖样式、孤立脚本、静态 `selected/open/hover` class，或包裹式 render 补丁。

图标调用示例：

```html
<span class="rd-iconfont iconfont-fd common-tools-Search icon-16" aria-hidden="true"></span>
<span class="rd-iconfont iconfont-plm plm_tools_NewPart icon-16" aria-hidden="true"></span>
```

## 总裁决

| 类型 | 规则来源 |
| --- | --- |
| 通用 antd 组件 | 当前文件源码里的调整后 antd token / 默认组件逻辑 |
| Form | `cases/index.html` 与 `睿知v1.md` 的原表单规则 |
| Table / Editable Table / Batch Edit Table | `cases/index.html` 与 `睿知v1.md` |
| Pagination | 作为睿知表格配套规则处理 |
| Dialog / Drawer / Overlay 容器 | `cases/index.html` 与 `睿知v1.md` |
| antd 导航类组件 | 排除，不整理为可复用组件 |

## 覆盖矩阵

### 按调整后 antd token / 默认组件逻辑整理

这些组件即使在 index 中已有相似样式，也以调整后 antd 逻辑为准：

| 组件 | 原型规范名称 | 说明 |
| --- | --- | --- |
| alert | Alert | 页面内提示条 |
| app | App | 全局消息、弹层挂载上下文的概念，不生成可见容器 |
| auto-complete | AutoComplete | 输入建议 |
| avatar | Avatar | 用户、对象头像 |
| badge | Badge | 角标、状态点 |
| border-beam | BorderBeam | 特殊边框效果，默认不用于业务表单和表格 |
| button | Button | 主按钮、默认按钮、危险按钮、加载按钮 |
| calendar | Calendar | 日期日历面板 |
| card | Card | 仅用于独立内容块，不嵌套卡片 |
| carousel | Carousel | 轮播内容 |
| cascader | Cascader | 级联选择 |
| checkbox | Checkbox | 单选项、多选组、全选 |
| collapse | Collapse | 折叠面板 |
| color-picker | ColorPicker | 颜色选择 |
| config-provider | ConfigProvider | token、主题、尺寸、禁用状态配置概念 |
| date-picker | DatePicker | 日期、范围日期 |
| descriptions | Descriptions | 详情描述列表 |
| divider | Divider | 内容分隔 |
| dropdown | Dropdown | 操作菜单，不作为主导航 |
| empty | Empty | 空状态 |
| flex | Flex | 弹性布局工具 |
| float-button | FloatButton | 浮动操作按钮，不用于返回顶部或主导航 |
| grid / row / col | Grid | 布局辅助，不重做睿知 shell |
| icon | Icon | 图标容器、线性图标语言 |
| image | Image | 图片预览 |
| input | Input / TextArea / Search | 输入、搜索、文本域 |
| input-number | InputNumber | 数字输入 |
| list | List | 简单列表 |
| masonry | Masonry | 瀑布流，不作为标准后台布局默认项 |
| mentions | Mentions | 提及输入 |
| message | Message | 全局轻提示 |
| notification | Notification | 通知提醒 |
| popconfirm | Popconfirm | 轻量确认 |
| popover | Popover | 轻量浮层 |
| progress | Progress | 进度条、环形进度 |
| qr-code / qrcode | QRCode | 二维码 |
| radio | Radio | 单选、单选组 |
| rate | Rate | 评分 |
| result | Result | 结果页状态，不替换空状态 |
| segmented | Segmented | 分段控制器 |
| select | Select | 单选、多选、搜索选择 |
| skeleton | Skeleton | 骨架屏 |
| slider | Slider | 滑动输入 |
| space | Space | 间距工具 |
| spin | Spin | 加载中 |
| splitter | Splitter | 分割面板 |
| statistic | Statistic | 统计数值 |
| switch | Switch | 开关 |
| tabs | Tabs | 页内 tabs，不替换 workspace tabs |
| tag | Tag | 标签、状态标签 |
| time-picker | TimePicker | 时间选择 |
| timeline | Timeline | 时间线 |
| tooltip | Tooltip | 短提示 |
| tour | Tour | 引导层，谨慎使用 |
| transfer | Transfer | 穿梭框 |
| tree | Tree | 内容区树，不替换主导航 |
| tree-select | TreeSelect | 树选择 |
| typography | Typography | 标题、正文、链接、文本省略 |
| upload | Upload | 上传 |
| watermark | Watermark | 水印 |

### 按睿知规则整理

| 组件 | 说明 |
| --- | --- |
| table | 不按 antd 默认表格，按睿知表格 |
| pagination | 跟随睿知表格节奏 |
| form | 不按 antd Form，按原 `cases/index.html` 横向 label / control 表单 |
| modal | 不按 antd Modal 容器，按睿知 Dialog 容器 |
| drawer | 不按 antd Drawer 容器，按睿知 Drawer 容器 |

### 排除或只作为底层能力

| 目录 | 处理 |
| --- | --- |
| layout | 排除，不替换睿知 shell |
| menu | 排除，不替换主导航 |
| breadcrumb | 排除，不新增面包屑体系 |
| anchor | 排除，不做页面锚点导航 |
| steps | 排除，不作为导航流程组件整理 |
| affix | 排除，不改变页面固定布局 |
| back-top | 排除，不接入主页面滚动 |
| overview / version / locale / theme / style / _util / __tests__ | 非业务 UI 组件，不整理为原型组件 |

## 基础规范

所有按调整后 antd 逻辑整理的组件共用以下规则：

- 默认控件高度使用 `--ant-control-height`，即 `28px`。
- 默认文字使用 `14px / 22px`。
- 默认圆角使用 `2px`。
- hover / focus 边框使用 `--ant-color-primary`。
- disabled 不响应 hover，文字使用弱化色。
- 错误态只作用在控件边框或 help 文案，不铺满父容器。
- popup 类组件使用白底、标准边框和轻量阴影。
- JS 只维护状态、展开收起、选中、校验和局部反馈，不引入 React 或 antd 运行时。

## Button

适用：button。

结构：

```html
<button class="rd-ant-btn rd-ant-btn-primary" type="button">保存</button>
<button class="rd-ant-btn" type="button">取消</button>
<button class="rd-ant-btn rd-ant-btn-danger" type="button">删除</button>
<div class="btn-split">
  <button class="btn btn-secondary btn-split-main" type="button">新增部件</button>
  <button class="btn btn-secondary btn-split-addon" type="button" aria-label="更多">...</button>
</div>
```

状态：

- `primary`：主操作。
- `default`：次操作。
- `danger`：危险操作。
- `loading`：禁止重复点击。
- `disabled`：不可点击。

规则：

- icon 与文字间距 `4px`。
- 带文字按钮的左侧图标容器尺寸默认使用 `14px`（`icon-14`）；纯图标按钮内的主图标使用 `16px`（`icon-16`）；按钮内下拉箭头始终使用 `12px`（`icon-12` / `common_others_Down`）。
- 主色蓝色按钮 hover 背景和边框统一为 `#59A2EB`。
- 白底默认按钮（含工具栏默认按钮、分裂按钮右侧、更多按钮）的文字和图标颜色统一使用次级文本色 `--ant-color-text-secondary` / `rgba(0, 20, 50, 0.65)`；图标通过 `currentColor` 继承按钮文字色。
- 相邻按钮间距 `8px`。
- 分裂按钮表示同一操作组，不使用相邻按钮 `8px` 间距；组内按钮必须贴合，外层使用 `.btn-split` / `.btn-split-main` / `.btn-split-addon` 结构。
- 分裂按钮只保留整组外侧 `2px` 圆角：左侧主按钮为 `2px 0 0 2px`，右侧 addon 为 `0 2px 2px 0`，中间相接处不得出现圆角。
- 分裂按钮中间可以保留必要分隔线或边框衔接，但不得出现双边框造成的空白缝隙；addon 宽度按图标按钮需求设置。
- 表格工具栏按钮仍按 antd Button token，但工具栏与表格的节奏按睿知表格模式。

## Input / TextArea / Search / Mentions / InputNumber

适用：input、input-number、mentions。

结构：

```html
<input class="rd-ant-input" placeholder="请输入" />
<textarea class="rd-ant-textarea" placeholder="请输入说明"></textarea>
<div class="rd-ant-input-affix">
  <input class="rd-ant-input" placeholder="搜索" />
  <span class="rd-icon">...</span>
</div>
```

规则：

- 默认高度 `28px`，文本域按内容高度设置。
- Search 使用 affix 结构，图标不改变输入框高度。
- InputNumber 右侧 stepper 不应压缩正文区域。
- Mentions popup 跟随输入框宽度。
- error、disabled、readonly 必须有可见差异。

## Select / AutoComplete / Cascader / TreeSelect / Dropdown

适用：select、auto-complete、cascader、tree-select、dropdown。

结构：

```html
<div class="rd-ant-select">
  <button class="rd-ant-select-trigger" type="button" data-rd-select-trigger>
    <span data-rd-select-value>请选择</span>
    <span>...</span>
  </button>
  <div class="rd-ant-select-popup">
    <button class="rd-ant-select-option is-selected" type="button" data-rd-select-option>启用</button>
    <button class="rd-ant-select-option" type="button" data-rd-select-option>停用</button>
  </div>
</div>
```

规则：

- 展开 / 收起不修改值，点击 option 后才写入值。
- 下拉菜单项、Select option、Dropdown item 的文字颜色统一使用次级文本色 `--ant-color-text-secondary` / `rgba(0, 20, 50, 0.65)`。
- option hover 使用 item hover token。
- option selected 使用 item active token；selected 只改变背景和必要字重，不把文字改回主文本色。
- Cascader 多列面板每列等高滚动。
- TreeSelect 使用 Tree 节点规则。
- Dropdown 只用于操作菜单，不作为主导航。

## Form

适用：form。

来源：`cases/index.html` 与 `睿知v1.md` 的原表单规则。

结构：

```html
<form data-rd-reach-form>
  <div class="document-drawer-field-grid">
    <label class="document-drawer-field is-required">
      <span class="document-drawer-field-label">名称</span>
      <span class="document-drawer-field-control">
        <input class="validity-input" data-rd-reach-required />
      </span>
    </label>
  </div>
  <div class="validity-form-error" data-rd-reach-form-error hidden>请完成必填项</div>
</form>
```

规则：

- 常规表单项采用 label 与控件同一水平行的结构。
- label 与右侧控件固定 `8px` 间距。
- 同一列 label 宽度保持一致，由当前列最宽 label 决定。
- 双列表单列间距固定 `24px`，字段垂直间距固定 `16px`。
- 输入框、文本域、Select / 下拉选择必须有真实 hover、focus、open 状态；hover / focus 边框使用主色，open 态随下拉真实展开触发。
- 输入框右侧有搜索、链接、大小写等图标时，使用 affix / suffix 结构；输入框仍然必须是真实 `input` 或 `textarea`，不得为了放图标改成只读展示 `span`。
- 弹窗、抽屉、对话框中的表单全部沿用这套规则。

## Checkbox / Radio / Switch / Segmented / Slider / Rate / ColorPicker

适用：checkbox、radio、switch、segmented、slider、rate、color-picker。

规则：

- Checkbox 和 Radio 的选中态使用主色。
- Checkbox 未选中边线使用 `--ant-color-text-tertiary`，即 `rgba(0, 0, 0, 0.45)`。
- Checkbox checked 态的白色对号必须引用 `assets/icons.css` 中的 `iconfont-fd / common_others_Check-Check` glyph，不使用 CSS 画线、临时 SVG 或字符替代。
- 表格、弹窗、抽屉、表单配置区中的 Checkbox 都必须使用全局 checkbox 控件样式，不在单页内单独重写边线、尺寸或勾选图形。
- 表格中的 Checkbox 外层使用 `.checkbox-align` 对齐容器，保持表头、正文、弹窗表格和抽屉表格一致。
- Checkbox 全选仅改变勾选集合，不替代表格行选中。
- Switch 表达二元开关，不用于提交动作。
- Segmented 用于同级视图或模式切换，不替代 Tabs。
- Slider 用于数值范围，必须显示当前值或输入回显。
- Rate 用于评分，不用于状态等级。
- ColorPicker popup 使用轻量浮层规则。

## Tabs / Collapse / Timeline

适用：tabs、collapse、timeline。

规则：

- Tabs 仅用于页内内容切换，不替换 workspace tabs。
- Tabs active 使用主色和底部 indicator。
- 页内一级 / 二级标题类 Tabs 可以点击切换，但非 active 项 hover 不变蓝，保持默认标题文字色；不要把 hover 当作 active 状态。
- 右侧竖向图标栏用于切换相邻内容区时，按 Tabs / segmented view 处理：图标按钮必须可点击、可聚焦、有 active 状态，内容标题和主体随同一状态切换；不得使用 `aria-hidden` 静态图标。
- 竖向图标切换栏只保留容器左侧边线，不在图标按钮之间增加分割线。
- 竖向图标切换栏的左侧边线由容器承载，内部按钮宽度使用 `100%`，active / hover 背景不得覆盖或遮断容器左侧边线。
- Collapse 用于折叠次级内容，不隐藏核心操作。
- Timeline 用于历史记录、流程记录，不作为 Steps 导航替代。

## Tree / TreeSelect / Transfer

适用：tree、tree-select、transfer。

规则：

- Tree 仅用于内容区树，不替换主导航。
- Tree 节点由 switcher、icon、title 分离。
- 内容区 Tree 节点文字统一使用次级文本色 `--ant-color-text-secondary` / `rgba(0, 20, 50, 0.65)`；不要在页面局部改回主文本色。
- hover 使用 item hover token。
- selected 使用 item active token。
- 展开 / 折叠不改变选中项。
- Transfer 左右列表保持同高，搜索框跟随列表宽度。

## Tag / Badge / Avatar / Statistic / Progress

适用：tag、badge、avatar、statistic、progress。

规则：

- Tag 用于分类和轻量状态。
- Tag / Status 基础形态统一为高度 `22px`、左右 padding `8px`、圆角 `2px`、字号 / 行高 `12px / 20px`。
- 统一使用 `.rd-ant-tag` 及语义类：`.rd-ant-tag-info`、`.rd-ant-tag-success`、`.rd-ant-tag-danger`、`.rd-ant-tag-warning`、`.rd-ant-tag-draft`。
- 审批中使用 info，已完成使用 success，驳回使用 danger，警告使用 warning，拟制中使用 draft。
- 页面内已有状态 chip、人员 chip、密级标签也要继承这套尺寸 token，不单独写 `24px` 或其他高度。
- Badge 点状状态不承载长文本。
- Avatar 用于用户或对象头像，缺图时用文字 fallback。
- Statistic 用于局部指标，不默认新增指标条。
- Progress 用于任务进度，不用于普通状态标签。

## Alert / Message / Notification / Result / Empty / Spin / Skeleton

适用：alert、message、notification、result、empty、spin、skeleton。

规则：

- Alert 用于页面内可见提示。
- Message 用于短反馈，自动消失。
- Notification 用于较长系统通知。
- Result 用于流程结果页，不替代 Empty。
- Empty 用于无数据。
- Spin 用于局部加载，不遮蔽整个 shell。
- Skeleton 用于首次加载的表格、列表或详情区域。

## Tooltip / Popover / Popconfirm / Tour

适用：tooltip、popover、popconfirm、tour。

规则：

- Tooltip 只放短说明。
- Popover 放轻量内容或操作。
- Popconfirm 用于危险或不可逆操作确认。
- Tour 谨慎使用，不默认加入业务原型。
- 这些浮层不替代睿知 Dialog / Drawer 容器。

## DatePicker / TimePicker / Calendar

适用：date-picker、time-picker、calendar。

规则：

- DatePicker 和 TimePicker 必须可展开面板选择。
- 点击具体日期或时间后才写入值。
- Range 选择需要展示开始和结束。
- Calendar 适合完整日期面板，不嵌入高密度表格单元格。
- 批量编辑表格中的日期控件高度按睿知单元格编辑规则使用 `24px`。

## Upload / Image / QRCode / Watermark

适用：upload、image、qr-code、qrcode、watermark。

规则：

- Upload 支持点击上传、拖拽上传、文件列表。
- 上传结果反馈用 Message 或表单 help。
- Image 可提供预览，但不改变页面 shell。
- QRCode 作为内容区组件。
- Watermark 只作为页面内容水印，不覆盖主导航可读性。

## Card / List / Descriptions / Divider / Typography

适用：card、list、descriptions、divider、typography。

规则：

- Card 只用于独立信息块，不做卡片套卡片。
- List 用于低密度列表，不替代睿知表格。
- Descriptions 用于详情字段展示。
- Descriptions / 属性描述列表默认每行高度 `36px`；label / value 单元格上下居中，短文本不额外撑高。多行文本允许由内容自然撑高，但不得把默认单行高度改成 `40px` 或更高。
- Divider 用于内容分隔，不制造额外大留白。
- Typography 管理标题、正文、链接、复制、省略，不改变 shell 字体体系。

## Layout Helpers

适用：flex、grid、row、col、space、splitter、masonry。

规则：

- 这些是内容区布局工具，不重做睿知 shell。
- 页面和内容区滚动条使用统一全局样式：宽度 `6px`，滑块颜色 `rgba(93, 112, 146, 0.5)`，轨道透明；除明确隐藏滚动条的横向工作区外，不在局部重写滚动条宽度或颜色。
- Space 只管理局部控件间距。
- Splitter 用于可拖拽分栏，不能破坏既有页面宽高。
- Masonry 不是后台标准布局默认项，只有明确图片流或卡片流需求时使用。

## Table

来源：`cases/index.html` 与 `睿知v1.md`。表格不按 antd 默认表格。

结构：

```html
<div class="rd-table-wrap">
  <table class="rd-table">
    <thead>
      <tr>
        <th class="checkbox-cell"><span class="checkbox-align"><input class="checkbox" type="checkbox" /></span></th>
        <th>名称</th>
      </tr>
    </thead>
    <tbody>
      <tr class="selected">
        <td class="checkbox-cell"><span class="checkbox-align"><input class="checkbox" type="checkbox" /></span></td>
        <td>示例数据</td>
      </tr>
    </tbody>
  </table>
</div>
```

规则：

- 表头高度 `36px`。
- 行高 `36px`。
- 表头背景 `#EFF4F9`。
- 表头文字使用主文本色 `rgba(0, 0, 0, 0.85)`。
- 表格正文文字使用次级文本色 `--ant-color-text-secondary`，即 `rgba(0, 20, 50, 0.65)`。
- hover `#F5F5F5`。
- selected `#E6F7FF`。
- hover 和 selected 都是交互/业务状态，不作为表格初始静态展示色；默认行背景保持白色。
- 第一列复选框列宽固定 `32px`。
- 表头第一列复选框是当前表格数据的全选 / 取消全选入口；点击后应同步当前表格所有行的勾选状态，弹窗和抽屉内的表格同样适用。
- 带复选框的表格必须有勾选驱动的 toolbar 删除按钮；未勾选时不显示，勾选任意行后显示，删除按钮由当前表格的勾选集合驱动渲染。
- 点击删除按钮必须先打开“删除确认”弹窗；取消后不改变勾选集合，确认后必须从当前渲染数据中移除对应行并清空当前勾选集合。
- Pagination 作为表格配套区域，普通文字、页码、箭头、每页条数、跳转文字和输入框文字统一使用次级文本色 `rgba(0, 20, 50, 0.65)`；active 页码仍使用主色。
- 表头排序触发器必须是透明按钮语义，不显示浏览器原生按钮边框、背景或黑色 focus 框；排序图标保持 `10px x 16px` 容器尺寸。
- 复选框未选中边线使用 `45%` 黑，不随单个页面局部覆盖。
- 操作列里的“更多 + 下拉箭头”作为一个整体操作项处理：文字与箭头间距固定 `4px`，箭头颜色继承“更多”文字颜色，不单独设置成正文色。
- 操作列下拉箭头的 glyph 统一使用 `iconfont-fd / common_others_Down`，容器尺寸 `12px`，不得使用临时 SVG 或字符箭头。
- 文本不换行，超出省略。
- 表格和分页直接衔接，不额外插入空白。

## Editable Table / Batch Edit Table

来源：`cases/index.html` 与 `睿知v1.md`。

规则：

- 默认态只显示轻量文本。
- 单元格 hover / focus 后才出现编辑控件。
- 编辑控件高度 `24px`。
- 行选中和复选框勾选是两套独立逻辑。
- 表头全选只改变勾选集合，不把所有数据行同步置为 selected 背景。
- 横向滚动后编辑不能回到最左侧。
- 重渲染必须保留 `scrollLeft` 和 `scrollTop`。
- 必填错误只显示在内部控件边框，不铺满整格。

## Pagination

来源：睿知表格配套规则。

规则：

- 跟随表格容器宽度。
- 与表格直接衔接。
- 不为视觉整齐重做结构。
- 页码按钮可使用调整后的 antd Button token，但布局节奏按睿知表格。

## Dialog / Modal

来源：`cases/index.html` 与 `睿知v1.md`。

规则：

- 不使用 antd 默认 Modal 容器。
- 遮罩为黑色 `35%`。
- header 高度 `48px`。
- footer 高度 `48px`。
- top 栏右侧必须提供关闭按钮，按钮和关闭图标尺寸均为 `16px`，右侧距离内容边界 `16px`。
- footer 按钮右对齐，按钮间距 `8px`。
- 弹窗内部 Form 按睿知原表单规则；通用控件按对应组件规则。
- 批量编辑弹窗的表格区域仍按睿知表格规则。

## Drawer

来源：`cases/index.html` 与 `睿知v1.md`。

规则：

- 不使用 antd 默认 Drawer 容器。
- 从右侧滑出。
- 默认宽度 `700px`。
- header / footer 高度均为 `48px`。
- body 承载详情、表单或表格内容。
- 关闭按钮右侧保留 `16px`。
- 内部 Form 按睿知原表单规则；通用控件按对应组件规则。
