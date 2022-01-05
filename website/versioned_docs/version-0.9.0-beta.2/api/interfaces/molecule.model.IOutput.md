---
id: 'molecule.model.IOutput'
title: 'Interface: IOutput'
sidebar_label: 'IOutput'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IOutput

## Hierarchy

-   [`IPanelItem`](molecule.model.IPanelItem)

    ↳ **`IOutput`**

## Properties

### active

• `Optional` **active**: `boolean`

**`deprecated`** Tab doesn't need this property, but the type extends from tab need

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[active](molecule.model.IPanelItem#active)

#### Defined in

[src/components/tabs/tab.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L38)

---

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[closable](molecule.model.IPanelItem#closable)

#### Defined in

[src/components/tabs/tab.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L43)

---

### data

• `Optional` **data**: `any`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[data](molecule.model.IPanelItem#data)

#### Defined in

[src/model/workbench/panel.tsx:10](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L10)

---

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[editable](molecule.model.IPanelItem#editable)

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L47)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[icon](molecule.model.IPanelItem#icon)

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L49)

---

### id

• **id**: `UniqueId`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[id](molecule.model.IPanelItem#id)

#### Defined in

[src/components/tabs/tab.tsx:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L50)

---

### name

• `Optional` **name**: `string`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[name](molecule.model.IPanelItem#name)

#### Defined in

[src/components/tabs/tab.tsx:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L51)

---

### outputEditorInstance

• `Optional` **outputEditorInstance**: `IStandaloneCodeEditor`

#### Defined in

[src/model/workbench/panel.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L30)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `any`) => `ReactNode`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[renderPane](molecule.model.IPanelItem#renderpane)

#### Defined in

[src/components/tabs/tab.tsx:52](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L52)

---

### sortIndex

• `Optional` **sortIndex**: `number`

The sort of panel item

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[sortIndex](molecule.model.IPanelItem#sortindex)

#### Defined in

[src/model/workbench/panel.tsx:14](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L14)

---

### status

• `Optional` **status**: `"edited"` \| (`tab`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>) => `Element`

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[status](molecule.model.IPanelItem#status)

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/tab.tsx#L48)

---

### title

• `Optional` **title**: `string`

The same as HTMLElement title attribute

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[title](molecule.model.IPanelItem#title)

#### Defined in

[src/model/workbench/panel.tsx:8](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L8)

---

### toolbox

• `Optional` **toolbox**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Inherited from

[IPanelItem](molecule.model.IPanelItem).[toolbox](molecule.model.IPanelItem#toolbox)

#### Defined in

[src/model/workbench/panel.tsx:9](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L9)

## Methods

### onUpdateEditorIns

▸ `Optional` **onUpdateEditorIns**(`editorInstance`): `void`

#### Parameters

| Name             | Type                    |
| :--------------- | :---------------------- |
| `editorInstance` | `IStandaloneCodeEditor` |

#### Returns

`void`

#### Defined in

[src/model/workbench/panel.tsx:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/panel.tsx#L31)
