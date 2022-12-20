---
id: 'molecule.component.IModalProps'
title: 'Interface: IModalProps'
sidebar_label: 'IModalProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IModalProps

## Hierarchy

-   `IDialogPropTypes`

    ↳ **`IModalProps`**

## Properties

### cancelButtonProps

• `Optional` **cancelButtonProps**: [`IButtonProps`](molecule.component.IButtonProps)

#### Defined in

[components/dialog/modal.tsx:22](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L22)

---

### cancelText

• `Optional` **cancelText**: `ReactNode`

#### Defined in

[components/dialog/modal.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L19)

---

### centered

• `Optional` **centered**: `boolean`

#### Defined in

[components/dialog/modal.tsx:18](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L18)

---

### okButtonProps

• `Optional` **okButtonProps**: [`IButtonProps`](molecule.component.IButtonProps)

#### Defined in

[components/dialog/modal.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L21)

---

### okCancel

• `Optional` **okCancel**: `boolean`

#### Defined in

[components/dialog/modal.tsx:23](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L23)

---

### okText

• `Optional` **okText**: `ReactNode`

#### Defined in

[components/dialog/modal.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L20)

## Methods

### onCancel

▸ `Optional` **onCancel**(`e`): `void`

#### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `e`  | `SyntheticEvent`<`Element`, `Event`\> |

#### Returns

`void`

#### Defined in

[components/dialog/modal.tsx:17](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L17)

---

### onOk

▸ `Optional` **onOk**(`e`): `void`

#### Parameters

| Name | Type                                       |
| :--- | :----------------------------------------- |
| `e`  | `MouseEvent`<`HTMLElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[components/dialog/modal.tsx:16](https://github.com/DTStack/molecule/blob/927b7d39/src/components/dialog/modal.tsx#L16)
