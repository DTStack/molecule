---
id: 'molecule.model.IExplorerPanelItem'
title: 'Interface: IExplorerPanelItem'
sidebar_label: 'IExplorerPanelItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IExplorerPanelItem

## Indexable

▪ [key: `string`]: `any`

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[model/workbench/explorer/explorer.tsx:29](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L29)

---

### hidden

• `Optional` **hidden**: `boolean`

whether hidden in explorer

#### Defined in

[model/workbench/explorer/explorer.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L35)

---

### id

• **id**: `UniqueId`

It must be unique in the Explorer Panel Data

#### Defined in

[model/workbench/explorer/explorer.tsx:18](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L18)

---

### name

• **name**: `string`

**`requires`** true
explorer panel's title

#### Defined in

[model/workbench/explorer/explorer.tsx:23](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L23)

---

### renderPanel

• `Optional` **renderPanel**: [`RenderFunctionProps`](../namespaces/molecule.model#renderfunctionprops)

#### Defined in

[model/workbench/explorer/explorer.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L31)

---

### sortIndex

• `Optional` **sortIndex**: `number`

specify panel order
the bigger the number is ranked previous

#### Defined in

[model/workbench/explorer/explorer.tsx:28](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L28)

---

### toolbar

• `Optional` **toolbar**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Defined in

[model/workbench/explorer/explorer.tsx:30](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L30)
