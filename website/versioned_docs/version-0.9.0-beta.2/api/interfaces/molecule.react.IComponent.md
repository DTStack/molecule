---
id: 'molecule.react.IComponent'
title: 'Interface: IComponent<S>'
sidebar_label: 'IComponent'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[react](../namespaces/molecule.react).IComponent

## Type parameters

| Name | Type  |
| :--- | :---- |
| `S`  | `any` |

## Implemented by

-   [`Component`](../classes/molecule.react.Component)

## Methods

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Defined in

[src/react/component.ts:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L32)

---

### getState

▸ **getState**(): `S`

Get the Component state

#### Returns

`S`

#### Defined in

[src/react/component.ts:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L36)

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

#### Defined in

[src/react/component.ts:24](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L24)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Defined in

[src/react/component.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L28)

---

### render

▸ **render**(`nextState?`): `void`

Trigger the Component update event

#### Parameters

| Name         | Type |
| :----------- | :--- |
| `nextState?` | `S`  |

#### Returns

`void`

#### Defined in

[src/react/component.ts:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L19)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the Component state

#### Parameters

| Name        | Type                                           | Description              |
| :---------- | :--------------------------------------------- | :----------------------- |
| `values`    | `S`                                            | The next values of state |
| `callback?` | (`prevState`: `S`, `nextState`: `S`) => `void` | calling after setState   |

#### Returns

`void`

#### Defined in

[src/react/component.ts:14](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L14)
