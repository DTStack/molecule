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

[src/services/settingsService.ts:97](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L97)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/settingsService.ts:95](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L95)

---

### colorThemeService

• `Private` `Readonly` **colorThemeService**: [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

#### Defined in

[src/services/settingsService.ts:93](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L93)

---

### editorService

• `Private` `Readonly` **editorService**: [`IEditorService`](../interfaces/molecule.IEditorService)

#### Defined in

[src/services/settingsService.ts:92](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L92)

---

### localeService

• `Private` `Readonly` **localeService**: [`ILocaleService`](../interfaces/molecule.ILocaleService)

#### Defined in

[src/services/settingsService.ts:94](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L94)

---

### settings

• `Protected` **settings**: [`ISettings`](../interfaces/molecule.model.ISettings)

#### Defined in

[src/services/settingsService.ts:91](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L91)

## Methods

### append

▸ **append**(`settings`): `void`

Append new Settings object
eg: ` append({ project: { name: 'example' } })`

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `settings` | [`ISettings`](../interfaces/molecule.model.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[append](../interfaces/molecule.ISettingsService#append)

#### Defined in

[src/services/settingsService.ts:130](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L130)

---

### applySettings

▸ **applySettings**(`nextSettings`): `void`

Apply the nextSettings configuration

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `nextSettings` | [`ISettings`](../interfaces/molecule.model.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[applySettings](../interfaces/molecule.ISettingsService#applysettings)

#### Defined in

[src/services/settingsService.ts:139](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L139)

---

### count

▸ **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[count](molecule.event.GlobalEvent#count)

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

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

[src/services/settingsService.ts:174](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L174)

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

[src/services/settingsService.ts:178](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L178)

---

### getBuiltInSettings

▸ `Private` **getBuiltInSettings**(): [`ISettings`](../interfaces/molecule.model.ISettings)

#### Returns

[`ISettings`](../interfaces/molecule.model.ISettings)

#### Defined in

[src/services/settingsService.ts:106](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L106)

---

### getDefaultSettingsTab

▸ **getDefaultSettingsTab**(): [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`Object`\>

Get the default Settings Tab object

#### Returns

[`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`Object`\>

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[getDefaultSettingsTab](../interfaces/molecule.ISettingsService#getdefaultsettingstab)

#### Defined in

[src/services/settingsService.ts:113](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L113)

---

### getSettings

▸ **getSettings**(): [`ISettings`](../interfaces/molecule.model.ISettings)

Get the settings object

#### Returns

[`ISettings`](../interfaces/molecule.model.ISettings)

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[getSettings](../interfaces/molecule.ISettingsService#getsettings)

#### Defined in

[src/services/settingsService.ts:134](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L134)

---

### normalizeFlatObject

▸ **normalizeFlatObject**<`T`\>(`jsonStr`): `T`

It converts a flatted JSON string to a normal object,
eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.

#### Type parameters

| Name | Type                                                  |
| :--- | :---------------------------------------------------- |
| `T`  | [`ISettings`](../interfaces/molecule.model.ISettings) |

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

[src/services/settingsService.ts:163](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L163)

---

### onChangeSettings

▸ **onChangeSettings**(`callback`): `void`

Listen to the Settings change event.

#### Parameters

| Name       | Type                                                                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`Object`\>\>) => `void` |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[onChangeSettings](../interfaces/molecule.ISettingsService#onchangesettings)

#### Defined in

[src/services/settingsService.ts:118](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L118)

---

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[openSettingsInEditor](../interfaces/molecule.ISettingsService#opensettingsineditor)

#### Defined in

[src/services/settingsService.ts:153](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L153)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

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

[src/services/settingsService.ts:182](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L182)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[unsubscribe](molecule.event.GlobalEvent#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`settings`): `void`

To update a settings object, it's going to overwrite
a settings item if it existed.

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `settings` | [`ISettings`](../interfaces/molecule.model.ISettings) |

#### Returns

`void`

#### Implementation of

[ISettingsService](../interfaces/molecule.ISettingsService).[update](../interfaces/molecule.ISettingsService#update)

#### Defined in

[src/services/settingsService.ts:124](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/settingsService.ts#L124)
