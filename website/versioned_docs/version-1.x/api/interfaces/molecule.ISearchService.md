---
id: 'molecule.ISearchService'
title: 'Interface: ISearchService'
sidebar_label: 'ISearchService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ISearchService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`ISearchProps`](molecule.model.ISearchProps)\>

    ↳ **`ISearchService`**

## Implemented by

-   [`SearchService`](../classes/molecule.SearchService)

## Properties

### state

• `Protected` `Abstract` **state**: [`ISearchProps`](molecule.model.ISearchProps)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[count](../classes/molecule.react.Component#count)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getState

▸ **getState**(): [`ISearchProps`](molecule.model.ISearchProps)

Get the Component state

#### Returns

[`ISearchProps`](molecule.model.ISearchProps)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Defined in

[services/workbench/searchService.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L63)

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

[services/workbench/searchService.ts:82](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L82)

---

### onResultClick

▸ **onResultClick**(`callback`): `void`

Listen to the click event in result data

#### Parameters

| Name       | Type                                                                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`item`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>, `resultData`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:86](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L86)

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

[services/workbench/searchService.ts:67](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L67)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`ISearchProps`](molecule.model.ISearchProps), `nextState`: [`ISearchProps`](molecule.model.ISearchProps)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `nextState?` | [`ISearchProps`](molecule.model.ISearchProps) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:59](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L59)

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

[services/workbench/searchService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L27)

---

### setResult

▸ **setResult**(`value?`): `void`

Set result data for searching result

#### Parameters

| Name     | Type                                                                    |
| :------- | :---------------------------------------------------------------------- |
| `value?` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[] |

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:31](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L31)

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

[services/workbench/searchService.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L23)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                               | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISearchProps`](molecule.model.ISearchProps)\>                                                                          | update target state values |
| `callback?` | (`prevState`: [`ISearchProps`](molecule.model.ISearchProps), `nextState`: [`ISearchProps`](molecule.model.ISearchProps)) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

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

[services/workbench/searchService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L19)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleCaseSensitive

▸ **toggleCaseSensitive**(): `void`

Toggle the rule for case senstitive when searching

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:39](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L39)

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

[services/workbench/searchService.ts:35](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L35)

---

### togglePreserveCase

▸ **togglePreserveCase**(): `void`

Toggle the rule for preserving case when replacing

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L51)

---

### toggleRegex

▸ **toggleRegex**(): `void`

Toggle the rule for enabling regex when searching

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:47](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L47)

---

### toggleWholeWord

▸ **toggleWholeWord**(): `void`

Toggle the rule for finding whole word when searching

#### Returns

`void`

#### Defined in

[services/workbench/searchService.ts:43](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L43)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

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

#### Defined in

[services/workbench/searchService.ts:55](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/searchService.ts#L55)
