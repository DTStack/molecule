---
id: 'molecule.ExtensionService'
title: 'Class: ExtensionService'
sidebar_label: 'ExtensionService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ExtensionService

## Implements

-   [`IExtensionService`](../interfaces/molecule.IExtensionService)

## Constructors

### constructor

• **new ExtensionService**(`extensions?`)

#### Parameters

| Name         | Type                                                | Default value |
| :----------- | :-------------------------------------------------- | :------------ |
| `extensions` | [`IExtension`](../interfaces/molecule.IExtension)[] | `[]`          |

#### Defined in

[src/services/extensionService.ts:100](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L100)

## Properties

### \_inactive

• `Private` **\_inactive**: `undefined` \| `Function`

#### Defined in

[src/services/extensionService.ts:98](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L98)

---

### colorThemeService

• `Private` `Readonly` **colorThemeService**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

#### Defined in

[src/services/extensionService.ts:96](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L96)

---

### extensions

• `Private` **extensions**: [`IExtension`](../interfaces/molecule.IExtension)[] = `[]`

#### Defined in

[src/services/extensionService.ts:95](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L95)

---

### monacoService

• `Private` `Readonly` **monacoService**: `IMonacoService`

#### Defined in

[src/services/extensionService.ts:97](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L97)

## Methods

### activate

▸ **activate**(`extensions`): `void`

Activate the extensions (includes `contributes` type).
Notice: this method only do the `activate` work, not store the data into ExtensionService,
which means you can't get the Extension by the `ExtensionService. getExtension` method.

#### Parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.IExtension)[] |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[activate](../interfaces/molecule.IExtensionService#activate)

#### Defined in

[src/services/extensionService.ts:172](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L172)

---

### add

▸ **add**(`extensions`): `null` \| [`IExtension`](../interfaces/molecule.IExtension)[]

Add the extensions to ExtensionService, but no activated.

#### Parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.IExtension)[] |

#### Returns

`null` \| [`IExtension`](../interfaces/molecule.IExtension)[]

Unload Extensions

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[add](../interfaces/molecule.IExtensionService#add)

#### Defined in

[src/services/extensionService.ts:117](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L117)

---

### dispose

▸ **dispose**(`extensionId`): `void`

Dispose the specific extension, and remove it from the ExtensionService

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `extensionId` | `string` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[dispose](../interfaces/molecule.IExtensionService#dispose)

#### Defined in

[src/services/extensionService.ts:190](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L190)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[disposeAll](../interfaces/molecule.IExtensionService#disposeall)

#### Defined in

[src/services/extensionService.ts:200](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L200)

---

### executeCommand

▸ **executeCommand**(`id`, ...`args`): `void`

Execute the registered command

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `id`      | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[executeCommand](../interfaces/molecule.IExtensionService#executecommand)

#### Defined in

[src/services/extensionService.ts:168](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L168)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](../interfaces/molecule.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](../interfaces/molecule.IExtension)[]

Extension Array

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[getAllExtensions](../interfaces/molecule.IExtensionService#getallextensions)

#### Defined in

[src/services/extensionService.ts:113](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L113)

---

### getExtension

▸ **getExtension**(`id`): `undefined` \| [`IExtension`](../interfaces/molecule.IExtension)

Get an extension by the ID

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IExtension`](../interfaces/molecule.IExtension)

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[getExtension](../interfaces/molecule.IExtensionService#getextension)

#### Defined in

[src/services/extensionService.ts:105](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L105)

---

### inactive

▸ **inactive**(`predicate`): `void`

Disable to activate some extensions, make use of it to filter some
extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.

#### Parameters

| Name        | Type                                                                          |
| :---------- | :---------------------------------------------------------------------------- |
| `predicate` | (`extension`: [`IExtension`](../interfaces/molecule.IExtension)) => `boolean` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[inactive](../interfaces/molecule.IExtensionService#inactive)

#### Defined in

[src/services/extensionService.ts:207](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L207)

---

### isInactive

▸ `Private` **isInactive**(`extension`): `boolean`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `extension` | [`IExtension`](../interfaces/molecule.IExtension) |

#### Returns

`boolean`

#### Defined in

[src/services/extensionService.ts:211](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L211)

---

### load

▸ **load**(`extensions`): `void`

Load the extension instances and then activate them.
Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
someone extension, there can use the `ExtensionService.inactive` method, also if you want
remove a extension, you can use the `ExtensionService.dispose` method.

#### Parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.IExtension)[] |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[load](../interfaces/molecule.IExtensionService#load)

#### Defined in

[src/services/extensionService.ts:137](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L137)

---

### loadContributes

▸ **loadContributes**(`contributes`): `void`

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `contributes` | `IContribute` |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:150](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L150)

---

### registerAction

▸ **registerAction**(`actionClass`): `void`

Register a new action which is extends the Action2,

#### Parameters

| Name          | Type            |
| :------------ | :-------------- |
| `actionClass` | () => `Action2` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[registerAction](../interfaces/molecule.IExtensionService#registeraction)

#### Defined in

[src/services/extensionService.ts:164](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L164)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[reset](../interfaces/molecule.IExtensionService#reset)

#### Defined in

[src/services/extensionService.ts:109](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L109)
