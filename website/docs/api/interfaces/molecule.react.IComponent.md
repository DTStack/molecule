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

#### Returns

`void`

#### Defined in

[src/react/component.ts:12](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L12)

---

### getState

▸ **getState**(): `S`

#### Returns

`S`

#### Defined in

[src/react/component.ts:13](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L13)

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

#### Defined in

[src/react/component.ts:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L19)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `callback` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Defined in

[src/react/component.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L11)

---

### render

▸ **render**(`nextState?`): `void`

#### Parameters

| Name         | Type |
| :----------- | :--- |
| `nextState?` | `S`  |

#### Returns

`void`

#### Defined in

[src/react/component.ts:10](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L10)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

#### Parameters

| Name        | Type                                           |
| :---------- | :--------------------------------------------- |
| `values`    | `S`                                            |
| `callback?` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Defined in

[src/react/component.ts:9](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L9)
