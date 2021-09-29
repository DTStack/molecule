---
id: 'molecule.SettingsService'
title: 'Class: SettingsService'
sidebar_label: 'SettingsService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).SettingsService

## Hierarchy

-   [`GlobalEvent`](molecule.event.GlobalEvent)

    ↳ **`SettingsService`**

## Implements

-   [`ISettingsService`](../interfaces/molecule.ISettingsService)

## Constructors

### constructor

• **new SettingsService**()

#### Overrides

[GlobalEvent](molecule.event.GlobalEvent).[constructor](molecule.event.GlobalEvent#constructor)

#### Defined in

[src/services/settingsService.ts:97](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L97)

## Properties

### colorThemeService

• `Private` `Readonly` **colorThemeService**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

#### Defined in

[src/services/settingsService.ts:94](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L94)

---

### editorService

• `Private` `Readonly` **editorService**: [`IEditorService`](../interfaces/molecule.IEditorService)

#### Defined in

[src/services/settingsService.ts:93](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L93)

---

### localeService

• `Private` `Readonly` **localeService**: [`ILocaleService`](../interfaces/molecule.i18n.ILocaleService)

#### Defined in

[src/services/settingsService.ts:95](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L95)

---

### settings

• `Protected` **settings**: [`ISettings`](../interfaces/molecule.ISettings)

#### Defined in

[src/services/settingsService.ts:92](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L92)

## Methods

### append

▸ **append**(`settings`): `void`

Append new Settings object
eg: ` append({ project: { name: 'example' } })`

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `settings` | [`ISettings`](../interfaces/molecule.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[append](../interfaces/molecule.ISettingsService#append)

#### Defined in

[src/services/settingsService.ts:129](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L129)

---

### applySettings

▸ **applySettings**(`nextSettings`): `void`

Apply the nextSettings configuration

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `nextSettings` | [`ISettings`](../interfaces/molecule.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[applySettings](../interfaces/molecule.ISettingsService#applysettings)

#### Defined in

[src/services/settingsService.ts:138](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L138)

---

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[emit](molecule.event.GlobalEvent#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### flatObject

▸ **flatObject**(`obj`): `object`

It converts an object to a flatted object,
eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `obj` | `object` |

#### Returns

`object`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[flatObject](../interfaces/molecule.ISettingsService#flatobject)

#### Defined in

[src/services/settingsService.ts:170](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L170)

---

### flatObject2JSONString

▸ **flatObject2JSONString**(`obj`): `string`

It converts an object to a flatted json string,
eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `obj` | `object` |

#### Returns

`string`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[flatObject2JSONString](../interfaces/molecule.ISettingsService#flatobject2jsonstring)

#### Defined in

[src/services/settingsService.ts:174](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L174)

---

### getBuiltInSettings

▸ `Private` **getBuiltInSettings**(): [`ISettings`](../interfaces/molecule.ISettings)

#### Returns

[`ISettings`](../interfaces/molecule.ISettings)

#### Defined in

[src/services/settingsService.ts:105](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L105)

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

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[getDefaultSettingsTab](../interfaces/molecule.ISettingsService#getdefaultsettingstab)

#### Defined in

[src/services/settingsService.ts:113](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L113)

---

### getSettings

▸ **getSettings**(): [`ISettings`](../interfaces/molecule.ISettings)

Get the settings object

#### Returns

[`ISettings`](../interfaces/molecule.ISettings)

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[getSettings](../interfaces/molecule.ISettingsService#getsettings)

#### Defined in

[src/services/settingsService.ts:133](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L133)

---

### normalizeFlatObject

▸ **normalizeFlatObject**<`T`\>(`jsonStr`): `T`

It converts a flatted JSON string to a normal object,
eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | [`ISettings`](../interfaces/molecule.ISettings) |

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `jsonStr` | `string` |

#### Returns

`T`

T

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[normalizeFlatObject](../interfaces/molecule.ISettingsService#normalizeflatobject)

#### Defined in

[src/services/settingsService.ts:159](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L159)

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

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[onChangeSettings](../interfaces/molecule.ISettingsService#onchangesettings)

#### Defined in

[src/services/settingsService.ts:117](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L117)

---

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[openSettingsInEditor](../interfaces/molecule.ISettingsService#opensettingsineditor)

#### Defined in

[src/services/settingsService.ts:152](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L152)

---

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[subscribe](molecule.event.GlobalEvent#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toJSONString

▸ **toJSONString**(`obj`, `space?`): `string`

It converts an object to JSON string

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `obj`   | `object` | `undefined`   |
| `space` | `number` | `4`           |

#### Returns

`string`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[toJSONString](../interfaces/molecule.ISettingsService#tojsonstring)

#### Defined in

[src/services/settingsService.ts:178](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L178)

---

### update

▸ **update**(`settings`): `void`

To update a settings object, it's going to overwrite
a settings item if it existed.

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `settings` | [`ISettings`](../interfaces/molecule.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[update](../interfaces/molecule.ISettingsService#update)

#### Defined in

[src/services/settingsService.ts:123](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/settingsService.ts#L123)
