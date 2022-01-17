---
id: 'molecule.IExtensionService'
title: 'Interface: IExtensionService'
sidebar_label: 'IExtensionService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IExtensionService

## Implemented by

-   [`ExtensionService`](../classes/molecule.ExtensionService)

## Methods

### activate

▸ **activate**(`extensions`): `void`

Activate the extensions (includes `contributes` type).
Notice: this method only do the `activate` work, not store the data into ExtensionService,
which means you can't get the Extension by the `ExtensionService. getExtension` method.

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `extensions` | [`IExtension`](molecule.model.IExtension)[] |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L38)

---

### add

▸ **add**(`extensions`): `null` \| [`IExtension`](molecule.model.IExtension)[]

Add the extensions to ExtensionService, but no activated.

#### Parameters

| Name         | Type                                        | Description                  |
| :----------- | :------------------------------------------ | :--------------------------- |
| `extensions` | [`IExtension`](molecule.model.IExtension)[] | The Extensions wait to added |

#### Returns

`null` \| [`IExtension`](molecule.model.IExtension)[]

Unload Extensions

#### Defined in

[src/services/extensionService.ts:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L31)

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

#### Defined in

[src/services/extensionService.ts:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L53)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L57)

---

### executeCommand

▸ **executeCommand**(`id`, ...`args`): `void`

Execute the registered command

#### Parameters

| Name      | Type     | Description    |
| :-------- | :------- | :------------- |
| `id`      | `string` | The command ID |
| `...args` | `any`    |                |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:88](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L88)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](molecule.model.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](molecule.model.IExtension)[]

Extension Array

#### Defined in

[src/services/extensionService.ts:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L48)

---

### getExtension

▸ **getExtension**(`id`): `undefined` \| [`IExtension`](molecule.model.IExtension)

Get an extension by the ID

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IExtension`](molecule.model.IExtension)

#### Defined in

[src/services/extensionService.ts:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L43)

---

### inactive

▸ **inactive**(`predicate`): `void`

Disable to activate some extensions, make use of it to filter some
extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.

**`example`**

```ts
molecule.extension.inactive((extension: IExtension) => {
    if (/^(idA|idB)$/.test(extension.id)) {
        return true;
    }
});
<MoleculeProvider extensions={[]}></MoleculeProvider>;
```

#### Parameters

| Name        | Type                                                                  | Description            |
| :---------- | :-------------------------------------------------------------------- | :--------------------- |
| `predicate` | (`extension`: [`IExtension`](molecule.model.IExtension)) => `boolean` | The predicate function |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:72](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L72)

---

### isLoaded

▸ **isLoaded**(): `boolean`

whether the extensions are loaded

#### Returns

`boolean`

#### Defined in

[src/services/extensionService.ts:102](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L102)

---

### load

▸ **load**(`extensions`): `void`

Load the extension instances and then activate them.
Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
someone extension, there can use the `ExtensionService.inactive` method, also if you want
remove a extension, you can use the `ExtensionService.dispose` method.

#### Parameters

| Name         | Type                                        | Description         |
| :----------- | :------------------------------------------ | :------------------ |
| `extensions` | [`IExtension`](molecule.model.IExtension)[] | The extension array |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L25)

---

### registerAction

▸ **registerAction**(`actionClass`): `void`

Register a new action which is extends the Action2,

**`example`**

```ts
const action = class Action extends Action2 {};
registerAction(action);
```

#### Parameters

| Name          | Type                                                  |
| :------------ | :---------------------------------------------------- |
| `actionClass` | () => [`Action2`](../classes/molecule.monaco.Action2) |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:82](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L82)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:92](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L92)

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

#### Defined in

[src/services/extensionService.ts:106](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L106)

---

### splitLanguagesExts

▸ **splitLanguagesExts**(`extensions`): [[`IExtension`](molecule.model.IExtension)[], [`IExtension`](molecule.model.IExtension)[]]

Distinguish the language extensions from extensions

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `extensions` | [`IExtension`](molecule.model.IExtension)[] |

#### Returns

[[`IExtension`](molecule.model.IExtension)[], [`IExtension`](molecule.model.IExtension)[]]

#### Defined in

[src/services/extensionService.ts:98](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/extensionService.ts#L98)
