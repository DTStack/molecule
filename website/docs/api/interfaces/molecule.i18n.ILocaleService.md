---
id: 'molecule.i18n.ILocaleService'
title: 'Interface: ILocaleService'
sidebar_label: 'ILocaleService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[i18n](../namespaces/molecule.i18n).ILocaleService

## Implemented by

-   [`LocaleService`](../classes/molecule.i18n.LocaleService)

## Methods

### addLocales

▸ **addLocales**(`locales`): `void`

Add multiple local languages

#### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `locales` | [`ILocale`](molecule.i18n.ILocale)[] |

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L50)

---

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](molecule.i18n.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:28](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L28)

---

### getDefaultLocale

▸ **getDefaultLocale**(): [`ILocale`](molecule.i18n.ILocale)

Get the default locale

#### Returns

[`ILocale`](molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:41](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L41)

---

### getDefaultLocales

▸ **getDefaultLocales**(): [`ILocale`](molecule.i18n.ILocale)[]

Get the default locales;

#### Returns

[`ILocale`](molecule.i18n.ILocale)[]

#### Defined in

[src/i18n/localeService.ts:45](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L45)

---

### getLocale

▸ **getLocale**(`id`): `undefined` \| [`ILocale`](molecule.i18n.ILocale)

Get a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L37)

---

### getLocales

▸ **getLocales**(): [`ILocale`](molecule.i18n.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](molecule.i18n.ILocale)[]

#### Defined in

[src/i18n/localeService.ts:32](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L32)

---

### initialize

▸ **initialize**(`locales`, `localeId?`): `void`

Initialize the locales data, and the default current locale language,
this method first uses the cached `locale` in localStorage, then use the
localeId argument, if both the values are null, finally apply the built-in BuiltInZhCN

#### Parameters

| Name        | Type                                 |
| :---------- | :----------------------------------- |
| `locales`   | [`ILocale`](molecule.i18n.ILocale)[] |
| `localeId?` | `string`                             |

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L19)

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

[src/i18n/localeService.ts:69](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L69)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the local language changed event

#### Parameters

| Name       | Type                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------- |
| `callback` | (`prev`: [`ILocale`](molecule.i18n.ILocale), `next`: [`ILocale`](molecule.i18n.ILocale)) => `void` |

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:78](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L78)

---

### removeLocale

▸ **removeLocale**(`id`): `undefined` \| [`ILocale`](molecule.i18n.ILocale)

Remove a locale language by the id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`ILocale`](molecule.i18n.ILocale)

#### Defined in

[src/i18n/localeService.ts:55](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L55)

---

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:82](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L82)

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

[src/i18n/localeService.ts:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/i18n/localeService.ts#L24)
