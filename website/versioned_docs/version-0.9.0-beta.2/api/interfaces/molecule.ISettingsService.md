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

| Name       | Type                                    | Description |
| :--------- | :-------------------------------------- | :---------- |
| `settings` | [`ISettings`](molecule.model.ISettings) | object      |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L33)

---

### applySettings

▸ **applySettings**(`nextSettings`): `void`

Apply the nextSettings configuration

#### Parameters

| Name           | Type                                    |
| :------------- | :-------------------------------------- |
| `nextSettings` | [`ISettings`](molecule.model.ISettings) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L75)

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

[src/services/settingsService.ts:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L49)

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

[src/services/settingsService.ts:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L55)

---

### getDefaultSettingsTab

▸ **getDefaultSettingsTab**(): [`IEditorTab`](molecule.model.IEditorTab)<`Object`\>

Get the default Settings Tab object

#### Returns

[`IEditorTab`](molecule.model.IEditorTab)<`Object`\>

#### Defined in

[src/services/settingsService.ts:86](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L86)

---

### getSettings

▸ **getSettings**(): [`ISettings`](molecule.model.ISettings)

Get the settings object

#### Returns

[`ISettings`](molecule.model.ISettings)

#### Defined in

[src/services/settingsService.ts:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L43)

---

### normalizeFlatObject

▸ **normalizeFlatObject**<`T`\>(`jsonStr`): `T`

It converts a flatted JSON string to a normal object,
eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.

#### Type parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `T`  | [`ISettings`](molecule.model.ISettings) |

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `jsonStr` | `string` | string      |

#### Returns

`T`

T

#### Defined in

[src/services/settingsService.ts:62](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L62)

---

### onChangeSettings

▸ **onChangeSettings**(`callback`): `void`

Listen to the Settings change event.

#### Parameters

| Name       | Type                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`tab`: [`IEditorTab`](molecule.model.IEditorTab)<[`IEditorTab`](molecule.model.IEditorTab)<`Object`\>\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:80](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L80)

---

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L70)

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

[src/services/settingsService.ts:66](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L66)

---

### update

▸ **update**(`settings`): `void`

To update a settings object, it's going to overwrite
a settings item if it existed.

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `settings` | [`ISettings`](molecule.model.ISettings) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L39)
