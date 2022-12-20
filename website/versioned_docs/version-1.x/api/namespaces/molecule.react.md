---
id: 'molecule.react'
title: 'Namespace: react'
sidebar_label: 'react'
custom_edit_url: null
---

[molecule](molecule).react

## Enumerations

-   [ComponentEvents](../enums/molecule.react.ComponentEvents)

## Classes

-   [Component](../classes/molecule.react.Component)
-   [Controller](../classes/molecule.react.Controller)

## Interfaces

-   [IComponent](../interfaces/molecule.react.IComponent)

## Type Aliases

### ControllerObject

Ƭ **ControllerObject**: `Object`

#### Index signature

▪ [index: `string`]: [`Controller`](../classes/molecule.react.Controller)

#### Defined in

[react/connector.tsx:12](https://github.com/DTStack/molecule/blob/927b7d39/src/react/connector.tsx#L12)

---

### ServiceObject

Ƭ **ServiceObject**: `Object`

#### Index signature

▪ [index: `string`]: [`IComponent`](../interfaces/molecule.react.IComponent)

#### Defined in

[react/connector.tsx:8](https://github.com/DTStack/molecule/blob/927b7d39/src/react/connector.tsx#L8)

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

[react/helper.ts:8](https://github.com/DTStack/molecule/blob/927b7d39/src/react/helper.ts#L8)

---

### connect

▸ **connect**<`T`\>(`Service`, `View`, `Controller?`): `React.ComponentType`<`T`\>

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

#### Returns

`React.ComponentType`<`T`\>

#### Defined in

[react/connector.tsx:16](https://github.com/DTStack/molecule/blob/927b7d39/src/react/connector.tsx#L16)
