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

[src/services/extensionService.ts:122](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L122)

## Properties

### \_inactive

• `Private` **\_inactive**: `undefined` \| `Function`

#### Defined in

[src/services/extensionService.ts:114](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L114)

---

### \_isLoaded

• `Private` **\_isLoaded**: `boolean` = `false`

TODO: This property is used for marking the extensions were loaded
we are going to refactor this logic after redesign the Molecule lifecycle.

#### Defined in

[src/services/extensionService.ts:120](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L120)

---

### colorThemeService

• `Private` `Readonly` **colorThemeService**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

#### Defined in

[src/services/extensionService.ts:112](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L112)

---

### extensions

• `Private` **extensions**: [`IExtension`](../interfaces/molecule.model.IExtension)[] = `[]`

#### Defined in

[src/services/extensionService.ts:111](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L111)

---

### localeService

• `Private` `Readonly` **localeService**: [`ILocaleService`](../interfaces/molecule.ILocaleService)

#### Defined in

[src/services/extensionService.ts:115](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L115)

---

### monacoService

• `Private` `Readonly` **monacoService**: `IMonacoService`

#### Defined in

[src/services/extensionService.ts:113](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L113)

## Methods

### activate

▸ **activate**(`extensions`): `void`

Activate the extensions (includes `contributes` type).
Notice: this method only do the `activate` work, not store the data into ExtensionService,
which means you can't get the Extension by the `ExtensionService. getExtension` method.

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.model.IExtension)[] |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[activate](../interfaces/molecule.IExtensionService#activate)

#### Defined in

[src/services/extensionService.ts:207](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L207)

---

### add

▸ **add**(`extensions`): `null` \| [`IExtension`](../interfaces/molecule.model.IExtension)[]

Add the extensions to ExtensionService, but no activated.

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.model.IExtension)[] |

#### Returns

`null` \| [`IExtension`](../interfaces/molecule.model.IExtension)[]

Unload Extensions

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[add](../interfaces/molecule.IExtensionService#add)

#### Defined in

[src/services/extensionService.ts:148](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L148)

---

### dispose

▸ **dispose**(`extensionId`): `void`

Dispose the specific extension, and remove it from the ExtensionService

#### Parameters

| Name          | Type       |
| :------------ | :--------- |
| `extensionId` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[dispose](../interfaces/molecule.IExtensionService#dispose)

#### Defined in

[src/services/extensionService.ts:225](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L225)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[disposeAll](../interfaces/molecule.IExtensionService#disposeall)

#### Defined in

[src/services/extensionService.ts:235](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L235)

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

[src/services/extensionService.ts:203](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L203)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](../interfaces/molecule.model.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](../interfaces/molecule.model.IExtension)[]

Extension Array

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[getAllExtensions](../interfaces/molecule.IExtensionService#getallextensions)

#### Defined in

[src/services/extensionService.ts:144](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L144)

---

### getExtension

▸ **getExtension**(`id`): `undefined` \| [`IExtension`](../interfaces/molecule.model.IExtension)

Get an extension by the ID

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IExtension`](../interfaces/molecule.model.IExtension)

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[getExtension](../interfaces/molecule.IExtensionService#getextension)

#### Defined in

[src/services/extensionService.ts:136](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L136)

---

### inactive

▸ **inactive**(`predicate`): `void`

Disable to activate some extensions, make use of it to filter some
extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.

#### Parameters

| Name        | Type                                                                                |
| :---------- | :---------------------------------------------------------------------------------- |
| `predicate` | (`extension`: [`IExtension`](../interfaces/molecule.model.IExtension)) => `boolean` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[inactive](../interfaces/molecule.IExtensionService#inactive)

#### Defined in

[src/services/extensionService.ts:242](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L242)

---

### isInactive

▸ `Private` **isInactive**(`extension`): `boolean`

#### Parameters

| Name        | Type                                                    |
| :---------- | :------------------------------------------------------ |
| `extension` | [`IExtension`](../interfaces/molecule.model.IExtension) |

#### Returns

`boolean`

#### Defined in

[src/services/extensionService.ts:246](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L246)

---

### isLoaded

▸ **isLoaded**(): `boolean`

whether the extensions are loaded

#### Returns

`boolean`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[isLoaded](../interfaces/molecule.IExtensionService#isloaded)

#### Defined in

[src/services/extensionService.ts:132](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L132)

---

### load

▸ **load**(`extensions`): `void`

Load the extension instances and then activate them.
Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
someone extension, there can use the `ExtensionService.inactive` method, also if you want
remove a extension, you can use the `ExtensionService.dispose` method.

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.model.IExtension)[] |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[load](../interfaces/molecule.IExtensionService#load)

#### Defined in

[src/services/extensionService.ts:168](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L168)

---

### loadContributes

▸ **loadContributes**(`contributes`): `void`

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `contributes` | [`IContribute`](../interfaces/molecule.model.IContribute) |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:181](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L181)

---

### registerAction

▸ **registerAction**(`actionClass`): `void`

Register a new action which is extends the Action2,

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `actionClass` | () => [`Action2`](molecule.monaco.Action2) |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[registerAction](../interfaces/molecule.IExtensionService#registeraction)

#### Defined in

[src/services/extensionService.ts:199](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L199)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[reset](../interfaces/molecule.IExtensionService#reset)

#### Defined in

[src/services/extensionService.ts:140](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L140)

---

### setLoaded

▸ **setLoaded**(`flag?`): `void`

Set the extensions are loaded

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `flag?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[setLoaded](../interfaces/molecule.IExtensionService#setloaded)

#### Defined in

[src/services/extensionService.ts:128](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L128)

---

### splitLanguagesExts

▸ **splitLanguagesExts**(`extensions`): [[`IExtension`](../interfaces/molecule.model.IExtension)[], [`IExtension`](../interfaces/molecule.model.IExtension)[]]

Distinguish the language extensions from extensions

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `extensions` | [`IExtension`](../interfaces/molecule.model.IExtension)[] |

#### Returns

[[`IExtension`](../interfaces/molecule.model.IExtension)[], [`IExtension`](../interfaces/molecule.model.IExtension)[]]

#### Implementation of

[IExtensionService](../interfaces/molecule.IExtensionService).[splitLanguagesExts](../interfaces/molecule.IExtensionService#splitlanguagesexts)

#### Defined in

[src/services/extensionService.ts:253](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L253)
