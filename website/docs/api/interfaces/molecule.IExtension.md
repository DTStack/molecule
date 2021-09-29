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

[src/model/extension.ts:55](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L55)

---

### contributes

• `Optional` **contributes**: `IContribute`

The main file path of extension
Extension system will load the extension by this file

#### Defined in

[src/model/extension.ts:64](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L64)

---

### description

• `Optional` **description**: `string`

The description of extension

#### Defined in

[src/model/extension.ts:76](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L76)

---

### disable

• `Optional` **disable**: `boolean`

Whether disable current extension, the extension default status is enable

#### Defined in

[src/model/extension.ts:88](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L88)

---

### displayName

• `Optional` **displayName**: `string`

The display name of extension

#### Defined in

[src/model/extension.ts:47](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L47)

---

### extensionKind

• `Optional` **extensionKind**: `IExtensionType`[]

The kind of extension

#### Defined in

[src/model/extension.ts:59](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L59)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The Icon of extension

#### Defined in

[src/model/extension.ts:72](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L72)

---

### main

• `Optional` **main**: `string`

The entry of extension

#### Defined in

[src/model/extension.ts:68](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L68)

---

### name

• `Optional` **name**: `string`

The name of extension

#### Defined in

[src/model/extension.ts:43](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L43)

---

### path

• `Optional` **path**: `string`

The path of extension

#### Defined in

[src/model/extension.ts:84](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L84)

---

### publisher

• `Optional` **publisher**: `string`

The publisher of extension

#### Defined in

[src/model/extension.ts:80](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L80)

---

### version

• `Optional` **version**: `string`

The version of extension

#### Defined in

[src/model/extension.ts:51](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L51)

## Methods

### activate

▸ **activate**(`extensionCtx`): `void`

Activate current extension

#### Parameters

| Name           | Type                                              |
| :------------- | :------------------------------------------------ |
| `extensionCtx` | [`IExtensionService`](molecule.IExtensionService) |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:92](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/extension.ts#L92)
