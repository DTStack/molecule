---
id: 'molecule.IExtension'
title: 'Interface: IExtension'
sidebar_label: 'IExtension'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IExtension

The interface of extension,
there need every extension to implement this interface

## Properties

### categories

• `Optional` **categories**: `IExtensionType`[]

The categories of extension

#### Defined in

[src/model/extension.ts:60](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L60)

---

### contributes

• `Optional` **contributes**: `IContribute`

The main file path of extension
Extension system will load the extension by this file

#### Defined in

[src/model/extension.ts:69](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L69)

---

### description

• `Optional` **description**: `string`

The description of extension

#### Defined in

[src/model/extension.ts:81](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L81)

---

### disable

• `Optional` **disable**: `boolean`

Whether disable current extension, the extension default status is enable

#### Defined in

[src/model/extension.ts:93](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L93)

---

### displayName

• `Optional` **displayName**: `string`

The display name of extension

#### Defined in

[src/model/extension.ts:52](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L52)

---

### extensionKind

• `Optional` **extensionKind**: `IExtensionType`[]

The kind of extension

#### Defined in

[src/model/extension.ts:64](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L64)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The Icon of extension

#### Defined in

[src/model/extension.ts:77](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L77)

---

### id

• **id**: `string`

The ID of extension required

#### Defined in

[src/model/extension.ts:44](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L44)

---

### main

• `Optional` **main**: `string`

The entry of extension

#### Defined in

[src/model/extension.ts:73](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L73)

---

### name

• **name**: `string`

The name of extension

#### Defined in

[src/model/extension.ts:48](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L48)

---

### path

• `Optional` **path**: `string`

The path of extension

#### Defined in

[src/model/extension.ts:89](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L89)

---

### publisher

• `Optional` **publisher**: `string`

The publisher of extension

#### Defined in

[src/model/extension.ts:85](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L85)

---

### version

• `Optional` **version**: `string`

The version of extension

#### Defined in

[src/model/extension.ts:56](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L56)

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

[src/model/extension.ts:100](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L100)

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

[src/model/extension.ts:106](https://github.com/DTStack/molecule/blob/b675cb9/src/model/extension.ts#L106)
