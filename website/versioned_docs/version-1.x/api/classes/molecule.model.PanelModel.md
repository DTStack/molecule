---
id: 'molecule.model.PanelModel'
title: 'Class: PanelModel'
sidebar_label: 'PanelModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).PanelModel

## Implements

-   [`IPanel`](../interfaces/molecule.model.IPanel)

## Constructors

### constructor

• **new PanelModel**(`current?`, `data?`, `toolbox?`)

#### Parameters

| Name      | Type                                                                                    | Default value |
| :-------- | :-------------------------------------------------------------------------------------- | :------------ |
| `current` | `null` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>               | `null`        |
| `data`    | [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>[]                       | `[]`          |
| `toolbox` | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[] | `[]`          |

#### Defined in

[model/workbench/panel.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L43)

## Properties

### current

• **current**: `null` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Implementation of

[IPanel](../interfaces/molecule.model.IPanel).[current](../interfaces/molecule.model.IPanel#current)

#### Defined in

[model/workbench/panel.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L37)

---

### data

• **data**: [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>[]

#### Implementation of

[IPanel](../interfaces/molecule.model.IPanel).[data](../interfaces/molecule.model.IPanel#data)

#### Defined in

[model/workbench/panel.tsx:38](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L38)

---

### hidden

• **hidden**: `boolean` = `false`

#### Defined in

[model/workbench/panel.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L39)

---

### maximize

• **maximize**: `boolean` = `false`

#### Defined in

[model/workbench/panel.tsx:40](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L40)

---

### toolbox

• **toolbox**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[]

#### Implementation of

[IPanel](../interfaces/molecule.model.IPanel).[toolbox](../interfaces/molecule.model.IPanel#toolbox)

#### Defined in

[model/workbench/panel.tsx:41](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L41)
