---
id: 'molecule.ISearchService'
title: 'Interface: ISearchService'
sidebar_label: 'ISearchService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ISearchService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<`ISearchProps`\>

    ↳ **`ISearchService`**

## Implemented by

-   [`SearchService`](../classes/molecule.SearchService)

## Properties

### state

• `Protected` `Abstract` **state**: `ISearchProps`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): `ISearchProps`

#### Returns

`ISearchProps`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Defined in

[src/services/workbench/searchService.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L66)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onEvent](../classes/molecule.react.Component#onevent)

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

#### Defined in

[src/services/workbench/searchService.ts:85](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L85)

---

### onResultClick

▸ **onResultClick**(`callback`): `void`

Listen to the click event in result data

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`item`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps), `resultData`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:89](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L89)

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

#### Defined in

[src/services/workbench/searchService.ts:70](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L70)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `callback` | (`prevState`: `ISearchProps`, `nextState`: `ISearchProps`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L62)

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

#### Defined in

[src/services/workbench/searchService.ts:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L30)

---

### setResult

▸ **setResult**(`value?`): `void`

Set result data for searching result

#### Parameters

| Name     | Type                                                            |
| :------- | :-------------------------------------------------------------- |
| `value?` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L34)

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

#### Defined in

[src/services/workbench/searchService.ts:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L26)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

---

### setValidateInfo

▸ **setValidateInfo**(`info`): `void`

Set informations about validating,

#### Parameters

| Name   | Type                                                                                           | Description                                               |
| :----- | :--------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `info` | `undefined` \| `string` \| { `text`: `string` ; `type`: `"warning"` \| `"info"` \| `"error"` } | If provided a string, molecule will set it type as `info` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:22](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L22)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleCaseSensitive

▸ **toggleCaseSensitive**(): `void`

Toggle the rule for case senstitive when searching

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:42](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L42)

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

#### Defined in

[src/services/workbench/searchService.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L38)

---

### togglePreserveCase

▸ **togglePreserveCase**(): `void`

Toggle the rule for preserving case when replacing

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L54)

---

### toggleRegex

▸ **toggleRegex**(): `void`

Toggle the rule for enabling regex when searching

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L50)

---

### toggleWholeWord

▸ **toggleWholeWord**(): `void`

Toggle the rule for finding whole word when searching

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:46](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L46)

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

#### Defined in

[src/services/workbench/searchService.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/searchService.ts#L58)
