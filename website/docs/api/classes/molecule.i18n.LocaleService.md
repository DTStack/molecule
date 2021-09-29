---
id: "molecule.i18n.LocaleService"
title: "Class: LocaleService"
sidebar_label: "LocaleService"
custom_edit_url: null
---

[molecule](../namespaces/molecule).[i18n](../namespaces/molecule.i18n).LocaleService

## Hierarchy

- [`Component`](molecule.react.Component)

  ↳ **`LocaleService`**

## Implements

- [`ILocaleService`](../interfaces/molecule.i18n.ILocaleService)

## Constructors

### constructor

• **new LocaleService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/i18n/localeService.ts:94](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L94)

## Properties

### \_current

• `Private` **\_current**: `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:92](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L92)

___

### \_locales

• `Private` **\_locales**: `Map`<`string`, [`ILocale`](../interfaces/molecule.i18n.ILocale)\>

#### Defined in

[src/i18n/localeService.ts:91](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L91)

___

### state

• **state**: `Object` = `{}`

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/i18n/localeService.ts:87](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L87)

___

### LOCALIZE\_REPLACED\_WORD

▪ `Static` `Private` **LOCALIZE\_REPLACED\_WORD**: `string` = `'${i}'`

#### Defined in

[src/i18n/localeService.ts:89](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L89)

___

### STORE\_KEY

▪ `Static` `Private` **STORE\_KEY**: `string`

#### Defined in

[src/i18n/localeService.ts:88](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L88)

## Methods

### addLocales

▸ **addLocales**(`locales`): `void`

Add multiple local languages

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales` | [`ILocale`](../interfaces/molecule.i18n.ILocale)[] |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[addLocales](../interfaces/molecule.i18n.ILocaleService#addlocales)

#### Defined in

[src/i18n/localeService.ts:186](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L186)

___

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Event name |
| `...args` | `any` | Arguments |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

___

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

___

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getCurrentLocale](../interfaces/molecule.i18n.ILocaleService#getcurrentlocale)

#### Defined in

[src/i18n/localeService.ts:130](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L130)

___

### getDefaultLocale

▸ **getDefaultLocale**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get the default locale

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getDefaultLocale](../interfaces/molecule.i18n.ILocaleService#getdefaultlocale)

#### Defined in

[src/i18n/localeService.ts:105](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L105)

___

### getDefaultLocales

▸ **getDefaultLocales**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)[]

Get the default locales;

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)[]

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getDefaultLocales](../interfaces/molecule.i18n.ILocaleService#getdefaultlocales)

#### Defined in

[src/i18n/localeService.ts:109](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L109)

___

### getLocale

▸ **getLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Get a locale language by the id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getLocale](../interfaces/molecule.i18n.ILocaleService#getlocale)

#### Defined in

[src/i18n/localeService.ts:134](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L134)

___

### getLocales

▸ **getLocales**(): [`ILocale`](../interfaces/molecule.i18n.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)[]

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[getLocales](../interfaces/molecule.i18n.ILocaleService#getlocales)

#### Defined in

[src/i18n/localeService.ts:113](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L113)

___

### getState

▸ **getState**(): `any`

#### Returns

`any`

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

___

### initialize

▸ **initialize**(`locales`, `localeId?`): `void`

Initialize the locales data, and the default current locale language,
this method first uses the cached `locale` in localStorage, then use the
localeId argument, if both the values are null, finally apply the built-in BuiltInZhCN

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales` | [`ILocale`](../interfaces/molecule.i18n.ILocale)[] |
| `localeId?` | `string` |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[initialize](../interfaces/molecule.i18n.ILocaleService#initialize)

#### Defined in

[src/i18n/localeService.ts:117](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L117)

___

### localize

▸ **localize**(`sourceKey`, `defaultValue?`, ...`args`): `string`

Returns the international text located by source key，or the default value if it is not find
For examples:
```ts
localize('id','default value'); // hello ${i}, ${i}
localize('id','default value', 'world'); // hello world, ${i}
localize('id','default value', 'world', 'molecule'); // hello world, molecule
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sourceKey` | `string` | `undefined` |
| `defaultValue` | `string` | `''` |
| `...args` | `string`[] | `undefined` |

#### Returns

`string`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[localize](../interfaces/molecule.i18n.ILocaleService#localize)

#### Defined in

[src/i18n/localeService.ts:202](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L202)

___

### onChange

▸ **onChange**(`callback`): `void`

Listen to the local language changed event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`prev`: [`ILocale`](../interfaces/molecule.i18n.ILocale), `next`: [`ILocale`](../interfaces/molecule.i18n.ILocale)) => `void` |

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[onChange](../interfaces/molecule.i18n.ILocaleService#onchange)

#### Defined in

[src/i18n/localeService.ts:198](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L198)

___

### onEvent

▸ **onEvent**(`name`, `callback`): `void`

Subscribe the component event

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `callback` | `any` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

___

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`prevState`: `any`, `nextState`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

___

### removeLocale

▸ **removeLocale**(`id`): `undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

Remove a locale language by the id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[removeLocale](../interfaces/molecule.i18n.ILocaleService#removelocale)

#### Defined in

[src/i18n/localeService.ts:138](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L138)

___

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextState?` | `any` |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

___

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[reset](../interfaces/molecule.i18n.ILocaleService#reset)

#### Defined in

[src/i18n/localeService.ts:99](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L99)

___

### setCurrentLocale

▸ **setCurrentLocale**(`id`): `boolean`

Set the current locale language by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[ILocaleService](../interfaces/molecule.i18n.ILocaleService).[setCurrentLocale](../interfaces/molecule.i18n.ILocaleService#setcurrentlocale)

#### Defined in

[src/i18n/localeService.ts:150](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L150)

___

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Partial`<`any`\> | update target state values |
| `callback?` | (`prevState`: `any`, `nextState`: `any`) => `void` | - |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

___

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | Event name |
| `callback` | `Function` | Callback function |

#### Returns

`void`

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

___

### transformLocaleData

▸ `Private` **transformLocaleData**(`locale`): [`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | [`ILocale`](../interfaces/molecule.i18n.ILocale) |

#### Returns

[`ILocale`](../interfaces/molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:162](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L162)
