# Tokens

本文件把调整后的 antd token 和睿知 shell 专属 token 整理为 CSS / JS 原型可直接使用的变量表。

可直接引用的 CSS token 文件：

```html
<link rel="stylesheet" href="../assets/tokens.css" />
```

`assets/tokens.css` 是从本地组件源码 token 抽出的 CSS 变量版本；后续批次组件继续复用它，不在组件 CSS 中重复定义全局 token。

## Token 来源

| Token 类型 | 来源 | 使用范围 |
| --- | --- | --- |
| 通用组件 token | 当前文件源码里的调整后 antd token / 默认组件逻辑 | Button、Input、Select、Form、Tree、Tag、Status、Tooltip、Popover 等 |
| 睿知表格 token | `index.html / 睿知v1.md` | Table、Editable Table、Batch Edit Table、Pagination |
| 睿知浮层容器 token | `index.html / 睿知v1.md` | Dialog、Drawer、Overlay 容器 |
| 睿知 shell token | `index.html / 睿知v1.md` | app shell、sidebar、header、workspace tabs |

## CSS 变量

```css
:root {
  /* shell */
  --rd-shell-width: 1440px;
  --rd-shell-height: 900px;
  --rd-sidebar-width: 216px;
  --rd-header-height: 48px;
  --rd-work-tabs-height: 40px;
  --rd-page-bg: #ebf0f4;
  --rd-panel-bg: #ffffff;

  /* brand and interaction */
  --ant-color-primary: #3182dd;
  --ant-color-primary-hover: #59A2EB;
  --ant-color-primary-active: #0082f9;
  --ant-color-info: #3182dd;

  /* text */
  --ant-color-text: rgba(0, 0, 0, 0.85);
  --ant-color-text-secondary: rgba(0, 20, 50, 0.65);
  --ant-color-text-tertiary: rgba(0, 0, 0, 0.45);
  --ant-color-text-placeholder: rgba(0, 0, 0, 0.25);

  /* border and fill */
  --ant-color-border: #d9d9d9;
  --ant-color-border-secondary: rgba(0, 20, 50, 0.09);
  --ant-color-bg-container: #ffffff;
  --ant-color-bg-layout: #ebf0f4;
  --ant-color-fill-alter: #eff4f9;
  --ant-control-item-bg-hover: #f5f5f5;
  --ant-control-item-bg-active: #e6f7ff;

  /* status */
  --ant-color-success: #52c41a;
  --ant-color-warning: #faad14;
  --ant-color-error: #cf1322;
  --ant-color-processing: #3182dd;

  /* typography */
  --ant-font-family: "Roboto", "Noto Sans SC", sans-serif;
  --rd-nav-font-family: "Arimo", "Noto Sans SC", sans-serif;
  --ant-font-size: 14px;
  --ant-font-size-lg: 16px;
  --ant-line-height: 22px;
  --ant-line-height-heading: 24px;
  --ant-font-weight-strong: 500;

  /* radius and shadow */
  --ant-border-radius: 2px;
  --ant-border-radius-sm: 2px;
  --ant-box-shadow-popover: 0 4px 12px rgba(0, 0, 0, 0.08);
  --ant-box-shadow-button: 0 2px 0 rgba(0, 0, 0, 0.04);

  /* control size */
  --ant-control-height: 28px;
  --ant-control-height-sm: 24px;
  --ant-control-height-lg: 32px;
  --ant-control-padding-horizontal: 8px;
  --ant-control-padding-horizontal-sm: 8px;

  /* spacing */
  --ant-margin-xxs: 4px;
  --ant-margin-xs: 8px;
  --ant-margin-sm: 12px;
  --ant-margin: 16px;
  --ant-margin-md: 24px;
  --ant-padding-xxs: 4px;
  --ant-padding-xs: 8px;
  --ant-padding-sm: 12px;
  --ant-padding: 16px;
  --ant-padding-md: 24px;

  /* button */
  --rd-button-default-color: var(--ant-color-text-secondary);
  --rd-button-default-hover-color: var(--ant-color-text-secondary);
  --rd-button-default-active-color: var(--ant-color-text-secondary);

  /* select and dropdown */
  --rd-select-option-color: var(--ant-color-text-secondary);
  --rd-select-option-selected-color: var(--ant-color-text-secondary);

  /* table by Reach */
  --rd-table-header-height: 36px;
  --rd-table-row-height: 36px;
  --rd-table-header-bg: #eff4f9;
  --rd-table-header-color: rgba(0, 0, 0, 0.85);
  --rd-table-body-color: rgba(0, 20, 50, 0.65);
  --rd-table-row-hover-bg: #f5f5f5;
  --rd-table-row-selected-bg: #e6f7ff;
  --rd-table-checkbox-col-width: 32px;
  --rd-table-index-col-width: 40px;
  --rd-checkbox-border-color: rgba(0, 0, 0, 0.45);

  /* tag and status */
  --rd-tag-height: 22px;
  --rd-tag-padding-inline: 8px;
  --rd-tag-border-radius: 2px;
  --rd-tag-font-size: 12px;
  --rd-tag-line-height: 20px;
  --rd-tag-info-color: #3182dd;
  --rd-tag-info-bg: #e6f4ff;
  --rd-tag-success-color: #36cfc9;
  --rd-tag-success-bg: #e6f9f3;
  --rd-tag-danger-color: #ff7a70;
  --rd-tag-danger-bg: #fff1f0;
  --rd-tag-warning-color: #fa8c16;
  --rd-tag-warning-bg: #fff1b8;
  --rd-tag-draft-color: #fa8c16;
  --rd-tag-draft-bg: #fff7e6;
  --rd-tag-default-color: var(--ant-color-text-secondary);
  --rd-tag-default-bg: #fafafa;

  /* dialog and drawer by Reach */
  --rd-overlay-bg: rgba(0, 0, 0, 0.35);
  --rd-dialog-header-height: 48px;
  --rd-dialog-footer-height: 48px;
  --rd-drawer-width: 700px;
}
```

## 通用组件尺寸

| 项 | 值 | 来源 |
| --- | --- | --- |
| 默认控件高度 | `28px` | 调整后 antd token |
| 小型单元格编辑控件 | `24px` | 睿知批量表格 |
| 大型控件高度 | `32px` | 调整后 antd token |
| 默认控件水平 padding | `8px` | 调整后 antd token |
| 默认圆角 | `2px` | 调整后 antd token |
| 默认文字 | `14px / 22px` | 调整后 antd token |
| 一级标题 | `16px / 24px / 700` | 睿知 shell 和面板标题 |

## 表格专属尺寸

表格不使用 antd 默认表格尺寸。

| 项 | 值 |
| --- | --- |
| 表头高度 | `36px` |
| 表格行高 | `36px` |
| 表头背景 | `#EFF4F9` |
| 表头文字 | `rgba(0, 0, 0, 0.85)` |
| 正文文字 | `rgba(0, 20, 50, 0.65)` |
| 行 hover | `#F5F5F5` |
| 行 selected | `#E6F7FF` |
| 复选框列 | `32px` |
| 编号列 | `40px` |
| 复选框未选中边线 | `rgba(0, 0, 0, 0.45)` |

## Tag / Status

标签和状态标签使用同一套基础尺寸，不在页面内单独定义高度、padding 或圆角。

| 项 | 值 |
| --- | --- |
| 标签高度 | `22px` |
| 左右 padding | `8px` |
| 圆角 | `2px` |
| 字号 / 行高 | `12px / 20px` |
| 信息 / 审批中 | `#3182DD` / `#E6F4FF` |
| 成功 / 已完成 | `#36CFC9` / `#E6F9F3` |
| 错误 / 驳回 | `#FF7A70` / `#FFF1F0` |
| 警告 | `#FA8C16` / `#FFF1B8` |
| 拟制中 | `#FA8C16` / `#FFF7E6` |

## 浮层容器

| 项 | 值 |
| --- | --- |
| 遮罩 | 黑色 `35%` |
| 弹窗 header | `48px` |
| 弹窗 footer | `48px` |
| 抽屉 header | `48px` |
| 抽屉 footer | `48px` |
| 关闭按钮右侧距离 | `16px` |
| footer 按钮间距 | `8px` |

## 状态颜色

| 状态 | token |
| --- | --- |
| hover | `--ant-control-item-bg-hover` |
| selected / active item | `--ant-control-item-bg-active` |
| focus border | `--ant-color-primary` |
| error | `--ant-color-error` |
| disabled text | `--ant-color-text-tertiary` |
| placeholder | `--ant-color-text-placeholder` |

状态说明：

- 表格 hover 和 selected 只表示真实交互态或明确业务态，不作为初始静态背景。
- 复选框勾选态使用主色，未勾选边线使用 45% 黑。
- 表格正文颜色使用次级文本色，不能在单个页面局部改回主文本色。

## 使用原则

- 通用组件优先使用 `--ant-*` token。
- 表格、批量编辑表格使用 `--rd-table-*` token。
- 弹窗和抽屉容器使用 `--rd-dialog-*`、`--rd-drawer-*`、`--rd-overlay-bg`。
- 页面 shell 使用 `--rd-*` shell token。
- 不在局部组件中新造与上表重复的颜色、行高、圆角、阴影。
