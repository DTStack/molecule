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

[src/model/workbench/explorer/explorer.tsx:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L28)

---

### hidden

• `Optional` **hidden**: `boolean`

whether hidden in explorer

#### Defined in

[src/model/workbench/explorer/explorer.tsx:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L34)

---

### id

• **id**: `UniqueId`

It must be unique in the Explorer Panel Data

#### Defined in

[src/model/workbench/explorer/explorer.tsx:17](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L17)

---

### name

• **name**: `string`

**`requires`** true
explorer panel's title

#### Defined in

[src/model/workbench/explorer/explorer.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L22)

---

### renderPanel

• `Optional` **renderPanel**: [`RenderFunctionProps`](../namespaces/molecule.model#renderfunctionprops)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L30)

---

### sortIndex

• `Optional` **sortIndex**: `number`

specify panel order
the bigger the number is ranked previous

#### Defined in

[src/model/workbench/explorer/explorer.tsx:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L27)

---

### toolbar

• `Optional` **toolbar**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Defined in

[src/model/workbench/explorer/explorer.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L29)
