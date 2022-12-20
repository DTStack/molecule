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

[services/theme/colorThemeService.ts:29](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L29)

---

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](molecule.model.IColorTheme)

Get the current Color Theme

#### Returns

[`IColorTheme`](molecule.model.IColorTheme)

#### Defined in

[services/theme/colorThemeService.ts:53](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L53)

---

### getColorThemeMode

▸ **getColorThemeMode**(): [`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)

Get the mode('dark' or 'light') of the current Color Theme

#### Returns

[`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)

#### Defined in

[services/theme/colorThemeService.ts:65](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L65)

---

### getThemeById

▸ **getThemeById**(`id`): `undefined` \| [`IColorTheme`](molecule.model.IColorTheme)

Get specific theme via id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IColorTheme`](molecule.model.IColorTheme)

#### Defined in

[services/theme/colorThemeService.ts:49](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L49)

---

### getThemes

▸ **getThemes**(): [`IColorTheme`](molecule.model.IColorTheme)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](molecule.model.IColorTheme)[]

#### Defined in

[services/theme/colorThemeService.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L44)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the theme changed event

#### Parameters

| Name       | Type                                                                                                                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prev`: [`IColorTheme`](molecule.model.IColorTheme), `next`: [`IColorTheme`](molecule.model.IColorTheme), `themeMode`: [`ColorThemeMode`](../enums/molecule.model.ColorThemeMode)) => `void` |

#### Returns

`void`

#### Defined in

[services/theme/colorThemeService.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L70)

---

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Defined in

[services/theme/colorThemeService.ts:57](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L57)

---

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Defined in

[services/theme/colorThemeService.ts:61](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L61)

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

[services/theme/colorThemeService.ts:35](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L35)

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

[services/theme/colorThemeService.ts:40](https://github.com/DTStack/molecule/blob/927b7d39/src/services/theme/colorThemeService.ts#L40)
