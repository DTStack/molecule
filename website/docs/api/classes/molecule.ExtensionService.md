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

• **new ExtensionService**()

#### Defined in

[src/services/extensionService.ts:102](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L102)

## Properties

### \_inactive

• `Private` **\_inactive**: `undefined` \| `Function`

#### Defined in

[src/services/extensionService.ts:99](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L99)

---

### colorThemeService

• `Private` `Readonly` **colorThemeService**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

#### Defined in

[src/services/extensionService.ts:97](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L97)

---

### extensions

• `Private` **extensions**: [`IExtension`](../interfaces/molecule.IExtension)[] = `[]`

#### Defined in

[src/services/extensionService.ts:96](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L96)

---

### localeService

• `Private` `Readonly` **localeService**: [`ILocaleService`](../interfaces/molecule.i18n.ILocaleService)

#### Defined in

[src/services/extensionService.ts:100](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L100)

---

### monacoService

• `Private` `Readonly` **monacoService**: `IMonacoService`

#### Defined in

[src/services/extensionService.ts:98](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L98)

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

[src/services/extensionService.ts:179](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L179)

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

[src/services/extensionService.ts:120](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L120)

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

[src/services/extensionService.ts:197](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L197)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[disposeAll](../interfaces/molecule.IExtensionService#disposeall)

#### Defined in

[src/services/extensionService.ts:207](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L207)

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

[src/services/extensionService.ts:175](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L175)

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

[src/services/extensionService.ts:116](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L116)

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

[src/services/extensionService.ts:108](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L108)

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

[src/services/extensionService.ts:214](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L214)

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

[src/services/extensionService.ts:218](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L218)

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

[src/services/extensionService.ts:140](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L140)

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

[src/services/extensionService.ts:153](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L153)

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

[src/services/extensionService.ts:171](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L171)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[reset](../interfaces/molecule.IExtensionService#reset)

#### Defined in

[src/services/extensionService.ts:112](https://github.com/DTStack/molecule/blob/b675cb9/src/services/extensionService.ts#L112)
