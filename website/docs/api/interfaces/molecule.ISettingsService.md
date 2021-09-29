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

[src/services/settingsService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L34)

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

[src/services/settingsService.ts:76](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L76)

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

[src/services/settingsService.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L50)

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

[src/services/settingsService.ts:56](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L56)

---

### getDefaultSettingsTab

▸ **getDefaultSettingsTab**(): `Object`

Get the default Settings Tab object

#### Returns

`Object`

| Name            | Type     |
| :-------------- | :------- |
| `data`          | `Object` |
| `data.language` | `string` |
| `data.value`    | `string` |
| `id`            | `string` |
| `name`          | `string` |

#### Defined in

[src/services/settingsService.ts:87](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L87)

---

### getSettings

▸ **getSettings**(): [`ISettings`](molecule.ISettings)

Get the settings object

#### Returns

[`ISettings`](molecule.ISettings)

#### Defined in

[src/services/settingsService.ts:44](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L44)

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

[src/services/settingsService.ts:63](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L63)

---

### onChangeSettings

▸ **onChangeSettings**(`callback`): `void`

Listen to the Settings change event.

#### Parameters

| Name       | Type                                       |
| :--------- | :----------------------------------------- |
| `callback` | (`tab`: `IEditorTab`<`Object`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:81](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L81)

---

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:71](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L71)

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

[src/services/settingsService.ts:67](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L67)

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

[src/services/settingsService.ts:40](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L40)
