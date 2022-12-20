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

[react/component.ts:33](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L33)

---

### getState

▸ **getState**(): `S`

Get the Component state

#### Returns

`S`

#### Defined in

[react/component.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L37)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `listener` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Defined in

[react/component.ts:24](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L24)

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

#### Defined in

[react/component.ts:29](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L29)

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

[react/component.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L19)

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

[react/component.ts:14](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L14)
