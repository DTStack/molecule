---
id: 'molecule.component.ITabProps'
title: 'Interface: ITabProps<T, P>'
sidebar_label: 'ITabProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITabProps

The type definition for the Tab data construct

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |
| `P`  | `any` |

## Hierarchy

-   **`ITabProps`**

    ↳ [`IEditorTab`](molecule.model.IEditorTab)

    ↳ [`IPanelItem`](molecule.model.IPanelItem)

## Properties

### active

• `Optional` **active**: `boolean`

**`deprecated`** Tab doesn't need this property, but the type extends from tab need

#### Defined in

[src/components/tabs/tab.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L38)

---

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Defined in

[src/components/tabs/tab.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L43)

---

### data

• `Optional` **data**: `T`

#### Defined in

[src/components/tabs/tab.tsx:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L53)

---

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L47)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L49)

---

### id

• **id**: `UniqueId`

#### Defined in

[src/components/tabs/tab.tsx:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L50)

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/components/tabs/tab.tsx:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L51)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `P`) => `ReactNode`

#### Defined in

[src/components/tabs/tab.tsx:52](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L52)

---

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L48)
