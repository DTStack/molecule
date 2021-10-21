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

[src/services/theme/colorThemeService.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L71)

## Properties

### colorTheme

• `Private` **colorTheme**: [`IColorTheme`](../interfaces/molecule.IColorTheme)

#### Defined in

[src/services/theme/colorThemeService.ts:69](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L69)

---

### colorThemes

• `Private` **colorThemes**: [`IColorTheme`](../interfaces/molecule.IColorTheme)[]

#### Defined in

[src/services/theme/colorThemeService.ts:68](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L68)

## Methods

### addThemes

▸ **addThemes**(`themes`): `void`

Add themes into `colorThemes`

This will update the duplicated themes found in `colorThemes`

#### Parameters

| Name     | Type                                                                                                         |
| :------- | :----------------------------------------------------------------------------------------------------------- |
| `themes` | [`IColorTheme`](../interfaces/molecule.IColorTheme) \| [`IColorTheme`](../interfaces/molecule.IColorTheme)[] |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[addThemes](../interfaces/molecule.IColorThemeService#addthemes)

#### Defined in

[src/services/theme/colorThemeService.ts:77](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L77)

---

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](../interfaces/molecule.IColorTheme)

Get the current Color Theme

#### Returns

[`IColorTheme`](../interfaces/molecule.IColorTheme)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getColorTheme](../interfaces/molecule.IColorThemeService#getcolortheme)

#### Defined in

[src/services/theme/colorThemeService.ts:118](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L118)

---

### getThemeById

▸ **getThemeById**(`id`): `undefined` \| [`IColorTheme`](../interfaces/molecule.IColorTheme)

Get specific theme via id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IColorTheme`](../interfaces/molecule.IColorTheme)

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getThemeById](../interfaces/molecule.IColorThemeService#getthemebyid)

#### Defined in

[src/services/theme/colorThemeService.ts:113](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L113)

---

### getThemes

▸ **getThemes**(): [`IColorTheme`](../interfaces/molecule.IColorTheme)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](../interfaces/molecule.IColorTheme)[]

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[getThemes](../interfaces/molecule.IColorThemeService#getthemes)

#### Defined in

[src/services/theme/colorThemeService.ts:138](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L138)

---

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reload](../interfaces/molecule.IColorThemeService#reload)

#### Defined in

[src/services/theme/colorThemeService.ts:142](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L142)

---

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[reset](../interfaces/molecule.IColorThemeService#reset)

#### Defined in

[src/services/theme/colorThemeService.ts:146](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L146)

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

[src/services/theme/colorThemeService.ts:122](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L122)

---

### updateTheme

▸ **updateTheme**(`theme`): `void`

Update specific theme,

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `theme` | [`IColorTheme`](../interfaces/molecule.IColorTheme) |

#### Returns

`void`

#### Implementation of

[IColorThemeService](../interfaces/molecule.IColorThemeService).[updateTheme](../interfaces/molecule.IColorThemeService#updatetheme)

#### Defined in

[src/services/theme/colorThemeService.ts:92](https://github.com/DTStack/molecule/blob/3c64296/src/services/theme/colorThemeService.ts#L92)
