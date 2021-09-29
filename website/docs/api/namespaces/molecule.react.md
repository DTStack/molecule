---
id: 'molecule.react'
title: 'Namespace: react'
sidebar_label: 'react'
custom_edit_url: null
---

[molecule](molecule).react

## Classes

-   [Component](../classes/molecule.react.Component)
-   [Controller](../classes/molecule.react.Controller)

## Interfaces

-   [IComponent](../interfaces/molecule.react.IComponent)

## Type aliases

### ControllerObject

Ƭ **ControllerObject**: `Object`

#### Index signature

▪ [index: `string`]: [`Controller`](../classes/molecule.react.Controller)

#### Defined in

[src/react/connector.tsx:12](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/connector.tsx#L12)

---

### ServiceObject

Ƭ **ServiceObject**: `Object`

#### Index signature

▪ [index: `string`]: [`IComponent`](../interfaces/molecule.react.IComponent)

#### Defined in

[src/react/connector.tsx:8](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/connector.tsx#L8)

## Functions

### cloneReactChildren

▸ **cloneReactChildren**<`P`\>(`children`, `props`): `React.ReactNode`

Clone react children props

#### Type parameters

| Name |
| :--- |
| `P`  |

#### Parameters

| Name       | Type        | Description     |
| :--------- | :---------- | :-------------- |
| `children` | `ReactNode` | React.ReactNode |
| `props`    | `P`         | Parent props    |

#### Returns

`React.ReactNode`

#### Defined in

[src/react/helper.ts:8](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/helper.ts#L8)

---

### connect

▸ **connect**<`T`\>(`Service`, `View`, `Controller?`, `watchFiled?`): `React.ComponentType`<`T`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name          | Type                                                                                                               |
| :------------ | :----------------------------------------------------------------------------------------------------------------- |
| `Service`     | [`IComponent`](../interfaces/molecule.react.IComponent)<`any`\> \| [`ServiceObject`](molecule.react#serviceobject) |
| `View`        | `ComponentType`<`any`\>                                                                                            |
| `Controller?` | [`Controller`](../classes/molecule.react.Controller) \| [`ControllerObject`](molecule.react#controllerobject)      |
| `watchFiled?` | `object`                                                                                                           |

#### Returns

`React.ComponentType`<`T`\>

#### Defined in

[src/react/connector.tsx:16](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/connector.tsx#L16)

---

### mapState

▸ **mapState**<`S`, `T`\>(`WrappedComponent`, `state`, `actions?`): typeof `StateProvider`

Mapping the state to the component
TODO support mapping service method to the component.

#### Type parameters

| Name |
| :--- |
| `S`  |
| `T`  |

#### Parameters

| Name               | Type                  | Description                                                                   |
| :----------------- | :-------------------- | :---------------------------------------------------------------------------- |
| `WrappedComponent` | `ComponentType`<`S`\> | The component will be wrapped                                                 |
| `state`            | `S`                   | The state you want to injected, notice the state must be an observable object |
| `actions?`         | `T`                   | -                                                                             |

#### Returns

typeof `StateProvider`

#### Defined in

[src/react/mapState.tsx:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/mapState.tsx#L11)
