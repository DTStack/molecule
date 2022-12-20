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

[components/tabs/tab.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L39)

---

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Defined in

[components/tabs/tab.tsx:44](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L44)

---

### data

• `Optional` **data**: `T`

#### Defined in

[components/tabs/tab.tsx:56](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L56)

---

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Defined in

[components/tabs/tab.tsx:48](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L48)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[components/tabs/tab.tsx:50](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L50)

---

### id

• **id**: `UniqueId`

#### Defined in

[components/tabs/tab.tsx:51](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L51)

---

### name

• `Optional` **name**: `string`

#### Defined in

[components/tabs/tab.tsx:52](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L52)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `P`, `tab?`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>, `group?`: [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>) => `ReactNode`

#### Defined in

[components/tabs/tab.tsx:53](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L53)

---

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Defined in

[components/tabs/tab.tsx:49](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/tab.tsx#L49)
