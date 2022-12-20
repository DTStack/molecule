---
id: 'molecule.LocaleService'
title: 'Class: LocaleService'
sidebar_label: 'LocaleService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).LocaleService

## Hierarchy

-   [`Component`](molecule.react.Component)

    ↳ **`LocaleService`**

## Implements

-   [`ILocaleService`](../interfaces/molecule.ILocaleService)

## Constructors

### constructor

• **new LocaleService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[i18n/localeService.ts:83](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L83)

## Properties

### \_current

• `Private` **\_current**: `undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

#### Defined in

[i18n/localeService.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L81)

---

### \_locales

• `Private` **\_locales**: `Map`<`string`, [`ILocale`](../interfaces/molecule.ILocale)\>

#### Defined in

[i18n/localeService.ts:80](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L80)

---

### state

• **state**: `Object` = `{}`

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[i18n/localeService.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L77)

---

### LOCALIZE_REPLACED_WORD

▪ `Static` `Private` **LOCALIZE_REPLACED_WORD**: `string` = `'${i}'`

#### Defined in

[i18n/localeService.ts:78](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L78)

## Methods

### addLocales

▸ **addLocales**(`locales`): `void`

Add multiple local languages

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `locales` | [`ILocale`](../interfaces/molecule.ILocale)[] |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[addLocales](../interfaces/molecule.ILocaleService#addlocales)

#### Defined in

[i18n/localeService.ts:164](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L164)

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

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[getCurrentLocale](../interfaces/molecule.ILocaleService#getcurrentlocale)

#### Defined in

[i18n/localeService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L106)

---

### getLocale

▸ **getLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

Get a locale language by the id

#### Parameters

| Name | Type               |
| :--- | :----------------- |
| `id` | `null` \| `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[getLocale](../interfaces/molecule.ILocaleService#getlocale)

#### Defined in

[i18n/localeService.ts:110](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L110)

---

### getLocales

▸ **getLocales**(): [`ILocale`](../interfaces/molecule.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](../interfaces/molecule.ILocale)[]

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[getLocales](../interfaces/molecule.ILocaleService#getlocales)

#### Defined in

[i18n/localeService.ts:93](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L93)

---

### getState

▸ **getState**(): `any`

Get the Component state

#### Returns

`any`

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### initialize

▸ **initialize**(`locales`, `localeId`): `void`

Initialize the locales data, and the current locale language,

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `locales`  | [`ILocale`](../interfaces/molecule.ILocale)[] |
| `localeId` | `string`                                      |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[initialize](../interfaces/molecule.ILocaleService#initialize)

#### Defined in

[i18n/localeService.ts:97](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L97)

---

### localize

▸ **localize**(`sourceKey`, `defaultValue?`, ...`args`): `string`

Returns the international text located by source key，or the default value if it is not find
For examples:

```ts
localize('id', 'default value'); // hello ${i}, ${i}
localize('id', 'default value', 'world'); // hello world, ${i}
localize('id', 'default value', 'world', 'molecule'); // hello world, molecule
```

#### Parameters

| Name           | Type       | Default value |
| :------------- | :--------- | :------------ |
| `sourceKey`    | `string`   | `undefined`   |
| `defaultValue` | `string`   | `''`          |
| `...args`      | `string`[] | `undefined`   |

#### Returns

`string`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[localize](../interfaces/molecule.ILocaleService#localize)

#### Defined in

[i18n/localeService.ts:180](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L180)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the local language changed event

#### Parameters

| Name       | Type                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prev`: [`ILocale`](../interfaces/molecule.ILocale), `next`: [`ILocale`](../interfaces/molecule.ILocale)) => `void` |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[onChange](../interfaces/molecule.ILocaleService#onchange)

#### Defined in

[i18n/localeService.ts:176](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L176)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `listener` | (`prevState`: `any`, `nextState`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### removeLocale

▸ **removeLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

Remove a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[removeLocale](../interfaces/molecule.ILocaleService#removelocale)

#### Defined in

[i18n/localeService.ts:115](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L115)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(`listener?`): `void`

Remove the Component update event listening, default is remove all,
also you can remove one by pass the listener

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `listener?` | `Function` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type  |
| :----------- | :---- |
| `nextState?` | `any` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[reset](../interfaces/molecule.ILocaleService#reset)

#### Defined in

[i18n/localeService.ts:87](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L87)

---

### setCurrentLocale

▸ **setCurrentLocale**(`id`): `boolean`

Set the current locale language by id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[ILocaleService](../interfaces/molecule.ILocaleService).[setCurrentLocale](../interfaces/molecule.ILocaleService#setcurrentlocale)

#### Defined in

[i18n/localeService.ts:133](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L133)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                               | Description                |
| :---------- | :------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`any`\>                                  | update target state values |
| `callback?` | (`prevState`: `any`, `nextState`: `any`) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

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

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### transformLocaleData

▸ `Private` **transformLocaleData**(`locale`): [`ILocale`](../interfaces/molecule.ILocale)

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `locale` | [`ILocale`](../interfaces/molecule.ILocale) |

#### Returns

[`ILocale`](../interfaces/molecule.ILocale)

#### Defined in

[i18n/localeService.ts:145](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L145)

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

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
