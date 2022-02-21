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

[src/i18n/localeService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L51)

---

### getCurrentLocale

▸ **getCurrentLocale**(): `undefined` \| [`ILocale`](molecule.ILocale)

Get the current locale language

#### Returns

`undefined` \| [`ILocale`](molecule.ILocale)

#### Defined in

[src/i18n/localeService.ts:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L29)

---

### getDefaultLocale

▸ **getDefaultLocale**(): [`ILocale`](molecule.ILocale)

Get the default locale

#### Returns

[`ILocale`](molecule.ILocale)

#### Defined in

[src/i18n/localeService.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L42)

---

### getDefaultLocales

▸ **getDefaultLocales**(): [`ILocale`](molecule.ILocale)[]

Get the default locales;

#### Returns

[`ILocale`](molecule.ILocale)[]

#### Defined in

[src/i18n/localeService.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L46)

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

[src/i18n/localeService.ts:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L38)

---

### getLocales

▸ **getLocales**(): [`ILocale`](molecule.ILocale)[]

Get All locale languages

#### Returns

[`ILocale`](molecule.ILocale)[]

#### Defined in

[src/i18n/localeService.ts:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L33)

---

### initialize

▸ **initialize**(`locales`, `localeId?`): `void`

Initialize the locales data, and the default current locale language,
this method first uses the cached `locale` in localStorage, then use the
localeId argument, if both the values are null, finally apply the built-in BuiltInZhCN

#### Parameters

| Name        | Type                            |
| :---------- | :------------------------------ |
| `locales`   | [`ILocale`](molecule.ILocale)[] |
| `localeId?` | `string`                        |

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L20)

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

[src/i18n/localeService.ts:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L70)

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

[src/i18n/localeService.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L79)

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

[src/i18n/localeService.ts:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L56)

---

### reset

▸ **reset**(): `void`

Reset the LocaleService to the initial state

#### Returns

`void`

#### Defined in

[src/i18n/localeService.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L83)

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

[src/i18n/localeService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/i18n/localeService.ts#L25)
