---
id: 'molecule.ColorThemeService'
title: 'Class: ColorThemeService'
sidebar_label: 'ColorThemeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ColorThemeService

## Implements

-   [`IColorThemeService`](../interfaces/molecule.IColorThemeService)

## Constructors

### constructor

• **new ColorThemeService**()

#### Defined in

[src/services/theme/colorThemeService.ts:77](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L77)

## Properties

### colorTheme

• `Private` **colorTheme**: [`IColorTheme`](../interfaces/molecule.model.IColorTheme)

#### Defined in

[src/services/theme/colorThemeService.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L75)

---

### colorThemes

• `Private` **colorThemes**: [`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

#### Defined in

[src/services/theme/colorThemeService.ts:74](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L74)

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

[src/services/theme/colorThemeService.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L83)

---

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](../interfaces/molecule.model.IColorTheme)

Get the current Color Theme

#### Returns

[`IColorTheme`](../interfaces/molecule.model.IColorTheme)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getColorTheme](../interfaces/molecule.IColorThemeService#getcolortheme)

#### Defined in

[src/services/theme/colorThemeService.ts:124](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L124)

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

[src/services/theme/colorThemeService.ts:119](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L119)

---

### getThemes

▸ **getThemes**(): [`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](../interfaces/molecule.model.IColorTheme)[]

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getThemes](../interfaces/molecule.IColorThemeService#getthemes)

#### Defined in

[src/services/theme/colorThemeService.ts:144](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L144)

---

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reload](../interfaces/molecule.IColorThemeService#reload)

#### Defined in

[src/services/theme/colorThemeService.ts:148](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L148)

---

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reset](../interfaces/molecule.IColorThemeService#reset)

#### Defined in

[src/services/theme/colorThemeService.ts:152](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L152)

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

[src/services/theme/colorThemeService.ts:128](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L128)

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

[src/services/theme/colorThemeService.ts:98](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L98)
