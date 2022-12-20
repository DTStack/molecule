---
id: 'molecule.ILocaleService'
title: 'Interface: ILocaleService'
sidebar_label: 'ILocaleService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ILocaleService

## Implemented by

-   [`LocaleService`](../classes/molecule.LocaleService)

## Methods

### addLocales

▸ **addLocales**(`locales`): `void`

Add multiple local languages

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `locales` | [`ILocale`](molecule.ILocale)[] |

#### Returns

`void`

#### Defined in

[i18n/localeService.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L37)

---

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](molecule.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](molecule.ILocale)

#### Defined in

[i18n/localeService.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L23)

---

### getLocale

▸ **getLocale**(`id`): `undefined` \| [`ILocale`](molecule.ILocale)

Get a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](molecule.ILocale)

#### Defined in

[i18n/localeService.ts:32](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L32)

---

### getLocales

▸ **getLocales**(): [`ILocale`](molecule.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](molecule.ILocale)[]

#### Defined in

[i18n/localeService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L27)

---

### initialize

▸ **initialize**(`locales`, `localeId`): `void`

Initialize the locales data, and the current locale language,

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `locales`  | [`ILocale`](molecule.ILocale)[] |
| `localeId` | `string`                        |

#### Returns

`void`

#### Defined in

[i18n/localeService.ts:14](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L14)

---

### localize

▸ **localize**(`sourceKey`, `defaultValue`, ...`args`): `string`

Returns the international text located by source key，or the default value if it is not find
For examples:

```ts
localize('id', 'default value'); // hello ${i}, ${i}
localize('id', 'default value', 'world'); // hello world, ${i}
localize('id', 'default value', 'world', 'molecule'); // hello world, molecule
```

#### Parameters

| Name           | Type       | Description                                                                      |
| :------------- | :--------- | :------------------------------------------------------------------------------- |
| `sourceKey`    | `string`   | The key value located in the source international text                           |
| `defaultValue` | `string`   | The default value to be used when not find the international text                |
| `...args`      | `string`[] | If provided, it will used as the values to be replaced in the international text |

#### Returns

`string`

#### Defined in

[i18n/localeService.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L56)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the local language changed event

#### Parameters

| Name       | Type                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------- |
| `callback` | (`prev`: [`ILocale`](molecule.ILocale), `next`: [`ILocale`](molecule.ILocale)) => `void` |

#### Returns

`void`

#### Defined in

[i18n/localeService.ts:65](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L65)

---

### removeLocale

▸ **removeLocale**(`id`): `undefined` \| [`ILocale`](molecule.ILocale)

Remove a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](molecule.ILocale)

#### Defined in

[i18n/localeService.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L42)

---

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Defined in

[i18n/localeService.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L69)

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

#### Defined in

[i18n/localeService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/i18n/localeService.ts#L19)
