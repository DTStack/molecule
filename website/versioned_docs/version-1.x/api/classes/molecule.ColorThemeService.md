---
id: 'molecule.ColorThemeService'
title: 'Class: ColorThemeService'
sidebar_label: 'ColorThemeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ColorThemeService

## Hierarchy

-   [`GlobalEvent`](molecule.event.GlobalEvent)

    ↳ **`ColorThemeService`**

## Implements

-   [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

## Constructors

### constructor

• **new ColorThemeService**()

#### Overrides

[GlobalEvent](molecule.event.GlobalEvent).[constructor](molecule.event.GlobalEvent#constructor)

#### Defined in

[services/theme/colorThemeService.ts:101](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L101)

## Properties

### colorTheme

• `Private` **colorTheme**: [`IColorTheme`](../interfaces/molecule.model.IColorTheme) = `BuiltInColorTheme`

#### Defined in

[services/theme/colorThemeService.ts:99](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L99)

---

### colorThemes

• `Private` **colorThemes**: [`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

#### Defined in

[services/theme/colorThemeService.ts:98](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L98)

## Methods

### addThemes

▸ **addThemes**(`themes`): `void`

Add themes into `colorThemes`

This will update the duplicated themes found in `colorThemes`

#### Parameters

| Name     | Type                                                                                                                     |
| :------- | :----------------------------------------------------------------------------------------------------------------------- |
| `themes` | [`IColorTheme`](../interfaces/molecule.model.IColorTheme) \| [`IColorTheme`](../interfaces/molecule.model.IColorTheme)[] |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[addThemes](../interfaces/molecule.IColorThemeService#addthemes)

#### Defined in

[services/theme/colorThemeService.ts:108](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L108)

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

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

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

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](../interfaces/molecule.model.IColorTheme)

Get the current Color Theme

#### Returns

[`IColorTheme`](../interfaces/molecule.model.IColorTheme)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getColorTheme](../interfaces/molecule.IColorThemeService#getcolortheme)

#### Defined in

[services/theme/colorThemeService.ts:149](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L149)

---

### getColorThemeMode

▸ **getColorThemeMode**(): [`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)

Get the mode('dark' or 'light') of the current Color Theme

#### Returns

[`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getColorThemeMode](../interfaces/molecule.IColorThemeService#getcolorthememode)

#### Defined in

[services/theme/colorThemeService.ts:191](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L191)

---

### getThemeById

▸ **getThemeById**(`id`): `undefined` \| [`IColorTheme`](../interfaces/molecule.model.IColorTheme)

Get specific theme via id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IColorTheme`](../interfaces/molecule.model.IColorTheme)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getThemeById](../interfaces/molecule.IColorThemeService#getthemebyid)

#### Defined in

[services/theme/colorThemeService.ts:144](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L144)

---

### getThemes

▸ **getThemes**(): [`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getThemes](../interfaces/molecule.IColorThemeService#getthemes)

#### Defined in

[services/theme/colorThemeService.ts:178](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L178)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the theme changed event

#### Parameters

| Name       | Type                                                                                                                                                                                                                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`prev`: [`IColorTheme`](../interfaces/molecule.model.IColorTheme), `next`: [`IColorTheme`](../interfaces/molecule.model.IColorTheme), `themeMode`: [`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)) => `void` |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[onChange](../interfaces/molecule.IColorThemeService#onchange)

#### Defined in

[services/theme/colorThemeService.ts:214](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L214)

---

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reload](../interfaces/molecule.IColorThemeService#reload)

#### Defined in

[services/theme/colorThemeService.ts:182](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L182)

---

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reset](../interfaces/molecule.IColorThemeService#reset)

#### Defined in

[services/theme/colorThemeService.ts:186](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L186)

---

### setTheme

▸ **setTheme**(`id`): `void`

Set the current Color Theme via id,
Please ensure the theme could be found in `colorThemes`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[setTheme](../interfaces/molecule.IColorThemeService#settheme)

#### Defined in

[services/theme/colorThemeService.ts:153](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L153)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[subscribe](molecule.event.GlobalEvent#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[unsubscribe](molecule.event.GlobalEvent#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### updateTheme

▸ **updateTheme**(`theme`): `void`

Update specific theme,

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `theme` | [`IColorTheme`](../interfaces/molecule.model.IColorTheme) |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[updateTheme](../interfaces/molecule.IColorThemeService#updatetheme)

#### Defined in

[services/theme/colorThemeService.ts:123](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L123)
