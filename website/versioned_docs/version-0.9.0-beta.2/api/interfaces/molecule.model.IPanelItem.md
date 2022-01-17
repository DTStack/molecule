---
id: 'molecule.model.IPanelItem'
title: 'Interface: IPanelItem<T>'
sidebar_label: 'IPanelItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IPanelItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`ITabProps`](molecule.component.ITabProps)<`T`\>

    ↳ **`IPanelItem`**

    ↳↳ [`IOutput`](molecule.model.IOutput)

## Properties

### active

• `Optional` **active**: `boolean`

**`deprecated`** Tab doesn't need this property, but the type extends from tab need

#### Inherited from

[ITabProps](molecule.component.ITabProps).[active](molecule.component.ITabProps#active)

#### Defined in

[src/components/tabs/tab.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L38)

---

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Inherited from

[ITabProps](molecule.component.ITabProps).[closable](molecule.component.ITabProps#closable)

#### Defined in

[src/components/tabs/tab.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L43)

---

### data

• `Optional` **data**: `T`

#### Overrides

[ITabProps](molecule.component.ITabProps).[data](molecule.component.ITabProps#data)

#### Defined in

[src/model/workbench/panel.tsx:10](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L10)

---

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Inherited from

[ITabProps](molecule.component.ITabProps).[editable](molecule.component.ITabProps#editable)

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L47)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[icon](molecule.component.ITabProps#icon)

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L49)

---

### id

• **id**: `UniqueId`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[id](molecule.component.ITabProps#id)

#### Defined in

[src/components/tabs/tab.tsx:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L50)

---

### name

• `Optional` **name**: `string`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[name](molecule.component.ITabProps#name)

#### Defined in

[src/components/tabs/tab.tsx:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L51)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `any`) => `ReactNode`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[renderPane](molecule.component.ITabProps#renderpane)

#### Defined in

[src/components/tabs/tab.tsx:52](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L52)

---

### sortIndex

• `Optional` **sortIndex**: `number`

The sort of panel item

#### Defined in

[src/model/workbench/panel.tsx:14](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L14)

---

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[status](molecule.component.ITabProps#status)

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L48)

---

### title

• `Optional` **title**: `string`

The same as HTMLElement title attribute

#### Defined in

[src/model/workbench/panel.tsx:8](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L8)

---

### toolbox

• `Optional` **toolbox**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Defined in

[src/model/workbench/panel.tsx:9](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L9)
