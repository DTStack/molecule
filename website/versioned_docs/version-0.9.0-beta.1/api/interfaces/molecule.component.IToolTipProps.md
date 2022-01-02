---
id: 'molecule.component.IToolTipProps'
title: 'Interface: IToolTipProps'
sidebar_label: 'IToolTipProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IToolTipProps

## Hierarchy

-   `TooltipProps`

    ↳ **`IToolTipProps`**

## Properties

### align

• `Optional` **align**: `AlignType`

#### Inherited from

TooltipProps.align

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:27

---

### animation

• `Optional` **animation**: `string`

**`deprecated`** Use `motion` instead

#### Inherited from

TooltipProps.animation

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:12

---

### arrowContent

• `Optional` **arrowContent**: `ReactNode`

#### Inherited from

TooltipProps.arrowContent

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:28

---

### builtinPlacements

• `Optional` **builtinPlacements**: `BuildInPlacements`

#### Inherited from

TooltipProps.builtinPlacements

#### Defined in

node_modules/rc-trigger/lib/index.d.ts:19

---

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Inherited from

TooltipProps.children

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:30

---

### defaultVisible

• `Optional` **defaultVisible**: `boolean`

#### Inherited from

TooltipProps.defaultVisible

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:6

---

### destroyTooltipOnHide

• `Optional` **destroyTooltipOnHide**: `boolean` \| { `keepParent?`: `boolean` }

#### Inherited from

TooltipProps.destroyTooltipOnHide

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:24

---

### id

• `Optional` **id**: `string`

#### Inherited from

TooltipProps.id

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:29

---

### motion

• `Optional` **motion**: `CSSMotionProps`

Config popup motion

#### Inherited from

TooltipProps.motion

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:14

---

### mouseEnterDelay

• `Optional` **mouseEnterDelay**: `number`

#### Inherited from

TooltipProps.mouseEnterDelay

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:21

---

### mouseLeaveDelay

• `Optional` **mouseLeaveDelay**: `number`

#### Inherited from

TooltipProps.mouseLeaveDelay

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:22

---

### overlay

• **overlay**: `ReactNode` \| () => `ReactNode`

#### Inherited from

TooltipProps.overlay

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:17

---

### overlayClassName

• `Optional` **overlayClassName**: `string`

#### Inherited from

TooltipProps.overlayClassName

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:19

---

### overlayInnerStyle

• `Optional` **overlayInnerStyle**: `CSSProperties`

#### Inherited from

TooltipProps.overlayInnerStyle

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:32

---

### overlayStyle

• `Optional` **overlayStyle**: `CSSProperties`

#### Inherited from

TooltipProps.overlayStyle

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:18

---

### placement

• `Optional` **placement**: `string`

#### Inherited from

TooltipProps.placement

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:8

---

### popupVisible

• `Optional` **popupVisible**: `boolean`

#### Inherited from

TooltipProps.popupVisible

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:31

---

### prefixCls

• `Optional` **prefixCls**: `string`

#### Inherited from

TooltipProps.prefixCls

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:20

---

### transitionName

• `Optional` **transitionName**: `string`

**`deprecated`** Use `motion` instead

#### Inherited from

TooltipProps.transitionName

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:10

---

### trigger

• `Optional` **trigger**: `string` \| `string`[]

#### Inherited from

TooltipProps.trigger

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:5

---

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

TooltipProps.visible

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:7

---

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

TooltipProps.zIndex

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:33

## Methods

### afterVisibleChange

▸ `Optional` **afterVisibleChange**(`visible`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

TooltipProps.afterVisibleChange

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:16

---

### getTooltipContainer

▸ `Optional` **getTooltipContainer**(`node`): `HTMLElement`

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `node` | `HTMLElement` |

#### Returns

`HTMLElement`

#### Inherited from

TooltipProps.getTooltipContainer

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:23

---

### onPopupAlign

▸ `Optional` **onPopupAlign**(`element`, `align`): `void`

#### Parameters

| Name      | Type          |
| :-------- | :------------ |
| `element` | `HTMLElement` |
| `align`   | `AlignType`   |

#### Returns

`void`

#### Inherited from

TooltipProps.onPopupAlign

#### Defined in

node_modules/rc-trigger/lib/index.d.ts:31

---

### onVisibleChange

▸ `Optional` **onVisibleChange**(`visible`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

TooltipProps.onVisibleChange

#### Defined in

node_modules/rc-tooltip/lib/Tooltip.d.ts:15
