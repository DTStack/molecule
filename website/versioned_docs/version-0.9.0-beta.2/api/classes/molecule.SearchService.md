---
id: 'molecule.SearchService'
title: 'Class: SearchService'
sidebar_label: 'SearchService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).SearchService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`ISearchProps`](../interfaces/molecule.model.ISearchProps)\>

    ↳ **`SearchService`**

## Implements

-   [`ISearchService`](../interfaces/molecule.ISearchService)

## Constructors

### constructor

• **new SearchService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/searchService.ts:100](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L100)

## Properties

### builtinService

• `Private` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/workbench/searchService.ts:99](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L99)

---

### state

• `Protected` **state**: [`ISearchProps`](../interfaces/molecule.model.ISearchProps)

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[state](../interfaces/molecule.ISearchService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/searchService.ts:98](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L98)

## Methods

### count

▸ **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[count](../interfaces/molecule.ISearchService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

---

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[forceUpdate](../interfaces/molecule.ISearchService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`ISearchProps`](../interfaces/molecule.model.ISearchProps)

Get the Component state

#### Returns

[`ISearchProps`](../interfaces/molecule.model.ISearchProps)

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[getState](../interfaces/molecule.ISearchService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

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

[src/services/workbench/searchService.ts:233](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L233)

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

[src/services/workbench/searchService.ts:229](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L229)

---

### onResultClick

▸ **onResultClick**(`callback`): `void`

Listen to the click event in result data

#### Parameters

| Name       | Type                                                                                                                                                                                                         |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`item`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)<`any`\>, `resultData`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)<`any`\>[]) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onResultClick](../interfaces/molecule.ISearchService#onresultclick)

#### Defined in

[src/services/workbench/searchService.ts:254](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L254)

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

[src/services/workbench/searchService.ts:239](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L239)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps), `nextState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps)) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onUpdateState](../interfaces/molecule.ISearchService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[removeOnUpdateState](../interfaces/molecule.ISearchService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `nextState?` | [`ISearchProps`](../interfaces/molecule.model.ISearchProps) |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[render](../interfaces/molecule.ISearchService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[reset](../interfaces/molecule.ISearchService#reset)

#### Defined in

[src/services/workbench/searchService.ts:212](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L212)

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

[src/services/workbench/searchService.ts:124](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L124)

---

### setResult

▸ **setResult**(`value?`): `void`

Set result data for searching result

#### Parameters

| Name     | Type                                                                                  |
| :------- | :------------------------------------------------------------------------------------ |
| `value?` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)<`any`\>[] |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setResult](../interfaces/molecule.ISearchService#setresult)

#### Defined in

[src/services/workbench/searchService.ts:130](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L130)

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

[src/services/workbench/searchService.ts:118](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L118)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                           | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISearchProps`](../interfaces/molecule.model.ISearchProps)\>                                                                                        | update target state values |
| `callback?` | (`prevState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps), `nextState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[setState](../interfaces/molecule.ISearchService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L54)

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

[src/services/workbench/searchService.ts:106](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L106)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleCaseSensitive

▸ **toggleCaseSensitive**(): `void`

Toggle the rule for case senstitive when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleCaseSensitive](../interfaces/molecule.ISearchService#togglecasesensitive)

#### Defined in

[src/services/workbench/searchService.ts:142](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L142)

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

[src/services/workbench/searchService.ts:136](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L136)

---

### togglePreserveCase

▸ **togglePreserveCase**(): `void`

Toggle the rule for preserving case when replacing

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[togglePreserveCase](../interfaces/molecule.ISearchService#togglepreservecase)

#### Defined in

[src/services/workbench/searchService.ts:184](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L184)

---

### toggleRegex

▸ **toggleRegex**(): `void`

Toggle the rule for enabling regex when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleRegex](../interfaces/molecule.ISearchService#toggleregex)

#### Defined in

[src/services/workbench/searchService.ts:171](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L171)

---

### toggleWholeWord

▸ **toggleWholeWord**(): `void`

Toggle the rule for finding whole word when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleWholeWord](../interfaces/molecule.ISearchService#togglewholeword)

#### Defined in

[src/services/workbench/searchService.ts:158](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L158)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[unsubscribe](../interfaces/molecule.ISearchService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

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

[src/services/workbench/searchService.ts:197](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/searchService.ts#L197)
