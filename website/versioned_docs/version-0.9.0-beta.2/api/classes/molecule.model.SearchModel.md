---
id: 'molecule.model.SearchModel'
title: 'Class: SearchModel'
sidebar_label: 'SearchModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).SearchModel

## Implements

-   [`ISearchProps`](../interfaces/molecule.model.ISearchProps)

## Constructors

### constructor

• **new SearchModel**(`headerToolBar?`, `searchAddons?`, `replaceAddons?`, `result?`, `value?`, `replaceValue?`, `replaceMode?`, `isCaseSensitive?`, `isWholeWords?`, `isRegex?`, `preserveCase?`, `validationInfo?`)

#### Parameters

| Name                  | Type                                                                                    | Default value |
| :-------------------- | :-------------------------------------------------------------------------------------- | :------------ |
| `headerToolBar`       | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[] | `[]`          |
| `searchAddons`        | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[] | `[]`          |
| `replaceAddons`       | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[] | `[]`          |
| `result`              | `never`[]                                                                               | `[]`          |
| `value`               | `string`                                                                                | `''`          |
| `replaceValue`        | `string`                                                                                | `''`          |
| `replaceMode`         | `boolean`                                                                               | `false`       |
| `isCaseSensitive`     | `boolean`                                                                               | `false`       |
| `isWholeWords`        | `boolean`                                                                               | `false`       |
| `isRegex`             | `boolean`                                                                               | `false`       |
| `preserveCase`        | `boolean`                                                                               | `false`       |
| `validationInfo`      | `Object`                                                                                | `undefined`   |
| `validationInfo.text` | `string`                                                                                | `undefined`   |
| `validationInfo.type` | `"warning"` \| `"info"` \| `"error"`                                                    | `undefined`   |

#### Defined in

[src/model/workbench/search.tsx:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L44)

## Properties

### headerToolBar

• **headerToolBar**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[headerToolBar](../interfaces/molecule.model.ISearchProps#headertoolbar)

#### Defined in

[src/model/workbench/search.tsx:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L28)

---

### isCaseSensitive

• **isCaseSensitive**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[isCaseSensitive](../interfaces/molecule.model.ISearchProps#iscasesensitive)

#### Defined in

[src/model/workbench/search.tsx:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L36)

---

### isRegex

• **isRegex**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[isRegex](../interfaces/molecule.model.ISearchProps#isregex)

#### Defined in

[src/model/workbench/search.tsx:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L35)

---

### isWholeWords

• **isWholeWords**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[isWholeWords](../interfaces/molecule.model.ISearchProps#iswholewords)

#### Defined in

[src/model/workbench/search.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L37)

---

### preserveCase

• **preserveCase**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[preserveCase](../interfaces/molecule.model.ISearchProps#preservecase)

#### Defined in

[src/model/workbench/search.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L38)

---

### replaceAddons

• **replaceAddons**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[replaceAddons](../interfaces/molecule.model.ISearchProps#replaceaddons)

#### Defined in

[src/model/workbench/search.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L30)

---

### replaceMode

• **replaceMode**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[replaceMode](../interfaces/molecule.model.ISearchProps#replacemode)

#### Defined in

[src/model/workbench/search.tsx:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L34)

---

### replaceValue

• **replaceValue**: `string` = `''`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[replaceValue](../interfaces/molecule.model.ISearchProps#replacevalue)

#### Defined in

[src/model/workbench/search.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L33)

---

### result

• **result**: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)<`any`\>[] = `[]`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[result](../interfaces/molecule.model.ISearchProps#result)

#### Defined in

[src/model/workbench/search.tsx:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L31)

---

### searchAddons

• **searchAddons**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[searchAddons](../interfaces/molecule.model.ISearchProps#searchaddons)

#### Defined in

[src/model/workbench/search.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L29)

---

### validationInfo

• **validationInfo**: `Object`

#### Type declaration

| Name   | Type                                 |
| :----- | :----------------------------------- |
| `text` | `string`                             |
| `type` | `"warning"` \| `"info"` \| `"error"` |

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[validationInfo](../interfaces/molecule.model.ISearchProps#validationinfo)

#### Defined in

[src/model/workbench/search.tsx:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L39)

---

### value

• **value**: `string` = `''`

#### Implementation of

[ISearchProps](../interfaces/molecule.model.ISearchProps).[value](../interfaces/molecule.model.ISearchProps#value)

#### Defined in

[src/model/workbench/search.tsx:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/search.tsx#L32)
