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

[services/workbench/searchService.ts:101](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L101)

## Properties

### builtinService

• `Private` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[services/workbench/searchService.ts:100](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L100)

---

### state

• `Protected` **state**: [`ISearchProps`](../interfaces/molecule.model.ISearchProps)

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[state](../interfaces/molecule.ISearchService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/searchService.ts:99](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L99)

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

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

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

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

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

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

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

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/searchService.ts:230](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L230)

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

[services/workbench/searchService.ts:226](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L226)

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

[services/workbench/searchService.ts:251](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L251)

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

[services/workbench/searchService.ts:236](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L236)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps), `nextState`: [`ISearchProps`](../interfaces/molecule.model.ISearchProps)) => `void` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[onUpdateState](../interfaces/molecule.ISearchService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(`listener?`): `void`

Remove the Component update event listening, default is remove all,
also you can remove one by pass the listener

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `listener?` | `Function` |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[removeOnUpdateState](../interfaces/molecule.ISearchService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

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

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[reset](../interfaces/molecule.ISearchService#reset)

#### Defined in

[services/workbench/searchService.ts:209](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L209)

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

[services/workbench/searchService.ts:125](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L125)

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

[services/workbench/searchService.ts:131](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L131)

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

[services/workbench/searchService.ts:119](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L119)

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

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

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

[services/workbench/searchService.ts:107](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L107)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[subscribe](../interfaces/molecule.ISearchService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleCaseSensitive

▸ **toggleCaseSensitive**(): `void`

Toggle the rule for case senstitive when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleCaseSensitive](../interfaces/molecule.ISearchService#togglecasesensitive)

#### Defined in

[services/workbench/searchService.ts:143](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L143)

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

[services/workbench/searchService.ts:137](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L137)

---

### togglePreserveCase

▸ **togglePreserveCase**(): `void`

Toggle the rule for preserving case when replacing

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[togglePreserveCase](../interfaces/molecule.ISearchService#togglepreservecase)

#### Defined in

[services/workbench/searchService.ts:182](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L182)

---

### toggleRegex

▸ **toggleRegex**(): `void`

Toggle the rule for enabling regex when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleRegex](../interfaces/molecule.ISearchService#toggleregex)

#### Defined in

[services/workbench/searchService.ts:170](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L170)

---

### toggleWholeWord

▸ **toggleWholeWord**(): `void`

Toggle the rule for finding whole word when searching

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[toggleWholeWord](../interfaces/molecule.ISearchService#togglewholeword)

#### Defined in

[services/workbench/searchService.ts:158](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L158)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Implementation of

[ISearchService](../interfaces/molecule.ISearchService).[unsubscribe](../interfaces/molecule.ISearchService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

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

[services/workbench/searchService.ts:194](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L194)
