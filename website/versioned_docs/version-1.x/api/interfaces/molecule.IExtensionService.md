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

[services/extensionService.ts:40](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L40)

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

[services/extensionService.ts:33](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L33)

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

[services/extensionService.ts:55](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L55)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Defined in

[services/extensionService.ts:59](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L59)

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

[services/extensionService.ts:92](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L92)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](molecule.model.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](molecule.model.IExtension)[]

Extension Array

#### Defined in

[services/extensionService.ts:50](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L50)

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

[services/extensionService.ts:45](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L45)

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

[services/extensionService.ts:74](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L74)

---

### isLoaded

▸ **isLoaded**(): `boolean`

whether the extensions are loaded

#### Returns

`boolean`

#### Defined in

[services/extensionService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L106)

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

[services/extensionService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L27)

---

### registerAction

▸ **registerAction**(`actionClass`): `IDisposable`

Register a new action which is extends the Action2, and return a disposable instance.

**`example`**

```ts
const action = class Action extends Action2 {};
const disposableAction = registerAction(action);
disposableAction.dispose(); // Dispose the action
```

#### Parameters

| Name          | Type                                                  | Description      |
| :------------ | :---------------------------------------------------- | :--------------- |
| `actionClass` | () => [`Action2`](../classes/molecule.monaco.Action2) | The action class |

#### Returns

`IDisposable`

IDisposable The Disposable instance

#### Defined in

[services/extensionService.ts:86](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L86)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Defined in

[services/extensionService.ts:96](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L96)

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

[services/extensionService.ts:110](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L110)

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

[services/extensionService.ts:102](https://github.com/DTStack/molecule/blob/927b7d39/src/services/extensionService.ts#L102)
