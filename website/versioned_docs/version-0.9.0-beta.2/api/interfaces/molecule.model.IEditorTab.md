---
id: 'molecule.model.IEditorTab'
title: 'Interface: IEditorTab<T>'
sidebar_label: 'IEditorTab'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IEditorTab

## Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `T`  | `BuiltInEditorTabDataType` |

## Hierarchy

-   [`ITabProps`](molecule.component.ITabProps)<`T`\>

    ↳ **`IEditorTab`**

## Properties

### active

• `Optional` **active**: `boolean`

**`deprecated`** Tab doesn't need this property, but the type extends from tab need

#### Inherited from

[ITabProps](molecule.component.ITabProps).[active](molecule.component.ITabProps#active)

#### Defined in

[src/components/tabs/tab.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L38)

---

### breadcrumb

• `Optional` **breadcrumb**: [`IBreadcrumbItemProps`](molecule.component.IBreadcrumbItemProps)[]

#### Defined in

[src/model/workbench/editor.ts:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L41)

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

#### Inherited from

[ITabProps](molecule.component.ITabProps).[data](molecule.component.ITabProps#data)

#### Defined in

[src/components/tabs/tab.tsx:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L53)

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

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Inherited from

[ITabProps](molecule.component.ITabProps).[status](molecule.component.ITabProps#status)

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L48)
