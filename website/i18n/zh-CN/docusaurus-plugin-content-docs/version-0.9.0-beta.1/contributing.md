---
title: 贡献指南
sidebar_label: 贡献指南
---

## Development

```bash
git clone git@github.com:DTStack/molecule.git
```

首先 Clone 源码到本地
**开发模式**

```bash
yarn # install dependencies

yarn dev # 启动开发模式
```

Molecule 中的组件是基于 Storybook 开发并管理的，预览地址：`http://localhost:6006/`默认地址浏览。

**构建 & 预览**

```bash
yarn build
yarn web # 预览打包后的 Web
```

当前我们默认将 Molecule 以 `ES6` 模块的方式构建到 **`esm`** 目录。另外，
这里除了 Storybook 提供的组件预览模式以外，我们同时内置了一个使用 ESM 模块的 `Web` 预览模式。

## Git Work Flow

Refer to [Branch-based Workflow](https://guides.github.com/introduction/flow/)

## Naming rules

Unify the Service methods basic prefix naming:

-   add, prefix for Add sth.
-   remove, prefix for Remove sth.
-   update, prefix for Update sth.
-   get, prefix for Get sth.
-   set, prefix for Set sth.
-   create, perfix for create sth.
-   on, prefix for listen to the event.
-   find, prefix for Find sth.
-   move, prefix for Move sth.
-   append, prefix for Append sth.
-   toggle, prefix for Toggle sth.

### Reference

-   [Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
-   [VS Code Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
-   <https://code.visualstudio.com/api>
