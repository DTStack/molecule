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

    ↳↳ [`LocaleService`](molecule.i18n.LocaleService)

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

[src/react/component.ts:28](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L28)

## Properties

### \_event

• `Private` **\_event**: [`EventEmitter`](molecule.event.EventEmitter)

#### Defined in

[src/react/component.ts:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L26)

---

### state

• `Protected` `Abstract` **state**: `S`

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

[GlobalEvent](molecule.event.GlobalEvent).[emit](molecule.event.GlobalEvent#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[forceUpdate](../interfaces/molecule.react.IComponent#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): `S`

#### Returns

`S`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[getState](../interfaces/molecule.react.IComponent#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

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

[IComponent](../interfaces/molecule.react.IComponent).[onEvent](../interfaces/molecule.react.IComponent#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `callback` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[onUpdateState](../interfaces/molecule.react.IComponent#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

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

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)
