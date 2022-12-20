---
id: 'molecule.model.SettingsModel'
title: 'Class: SettingsModel'
sidebar_label: 'SettingsModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).SettingsModel

## Implements

-   [`ISettings`](../interfaces/molecule.model.ISettings)

## Indexable

▪ [key: `string`]: `any`

## Constructors

### constructor

• **new SettingsModel**(`colorTheme`, `editor`, `locale?`)

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `colorTheme` | `string`                                                        |
| `editor`     | [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions) |
| `locale?`    | `string`                                                        |

#### Defined in

[model/settings.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/model/settings.ts#L25)

## Properties

### colorTheme

• **colorTheme**: `string`

#### Implementation of

[ISettings](../interfaces/molecule.model.ISettings).[colorTheme](../interfaces/molecule.model.ISettings#colortheme)

#### Defined in

[model/settings.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/model/settings.ts#L21)

---

### editor

• **editor**: [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions)

#### Implementation of

[ISettings](../interfaces/molecule.model.ISettings).[editor](../interfaces/molecule.model.ISettings#editor)

#### Defined in

[model/settings.ts:22](https://github.com/DTStack/molecule/blob/927b7d39/src/model/settings.ts#L22)

---

### locale

• `Optional` **locale**: `string`

#### Implementation of

[ISettings](../interfaces/molecule.model.ISettings).[locale](../interfaces/molecule.model.ISettings#locale)

#### Defined in

[model/settings.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/model/settings.ts#L23)
