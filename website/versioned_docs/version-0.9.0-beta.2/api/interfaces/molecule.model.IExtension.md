---
id: 'molecule.model.IExtension'
title: 'Interface: IExtension'
sidebar_label: 'IExtension'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IExtension

The interface of extension,
there need every extension to implement this interface

## Properties

### categories

• `Optional` **categories**: [`IExtensionType`](../enums/molecule.model.IExtensionType)[]

The categories of extension

#### Defined in

[src/model/extension.ts:61](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L61)

---

### contributes

• `Optional` **contributes**: [`IContribute`](molecule.model.IContribute)

The main file path of extension
Extension system will load the extension by this file

#### Defined in

[src/model/extension.ts:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L70)

---

### description

• `Optional` **description**: `string`

The description of extension

#### Defined in

[src/model/extension.ts:82](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L82)

---

### disable

• `Optional` **disable**: `boolean`

Whether disable current extension, the extension default status is enable

#### Defined in

[src/model/extension.ts:94](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L94)

---

### displayName

• `Optional` **displayName**: `string`

The display name of extension

#### Defined in

[src/model/extension.ts:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L53)

---

### extensionKind

• `Optional` **extensionKind**: [`IExtensionType`](../enums/molecule.model.IExtensionType)[]

The kind of extension

#### Defined in

[src/model/extension.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L65)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The Icon of extension

#### Defined in

[src/model/extension.ts:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L78)

---

### id

• **id**: `UniqueId`

The ID of extension required

#### Defined in

[src/model/extension.ts:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L45)

---

### main

• `Optional` **main**: `string`

The entry of extension

#### Defined in

[src/model/extension.ts:74](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L74)

---

### name

• **name**: `string`

The name of extension

#### Defined in

[src/model/extension.ts:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L49)

---

### path

• `Optional` **path**: `string`

The path of extension

#### Defined in

[src/model/extension.ts:90](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L90)

---

### publisher

• `Optional` **publisher**: `string`

The publisher of extension

#### Defined in

[src/model/extension.ts:86](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L86)

---

### version

• `Optional` **version**: `string`

The version of extension

#### Defined in

[src/model/extension.ts:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L57)

## Methods

### activate

▸ **activate**(`extensionCtx`): `void`

Do something you want when the Extension is activating.
The ExtensionService will call the `activate` method after
added the Extension instance.

#### Parameters

| Name           | Type                                              | Description                       |
| :------------- | :------------------------------------------------ | :-------------------------------- |
| `extensionCtx` | [`IExtensionService`](molecule.IExtensionService) | The Context of Extension instance |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:101](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L101)

---

### dispose

▸ **dispose**(`extensionCtx`): `void`

Do something when the Extension disposing.
For example, you can recover the UI state, or remove the Objects in memory.

#### Parameters

| Name           | Type                                              | Description                       |
| :------------- | :------------------------------------------------ | :-------------------------------- |
| `extensionCtx` | [`IExtensionService`](molecule.IExtensionService) | The Context of Extension instance |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:107](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/extension.ts#L107)
