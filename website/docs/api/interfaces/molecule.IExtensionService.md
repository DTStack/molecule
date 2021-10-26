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

| Name         | Type                                  |
| :----------- | :------------------------------------ |
| `extensions` | [`IExtension`](molecule.IExtension)[] |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:36](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L36)

---

### add

▸ **add**(`extensions`): `null` \| [`IExtension`](molecule.IExtension)[]

Add the extensions to ExtensionService, but no activated.

#### Parameters

| Name         | Type                                  | Description                  |
| :----------- | :------------------------------------ | :--------------------------- |
| `extensions` | [`IExtension`](molecule.IExtension)[] | The Extensions wait to added |

#### Returns

`null` \| [`IExtension`](molecule.IExtension)[]

Unload Extensions

#### Defined in

[src/services/extensionService.ts:29](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L29)

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

#### Defined in

[src/services/extensionService.ts:51](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L51)

---

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:55](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L55)

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

[src/services/extensionService.ts:86](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L86)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](molecule.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](molecule.IExtension)[]

Extension Array

#### Defined in

[src/services/extensionService.ts:46](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L46)

---

### getExtension

▸ **getExtension**(`id`): `undefined` \| [`IExtension`](molecule.IExtension)

Get an extension by the ID

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IExtension`](molecule.IExtension)

#### Defined in

[src/services/extensionService.ts:41](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L41)

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

| Name        | Type                                                            | Description            |
| :---------- | :-------------------------------------------------------------- | :--------------------- |
| `predicate` | (`extension`: [`IExtension`](molecule.IExtension)) => `boolean` | The predicate function |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:70](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L70)

---

### load

▸ **load**(`extensions`): `any`

Load the extension instances and then activate them.
Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
someone extension, there can use the `ExtensionService.inactive` method, also if you want
remove a extension, you can use the `ExtensionService.dispose` method.

#### Parameters

| Name         | Type                                  | Description         |
| :----------- | :------------------------------------ | :------------------ |
| `extensions` | [`IExtension`](molecule.IExtension)[] | The extension array |

#### Returns

`any`

#### Defined in

[src/services/extensionService.ts:23](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L23)

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

| Name          | Type            |
| :------------ | :-------------- |
| `actionClass` | () => `Action2` |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:80](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L80)

---

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:90](https://github.com/DTStack/molecule/blob/3c64296/src/services/extensionService.ts#L90)
