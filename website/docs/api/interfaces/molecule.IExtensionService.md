---
id: 'molecule.IExtensionService'
title: 'Interface: IExtensionService'
sidebar_label: 'IExtensionService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IExtensionService

## Methods

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

[src/services/extensionService.ts:53](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L53)

---

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](molecule.IExtension)[]

Get All loaded extensions

#### Returns

[`IExtension`](molecule.IExtension)[]

Extension Array

#### Defined in

[src/services/extensionService.ts:29](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L29)

---

### getExtension

▸ **getExtension**(`name`): `undefined` \| [`IExtension`](molecule.IExtension)

Get an extension by name

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `name` | `string` | The extension name |

#### Returns

`undefined` \| [`IExtension`](molecule.IExtension)

#### Defined in

[src/services/extensionService.ts:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L24)

---

### load

▸ **load**(`extensions`): `any`

Load the extension objects and then execute them

#### Parameters

| Name         | Type                                  | Description         |
| :----------- | :------------------------------------ | :------------------ |
| `extensions` | [`IExtension`](molecule.IExtension)[] | The extension array |

#### Returns

`any`

#### Defined in

[src/services/extensionService.ts:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L19)

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

[src/services/extensionService.ts:47](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L47)

---

### remove

▸ **remove**(`extension`): `any`

Remove the specific extension

#### Parameters

| Name        | Type                                | Description                    |
| :---------- | :---------------------------------- | :----------------------------- |
| `extension` | [`IExtension`](molecule.IExtension) | The extension name is required |

#### Returns

`any`

#### Defined in

[src/services/extensionService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L34)

---

### reset

▸ **reset**(): `void`

Reset the extensions data

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/extensionService.ts#L38)
