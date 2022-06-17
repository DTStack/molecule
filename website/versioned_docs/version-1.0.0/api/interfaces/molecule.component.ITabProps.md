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

[components/tabs/tab.tsx:40](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L40)

---

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Defined in

[components/tabs/tab.tsx:45](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L45)

---

### data

• `Optional` **data**: `T`

#### Defined in

[components/tabs/tab.tsx:57](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L57)

---

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Defined in

[components/tabs/tab.tsx:49](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L49)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[components/tabs/tab.tsx:51](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L51)

---

### id

• **id**: `UniqueId`

#### Defined in

[components/tabs/tab.tsx:52](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L52)

---

### name

• `Optional` **name**: `string`

#### Defined in

[components/tabs/tab.tsx:53](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L53)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `P`, `tab?`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>, `group?`: [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>) => `ReactNode`

#### Defined in

[components/tabs/tab.tsx:54](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L54)

---

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Defined in

[components/tabs/tab.tsx:50](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/tab.tsx#L50)
