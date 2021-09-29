---
id: 'molecule.SearchService'
title: 'Class: SearchService'
sidebar_label: 'SearchService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).SearchService

## Hierarchy

-   [`Component`](molecule.react.Component)<`ISearchProps`\>

    ↳ **`SearchService`**

## Implements

-   [`ISearchService`](../interfaces/molecule.ISearchService)

## Constructors

### constructor

• **new SearchService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/searchService.ts:102](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L102)

## Properties

### state

• `Protected` **state**: `ISearchProps`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[state](../interfaces/molecule.ISearchService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/searchService.ts:101](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L101)

## Methods

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[emit](../interfaces/molecule.ISearchService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[forceUpdate](../interfaces/molecule.ISearchService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): `ISearchProps`

#### Returns

`ISearchProps`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[getState](../interfaces/molecule.ISearchService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onChange

▸ **onChange**(`callback`): `void`

Listen to the event about the value of search input changed

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `callback` | (`value`: `string`, `replaceValue`: `string`) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onChange](../interfaces/molecule.ISearchService#onchange)

#### Defined in

[src/services/workbench/searchService.ts:211](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L211)

---

### onEvent

▸ **onEvent**(`name`, `callback`): `void`

Subscribe the component event

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `name`     | `any` |
| `callback` | `any` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onEvent](../interfaces/molecule.ISearchService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onReplaceAll

▸ **onReplaceAll**(`callback`): `void`

Listen to the event about replace all text in result

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `callback` | () => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onReplaceAll](../interfaces/molecule.ISearchService#onreplaceall)

#### Defined in

[src/services/workbench/searchService.ts:207](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L207)

---

### onResultClick

▸ **onResultClick**(`callback`): `void`

Listen to the click event in result data

#### Parameters

| Name       | Type                                                                                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`item`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps), `resultData`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)[]) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onResultClick](../interfaces/molecule.ISearchService#onresultclick)

#### Defined in

[src/services/workbench/searchService.ts:232](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L232)

---

### onSearch

▸ **onSearch**(`callback`): `void`

Listen to the event about going to search result via values or config changed

#### Parameters

| Name       | Type                                                                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`value`: `string`, `replaceValue`: `string`, `config`: { `isCaseSensitive`: `boolean` ; `isRegex`: `boolean` ; `isWholeWords`: `boolean` ; `preserveCase`: `boolean` }) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onSearch](../interfaces/molecule.ISearchService#onsearch)

#### Defined in

[src/services/workbench/searchService.ts:217](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L217)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `callback` | (`prevState`: `ISearchProps`, `nextState`: `ISearchProps`) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onUpdateState](../interfaces/molecule.ISearchService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type           |
| :----------- | :------------- |
| `nextState?` | `ISearchProps` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[render](../interfaces/molecule.ISearchService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[reset](../interfaces/molecule.ISearchService#reset)

#### Defined in

[src/services/workbench/searchService.ts:190](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L190)

---

### setReplaceValue

▸ **setReplaceValue**(`value?`): `void`

Set replace value for replace input

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `value?` | `string` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setReplaceValue](../interfaces/molecule.ISearchService#setreplacevalue)

#### Defined in

[src/services/workbench/searchService.ts:125](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L125)

---

### setResult

▸ **setResult**(`value?`): `void`

Set result data for searching result

#### Parameters

| Name     | Type                                                                          |
| :------- | :---------------------------------------------------------------------------- |
| `value?` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)[] |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setResult](../interfaces/molecule.ISearchService#setresult)

#### Defined in

[src/services/workbench/searchService.ts:131](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L131)

---

### setSearchValue

▸ **setSearchValue**(`value?`): `void`

Set search value for search input

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `value?` | `string` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setSearchValue](../interfaces/molecule.ISearchService#setsearchvalue)

#### Defined in

[src/services/workbench/searchService.ts:119](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L119)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                 | Description                |
| :---------- | :------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`ISearchProps`\>                                           | update target state values |
| `callback?` | (`prevState`: `ISearchProps`, `nextState`: `ISearchProps`) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setState](../interfaces/molecule.ISearchService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

---

### setValidateInfo

▸ **setValidateInfo**(`info`): `void`

Set informations about validating,

#### Parameters

| Name   | Type                                                                                           |
| :----- | :--------------------------------------------------------------------------------------------- |
| `info` | `undefined` \| `string` \| { `text`: `string` ; `type`: `"warning"` \| `"info"` \| `"error"` } |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setValidateInfo](../interfaces/molecule.ISearchService#setvalidateinfo)

#### Defined in

[src/services/workbench/searchService.ts:107](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L107)

---

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[subscribe](../interfaces/molecule.ISearchService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleCaseSensitive

▸ **toggleCaseSensitive**(): `void`

Toggle the rule for case senstitive when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleCaseSensitive](../interfaces/molecule.ISearchService#togglecasesensitive)

#### Defined in

[src/services/workbench/searchService.ts:143](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L143)

---

### toggleMode

▸ **toggleMode**(`status`): `void`

Toggle search mode, `true` for replace mode

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `status` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleMode](../interfaces/molecule.ISearchService#togglemode)

#### Defined in

[src/services/workbench/searchService.ts:137](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L137)

---

### togglePreserveCase

▸ **togglePreserveCase**(): `void`

Toggle the rule for preserving case when replacing

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[togglePreserveCase](../interfaces/molecule.ISearchService#togglepreservecase)

#### Defined in

[src/services/workbench/searchService.ts:167](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L167)

---

### toggleRegex

▸ **toggleRegex**(): `void`

Toggle the rule for enabling regex when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleRegex](../interfaces/molecule.ISearchService#toggleregex)

#### Defined in

[src/services/workbench/searchService.ts:159](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L159)

---

### toggleWholeWord

▸ **toggleWholeWord**(): `void`

Toggle the rule for finding whole word when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleWholeWord](../interfaces/molecule.ISearchService#togglewholeword)

#### Defined in

[src/services/workbench/searchService.ts:151](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L151)

---

### updateStatus

▸ **updateStatus**(`addonId`, `checked`): `void`

Update the status of specific addon icon to `checked`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `addonId` | `string`  |
| `checked` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[updateStatus](../interfaces/molecule.ISearchService#updatestatus)

#### Defined in

[src/services/workbench/searchService.ts:175](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L175)
