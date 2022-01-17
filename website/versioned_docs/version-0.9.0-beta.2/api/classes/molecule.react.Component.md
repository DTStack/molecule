---
id: 'molecule.react.Component'
title: 'Class: Component<S>'
sidebar_label: 'Component'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[react](../namespaces/molecule.react).Component

## Type parameters

| Name | Type  |
| :--- | :---- |
| `S`  | `any` |

## Hierarchy

-   [`GlobalEvent`](molecule.event.GlobalEvent)

    ↳ **`Component`**

    ↳↳ [`LocaleService`](molecule.LocaleService)

    ↳↳ [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

    ↳↳ [`ActivityBarService`](molecule.ActivityBarService)

    ↳↳ [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

    ↳↳ [`MenuBarService`](molecule.MenuBarService)

    ↳↳ [`ISidebarService`](../interfaces/molecule.ISidebarService)

    ↳↳ [`SidebarService`](molecule.SidebarService)

    ↳↳ [`IEditorService`](../interfaces/molecule.IEditorService)

    ↳↳ [`EditorService`](molecule.EditorService)

    ↳↳ [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

    ↳↳ [`StatusBarService`](molecule.StatusBarService)

    ↳↳ [`IExplorerService`](../interfaces/molecule.IExplorerService)

    ↳↳ [`ExplorerService`](molecule.ExplorerService)

    ↳↳ [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

    ↳↳ [`FolderTreeService`](molecule.FolderTreeService)

    ↳↳ [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

    ↳↳ [`EditorTreeService`](molecule.EditorTreeService)

    ↳↳ [`ISearchService`](../interfaces/molecule.ISearchService)

    ↳↳ [`SearchService`](molecule.SearchService)

    ↳↳ [`IPanelService`](../interfaces/molecule.IPanelService)

    ↳↳ [`PanelService`](molecule.PanelService)

    ↳↳ [`ILayoutService`](../interfaces/molecule.ILayoutService)

    ↳↳ [`LayoutService`](molecule.LayoutService)

    ↳↳ [`INotificationService`](../interfaces/molecule.INotificationService)

    ↳↳ [`NotificationService`](molecule.NotificationService)

    ↳↳ [`IProblemsService`](../interfaces/molecule.IProblemsService)

    ↳↳ [`ProblemsService`](molecule.ProblemsService)

## Implements

-   [`IComponent`](../interfaces/molecule.react.IComponent)<`S`\>

## Constructors

### constructor

• **new Component**<`S`\>()

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `S`  | `any` |

#### Overrides

[GlobalEvent](molecule.event.GlobalEvent).[constructor](molecule.event.GlobalEvent#constructor)

#### Defined in

[src/react/component.ts:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L45)

## Properties

### \_event

• `Private` **\_event**: [`EventEmitter`](molecule.event.EventEmitter)

#### Defined in

[src/react/component.ts:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L43)

---

### state

• `Protected` `Abstract` **state**: `S`

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

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

[GlobalEvent](molecule.event.GlobalEvent).[count](molecule.event.GlobalEvent#count)

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

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[emit](molecule.event.GlobalEvent#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[forceUpdate](../interfaces/molecule.react.IComponent#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getState

▸ **getState**(): `S`

Get the Component state

#### Returns

`S`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[getState](../interfaces/molecule.react.IComponent#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `callback` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[onUpdateState](../interfaces/molecule.react.IComponent#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[removeOnUpdateState](../interfaces/molecule.react.IComponent#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type |
| :----------- | :--- |
| `nextState?` | `S`  |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[render](../interfaces/molecule.react.IComponent#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                           | Description                |
| :---------- | :--------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`S`\>                                | update target state values |
| `callback?` | (`prevState`: `S`, `nextState`: `S`) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[setState](../interfaces/molecule.react.IComponent#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L54)

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

[GlobalEvent](molecule.event.GlobalEvent).[subscribe](molecule.event.GlobalEvent#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

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

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[unsubscribe](molecule.event.GlobalEvent#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)
