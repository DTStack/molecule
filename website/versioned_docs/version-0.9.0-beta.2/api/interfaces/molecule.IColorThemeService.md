---
id: 'molecule.IColorThemeService'
title: 'Interface: IColorThemeService'
sidebar_label: 'IColorThemeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IColorThemeService

## Implemented by

-   [`ColorThemeService`](../classes/molecule.ColorThemeService)

## Methods

### addThemes

▸ **addThemes**(`themes`): `void`

Add themes into `colorThemes`

This will update the duplicated themes found in `colorThemes`

#### Parameters

| Name     | Type                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| `themes` | [`IColorTheme`](molecule.model.IColorTheme) \| [`IColorTheme`](molecule.model.IColorTheme)[] |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L23)

---

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](molecule.model.IColorTheme)

Get the current Color Theme

#### Returns

[`IColorTheme`](molecule.model.IColorTheme)

#### Defined in

[src/services/theme/colorThemeService.ts:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L47)

---

### getThemeById

▸ **getThemeById**(`id`): `void`

Get specific theme via id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L43)

---

### getThemes

▸ **getThemes**(): [`IColorTheme`](molecule.model.IColorTheme)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](molecule.model.IColorTheme)[]

#### Defined in

[src/services/theme/colorThemeService.ts:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L38)

---

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L51)

---

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L55)

---

### setTheme

▸ **setTheme**(`id`): `void`

Set the current Color Theme via id,
Please ensure the theme could be found in `colorThemes`

#### Parameters

| Name | Type     | Description          |
| :--- | :------- | :------------------- |
| `id` | `string` | The `id` is required |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L29)

---

### updateTheme

▸ **updateTheme**(`theme`): `void`

Update specific theme,

#### Parameters

| Name    | Type                                        | Description                   |
| :------ | :------------------------------------------ | :---------------------------- |
| `theme` | [`IColorTheme`](molecule.model.IColorTheme) | The `id` is required in theme |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/theme/colorThemeService.ts#L34)
