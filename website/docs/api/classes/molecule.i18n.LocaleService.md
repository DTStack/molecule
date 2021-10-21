---
id: 'molecule.i18n.LocaleService'
title: 'Class: LocaleService'
sidebar_label: 'LocaleService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[i18n](../namespaces/molecule.i18n).LocaleService

## Hierarchy

-   [`Component`](molecule.react.Component)

    ↳ **`LocaleService`**

## Implements

-   [`ILocaleService`](../interfaces/molecule.i18n.ILocaleService)

## Constructors

### constructor

• **new LocaleService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/i18n/localeService.ts:94](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L94)

## Properties

### \_current

• `Private` **\_current**: `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:92](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L92)

---

### \_locales

• `Private` **\_locales**: `Map`<`string`, [`ILocale`](../interfaces/molecule.i18n.ILocale)\>

#### Defined in

[src/i18n/localeService.ts:91](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L91)

---

### state

• **state**: `Object` = `{}`

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/i18n/localeService.ts:87](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L87)

---

### LOCALIZE_REPLACED_WORD

▪ `Static` `Private` **LOCALIZE_REPLACED_WORD**: `string` = `'${i}'`

#### Defined in

[src/i18n/localeService.ts:89](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L89)

---

### STORE_KEY

▪ `Static` `Private` **STORE_KEY**: `string`

#### Defined in

[src/i18n/localeService.ts:88](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L88)

## Methods

### addLocales

▸ **addLocales**(`locales`): `void`

Add multiple local languages

#### Parameters

| Name      | Type                                               |
| :-------- | :------------------------------------------------- |
| `locales` | [`ILocale`](../interfaces/molecule.i18n.ILocale)[] |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[addLocales](../interfaces/molecule.i18n.ILocaleService#addlocales)

#### Defined in

[src/i18n/localeService.ts:186](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L186)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

---

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getCurrentLocale](../interfaces/molecule.i18n.ILocaleService#getcurrentlocale)

#### Defined in

[src/i18n/localeService.ts:130](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L130)

---

### getDefaultLocale

▸ **getDefaultLocale**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get the default locale

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getDefaultLocale](../interfaces/molecule.i18n.ILocaleService#getdefaultlocale)

#### Defined in

[src/i18n/localeService.ts:105](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L105)

---

### getDefaultLocales

▸ **getDefaultLocales**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)[]

Get the default locales;

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)[]

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getDefaultLocales](../interfaces/molecule.i18n.ILocaleService#getdefaultlocales)

#### Defined in

[src/i18n/localeService.ts:109](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L109)

---

### getLocale

▸ **getLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getLocale](../interfaces/molecule.i18n.ILocaleService#getlocale)

#### Defined in

[src/i18n/localeService.ts:134](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L134)

---

### getLocales

▸ **getLocales**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)[]

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getLocales](../interfaces/molecule.i18n.ILocaleService#getlocales)

#### Defined in

[src/i18n/localeService.ts:113](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L113)

---

### getState

▸ **getState**(): `any`

Get the Component state

#### Returns

`any`

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### initialize

▸ **initialize**(`locales`, `localeId?`): `void`

Initialize the locales data, and the default current locale language,
this method first uses the cached `locale` in localStorage, then use the
localeId argument, if both the values are null, finally apply the built-in BuiltInZhCN

#### Parameters

| Name        | Type                                               |
| :---------- | :------------------------------------------------- |
| `locales`   | [`ILocale`](../interfaces/molecule.i18n.ILocale)[] |
| `localeId?` | `string`                                           |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[initialize](../interfaces/molecule.i18n.ILocaleService#initialize)

#### Defined in

[src/i18n/localeService.ts:117](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L117)

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

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[localize](../interfaces/molecule.i18n.ILocaleService#localize)

#### Defined in

[src/i18n/localeService.ts:202](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L202)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the local language changed event

#### Parameters

| Name       | Type                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prev`: [`ILocale`](../interfaces/molecule.i18n.ILocale), `next`: [`ILocale`](../interfaces/molecule.i18n.ILocale)) => `void` |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[onChange](../interfaces/molecule.i18n.ILocaleService#onchange)

#### Defined in

[src/i18n/localeService.ts:198](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L198)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `callback` | (`prevState`: `any`, `nextState`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

---

### removeLocale

▸ **removeLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Remove a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[removeLocale](../interfaces/molecule.i18n.ILocaleService#removelocale)

#### Defined in

[src/i18n/localeService.ts:138](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L138)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[reset](../interfaces/molecule.i18n.ILocaleService#reset)

#### Defined in

[src/i18n/localeService.ts:99](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L99)

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

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[setCurrentLocale](../interfaces/molecule.i18n.ILocaleService#setcurrentlocale)

#### Defined in

[src/i18n/localeService.ts:150](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L150)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L54)

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

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

---

### transformLocaleData

▸ `Private` **transformLocaleData**(`locale`): [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Parameters

| Name     | Type                                             |
| :------- | :----------------------------------------------- |
| `locale` | [`ILocale`](../interfaces/molecule.i18n.ILocale) |

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:162](https://github.com/DTStack/molecule/blob/3c64296/src/i18n/localeService.ts#L162)

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

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)
