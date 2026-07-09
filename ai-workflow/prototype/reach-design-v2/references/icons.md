# Icons

图标只来自 `cases/component-library-single.html`，并通过 `assets/icons.css` 引入。新增组件、case、规范示例不得手写临时 SVG、字符箭头或外部图标库。

## 引入方式

```html
<link rel="stylesheet" href="../assets/icons.css" />
```

## 基础写法

```html
<span class="rd-iconfont iconfont-fd common-tools-Search icon-16" aria-hidden="true"></span>
<span class="rd-iconfont iconfont-plm plm_tools_NewPart icon-16" aria-hidden="true"></span>
```

- `iconfont-fd`：通用工具、通用状态、树图标。
- `iconfont`：IDS 图标，项目、计划、任务类业务对象。
- `iconfont-plm`：PLM 对象、空间、部件、文档、基线等业务对象。
- `rd-iconfont`：尺寸和对齐 helper，只负责布局，不定义 glyph。

## 常用映射

| 语义 | 字体 | 类名 |
| --- | --- | --- |
| 新增 | `iconfont-fd` | `xinzeng` |
| 编辑 | `iconfont-fd` | `common-tools-Edit` |
| 删除 | `iconfont-fd` | `common-tools-Delete` |
| 搜索 | `iconfont-fd` | `common-tools-Search` |
| 上传 | `iconfont-fd` | `common-tools-Upload` |
| 下载 | `iconfont-fd` | `common-tools-Download` |
| 导入 | `iconfont-fd` | `common-tools-Import` |
| 导出 | `iconfont-fd` | `common-tools-Export` |
| 更多 | `iconfont-fd` | `common-tools-more` |
| 刷新 | `iconfont-fd` | `common-tools-Refresh` |
| 保存 | `iconfont-fd` | `common_tools_Save` |
| 日期 | `iconfont-fd` | `common_tools_Calendar` |
| 时间 | `iconfont-fd` | `common_tools_Time` |
| 关闭 | `iconfont-fd` | `common_others_Close` |
| 勾选 | `iconfont-fd` | `common_others_Check-Check` |
| 下拉箭头 | `iconfont-fd` | `common_others_Down` |
| 成功 | `iconfont-fd` | `common_others_Check-Circle-Fill` |
| 信息 | `iconfont-fd` | `common_others_Info-Circle` |
| 警告 | `iconfont-fd` | `common_others_Warning-Circle` |
| 展开 | `iconfont-fd` | `common_tree_down1` |
| 收起 | `iconfont-fd` | `common_tree_right1` |
| 文件夹 | `iconfont-fd` | `common_tree_Folder1` |
| 文件夹打开 | `iconfont-fd` | `common_tree_Folder-Open` |
| 文档 | `iconfont-fd` | `common_tree_Document1` |
| 部件 | `iconfont-plm` | `plm_tools_Part` |
| 新建部件 | `iconfont-plm` | `plm_tools_NewPart` |
| 新建文档 | `iconfont-plm` | `plm_tools_NewDoc` |
| CAD 文档 | `iconfont-plm` | `plm_tools_CADDocument` |
| 基线 | `iconfont-plm` | `plm_tools_Baseline` |
| 版本 | `iconfont-plm` | `plm_tools_Version` |

## 使用规则

- 优先使用上表映射；上表没有时，先在 `component-library-single.html` 的图标库页面里确认图标含义。
- 页面或组件需要新增图标时，必须先在 `cases/component-library-single.html` 的图标库页面中查找语义匹配项，确认字体族和 class 后再落代码。
- 若图标库中没有匹配项，需要在实现说明中标明未找到原因；不得用临时 SVG、字符图形或外部图标库代替。
- 通用 UI 控件优先使用 `iconfont-fd`；PLM 业务对象图标使用 `iconfont-plm`。
- 部件类业务对象图标统一使用 `iconfont-plm / plm_tools_Part`，推荐写法为 `<span class="rd-iconfont iconfont-plm plm_tools_Part icon-16 part-icon" aria-hidden="true"></span>`；不得用手写 SVG、齿轮图标或通用工具图标替代。
- Checkbox checked 态使用 `iconfont-fd / common_others_Check-Check`，不得用 CSS border / background 自绘对号。
- Select、Dropdown、输入框后缀、按钮、分页尺寸选择、表格操作列中的下拉箭头统一使用 `iconfont-fd / common_others_Down`，容器尺寸 `12px`，颜色继承 `currentColor`。
- 按钮图标尺寸按用途区分：带文字按钮左侧图标默认 `icon-14`，纯图标按钮内主图标默认 `icon-16`，按钮内下拉箭头始终为 `icon-12`；输入框后缀和树节点默认 `icon-16`，业务对象图标可按场景使用 `icon-16` 或 `icon-20`。
- 不要把图标容器尺寸误当作 glyph 尺寸；容器对齐由 `.rd-iconfont` 控制，glyph 来自 iconfont 类。
- 原 `cases/index.html` shell 中已有的历史内联 SVG 不作为新增组件规范；新增内容一律使用本文件。
