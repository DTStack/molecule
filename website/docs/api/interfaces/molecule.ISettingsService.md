---
id: 'molecule.ISettingsService'
title: 'Interface: ISettingsService'
sidebar_label: 'ISettingsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ISettingsService

## Implemented by

-   [`SettingsService`](../classes/molecule.SettingsService)

## Methods

### append

▸ **append**(`settings`): `void`

Append new Settings object
eg: ` append({ project: { name: 'example' } })`

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `settings` | [`ISettings`](molecule.ISettings) | object      |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:31](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L31)

---

### applySettings

▸ **applySettings**(`nextSettings`): `void`

Apply the nextSettings configuration

#### Parameters

| Name           | Type                              |
| :------------- | :-------------------------------- |
| `nextSettings` | [`ISettings`](molecule.ISettings) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:73](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L73)

---

### flatObject

▸ **flatObject**(`obj`): `object`

It converts an object to a flatted object,
eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `obj` | `object` | object      |

#### Returns

`object`

#### Defined in

[src/services/settingsService.ts:47](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L47)

---

### flatObject2JSONString

▸ **flatObject2JSONString**(`obj`): `string`

It converts an object to a flatted json string,
eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `obj` | `object` | object      |

#### Returns

`string`

#### Defined in

[src/services/settingsService.ts:53](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L53)

---

### getDefaultSettingsTab

▸ **getDefaultSettingsTab**(): `IEditorTab`<`Object`\>

Get the default Settings Tab object

#### Returns

`IEditorTab`<`Object`\>

#### Defined in

[src/services/settingsService.ts:84](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L84)

---

### getSettings

▸ **getSettings**(): [`ISettings`](molecule.ISettings)

Get the settings object

#### Returns

[`ISettings`](molecule.ISettings)

#### Defined in

[src/services/settingsService.ts:41](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L41)

---

### normalizeFlatObject

▸ **normalizeFlatObject**<`T`\>(`jsonStr`): `T`

It converts a flatted JSON string to a normal object,
eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.

#### Type parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `T`  | [`ISettings`](molecule.ISettings) |

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `jsonStr` | `string` | string      |

#### Returns

`T`

T

#### Defined in

[src/services/settingsService.ts:60](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L60)

---

### onChangeSettings

▸ **onChangeSettings**(`callback`): `void`

Listen to the Settings change event.

#### Parameters

| Name       | Type                                                      |
| :--------- | :-------------------------------------------------------- |
| `callback` | (`tab`: `IEditorTab`<`IEditorTab`<`Object`\>\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:78](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L78)

---

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:68](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L68)

---

### toJSONString

▸ **toJSONString**(`obj`, `space?`): `string`

It converts an object to JSON string

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `obj`    | `object` |
| `space?` | `number` |

#### Returns

`string`

#### Defined in

[src/services/settingsService.ts:64](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L64)

---

### update

▸ **update**(`settings`): `void`

To update a settings object, it's going to overwrite
a settings item if it existed.

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `settings` | [`ISettings`](molecule.ISettings) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/services/settingsService.ts#L37)
