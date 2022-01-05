---
id: 'molecule.component.ISelectOptionProps'
title: 'Interface: ISelectOptionProps'
sidebar_label: 'ISelectOptionProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ISelectOptionProps

## Hierarchy

-   `ComponentProps`<`"div"`\>

    ↳ **`ISelectOptionProps`**

## Properties

### about

• `Optional` **about**: `string`

#### Inherited from

ComponentProps.about

#### Defined in

node_modules/@types/react/index.d.ts:1772

---

### accessKey

• `Optional` **accessKey**: `string`

#### Inherited from

ComponentProps.accessKey

#### Defined in

node_modules/@types/react/index.d.ts:1748

---

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

ComponentProps.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1555

---

### aria-atomic

• `Optional` **aria-atomic**: `boolean` \| `"true"` \| `"false"`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

ComponentProps.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1557

---

### aria-autocomplete

• `Optional` **aria-autocomplete**: `"none"` \| `"inline"` \| `"list"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

ComponentProps.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1562

---

### aria-busy

• `Optional` **aria-busy**: `boolean` \| `"true"` \| `"false"`

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

ComponentProps.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1564

---

### aria-checked

• `Optional` **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`see`** aria-pressed @see aria-selected.

#### Inherited from

ComponentProps.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:1569

---

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`see`** aria-colindex.

#### Inherited from

ComponentProps.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1574

---

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`see`** aria-colcount @see aria-colspan.

#### Inherited from

ComponentProps.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:1579

---

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-colindex @see aria-rowspan.

#### Inherited from

ComponentProps.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:1584

---

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`see`** aria-owns.

#### Inherited from

ComponentProps.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1589

---

### aria-current

• `Optional` **aria-current**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

ComponentProps.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1591

---

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`see`** aria-labelledby

#### Inherited from

ComponentProps.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1596

---

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`see`** aria-describedby.

#### Inherited from

ComponentProps.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1601

---

### aria-disabled

• `Optional` **aria-disabled**: `boolean` \| `"true"` \| `"false"`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`see`** aria-hidden @see aria-readonly.

#### Inherited from

ComponentProps.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:1606

---

### aria-dropeffect

• `Optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

**`deprecated`** in ARIA 1.1

#### Inherited from

ComponentProps.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1611

---

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`see`** aria-invalid @see aria-describedby.

#### Inherited from

ComponentProps.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:1616

---

### aria-expanded

• `Optional` **aria-expanded**: `boolean` \| `"true"` \| `"false"`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

ComponentProps.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1618

---

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

ComponentProps.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1623

---

### aria-grabbed

• `Optional` **aria-grabbed**: `boolean` \| `"true"` \| `"false"`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`deprecated`** in ARIA 1.1

#### Inherited from

ComponentProps.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1628

---

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"listbox"` \| `"tree"` \| `"grid"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

ComponentProps.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1630

---

### aria-hidden

• `Optional` **aria-hidden**: `boolean` \| `"true"` \| `"false"`

Indicates whether the element is exposed to an accessibility API.

**`see`** aria-disabled.

#### Inherited from

ComponentProps.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1635

---

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

**`see`** aria-errormessage.

#### Inherited from

ComponentProps.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1640

---

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

ComponentProps.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1642

---

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`see`** aria-labelledby.

#### Inherited from

ComponentProps.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1647

---

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`see`** aria-describedby.

#### Inherited from

ComponentProps.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1652

---

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

ComponentProps.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1654

---

### aria-live

• `Optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

ComponentProps.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1656

---

### aria-modal

• `Optional` **aria-modal**: `boolean` \| `"true"` \| `"false"`

Indicates whether an element is modal when displayed.

#### Inherited from

ComponentProps.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1658

---

### aria-multiline

• `Optional` **aria-multiline**: `boolean` \| `"true"` \| `"false"`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

ComponentProps.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1660

---

### aria-multiselectable

• `Optional` **aria-multiselectable**: `boolean` \| `"true"` \| `"false"`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

ComponentProps.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1662

---

### aria-orientation

• `Optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

ComponentProps.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1664

---

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`see`** aria-controls.

#### Inherited from

ComponentProps.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:1670

---

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

ComponentProps.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1675

---

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-setsize.

#### Inherited from

ComponentProps.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1680

---

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

**`see`** aria-checked @see aria-selected.

#### Inherited from

ComponentProps.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:1685

---

### aria-readonly

• `Optional` **aria-readonly**: `boolean` \| `"true"` \| `"false"`

Indicates that the element is not editable, but is otherwise operable.

**`see`** aria-disabled.

#### Inherited from

ComponentProps.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1690

---

### aria-relevant

• `Optional` **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`see`** aria-atomic.

#### Inherited from

ComponentProps.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1695

---

### aria-required

• `Optional` **aria-required**: `boolean` \| `"true"` \| `"false"`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

ComponentProps.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1697

---

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

ComponentProps.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1699

---

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`see`** aria-rowindex.

#### Inherited from

ComponentProps.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1704

---

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`see`** aria-rowcount @see aria-rowspan.

#### Inherited from

ComponentProps.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:1709

---

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-rowindex @see aria-colspan.

#### Inherited from

ComponentProps.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:1714

---

### aria-selected

• `Optional` **aria-selected**: `boolean` \| `"true"` \| `"false"`

Indicates the current "selected" state of various widgets.

**`see`** aria-checked @see aria-pressed.

#### Inherited from

ComponentProps.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:1719

---

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-posinset.

#### Inherited from

ComponentProps.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1724

---

### aria-sort

• `Optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

ComponentProps.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1726

---

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

ComponentProps.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1728

---

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

ComponentProps.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1730

---

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`see`** aria-valuetext.

#### Inherited from

ComponentProps.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1735

---

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

ComponentProps.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1737

---

### autoCapitalize

• `Optional` **autoCapitalize**: `string`

#### Inherited from

ComponentProps.autoCapitalize

#### Defined in

node_modules/@types/react/index.d.ts:1782

---

### autoCorrect

• `Optional` **autoCorrect**: `string`

#### Inherited from

ComponentProps.autoCorrect

#### Defined in

node_modules/@types/react/index.d.ts:1783

---

### autoSave

• `Optional` **autoSave**: `string`

#### Inherited from

ComponentProps.autoSave

#### Defined in

node_modules/@types/react/index.d.ts:1784

---

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

ComponentProps.children

#### Defined in

node_modules/@types/react/index.d.ts:1345

---

### className

• `Optional` **className**: `string`

#### Inherited from

ComponentProps.className

#### Defined in

node_modules/@types/react/index.d.ts:1749

---

### color

• `Optional` **color**: `string`

#### Inherited from

ComponentProps.color

#### Defined in

node_modules/@types/react/index.d.ts:1785

---

### contentEditable

• `Optional` **contentEditable**: `Booleanish` \| `"inherit"`

#### Inherited from

ComponentProps.contentEditable

#### Defined in

node_modules/@types/react/index.d.ts:1750

---

### contextMenu

• `Optional` **contextMenu**: `string`

#### Inherited from

ComponentProps.contextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1751

---

### css

• `Optional` **css**: `InterpolationWithTheme`<`any`\>

#### Inherited from

ComponentProps.css

#### Defined in

node_modules/@emotion/core/types/index.d.ts:84

---

### dangerouslySetInnerHTML

• `Optional` **dangerouslySetInnerHTML**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `__html` | `string` |

#### Inherited from

ComponentProps.dangerouslySetInnerHTML

#### Defined in

node_modules/@types/react/index.d.ts:1346

---

### datatype

• `Optional` **datatype**: `string`

#### Inherited from

ComponentProps.datatype

#### Defined in

node_modules/@types/react/index.d.ts:1773

---

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

#### Inherited from

ComponentProps.defaultChecked

#### Defined in

node_modules/@types/react/index.d.ts:1742

---

### defaultValue

• `Optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

ComponentProps.defaultValue

#### Defined in

node_modules/@types/react/index.d.ts:1743

---

### description

• `Optional` **description**: `string`

#### Defined in

[src/components/select/option.tsx:10](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/option.tsx#L10)

---

### dir

• `Optional` **dir**: `string`

#### Inherited from

ComponentProps.dir

#### Defined in

node_modules/@types/react/index.d.ts:1752

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/components/select/option.tsx:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/option.tsx#L11)

---

### draggable

• `Optional` **draggable**: `Booleanish`

#### Inherited from

ComponentProps.draggable

#### Defined in

node_modules/@types/react/index.d.ts:1753

---

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

ComponentProps.hidden

#### Defined in

node_modules/@types/react/index.d.ts:1754

---

### id

• `Optional` **id**: `string`

#### Inherited from

ComponentProps.id

#### Defined in

node_modules/@types/react/index.d.ts:1755

---

### inlist

• `Optional` **inlist**: `any`

#### Inherited from

ComponentProps.inlist

#### Defined in

node_modules/@types/react/index.d.ts:1774

---

### inputMode

• `Optional` **inputMode**: `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `"search"`

Hints at the type of data that might be entered by the user while editing the element or its contents

**`see`** https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

ComponentProps.inputMode

#### Defined in

node_modules/@types/react/index.d.ts:1800

---

### is

• `Optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

**`see`** https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

ComponentProps.is

#### Defined in

node_modules/@types/react/index.d.ts:1805

---

### itemID

• `Optional` **itemID**: `string`

#### Inherited from

ComponentProps.itemID

#### Defined in

node_modules/@types/react/index.d.ts:1789

---

### itemProp

• `Optional` **itemProp**: `string`

#### Inherited from

ComponentProps.itemProp

#### Defined in

node_modules/@types/react/index.d.ts:1786

---

### itemRef

• `Optional` **itemRef**: `string`

#### Inherited from

ComponentProps.itemRef

#### Defined in

node_modules/@types/react/index.d.ts:1790

---

### itemScope

• `Optional` **itemScope**: `boolean`

#### Inherited from

ComponentProps.itemScope

#### Defined in

node_modules/@types/react/index.d.ts:1787

---

### itemType

• `Optional` **itemType**: `string`

#### Inherited from

ComponentProps.itemType

#### Defined in

node_modules/@types/react/index.d.ts:1788

---

### key

• `Optional` **key**: `null` \| `Key`

#### Inherited from

ComponentProps.key

#### Defined in

node_modules/@types/react/index.d.ts:133

---

### lang

• `Optional` **lang**: `string`

#### Inherited from

ComponentProps.lang

#### Defined in

node_modules/@types/react/index.d.ts:1756

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/components/select/option.tsx:9](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/option.tsx#L9)

---

### onAbort

• `Optional` **onAbort**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAbort

#### Defined in

node_modules/@types/react/index.d.ts:1401

---

### onAbortCapture

• `Optional` **onAbortCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAbortCapture

#### Defined in

node_modules/@types/react/index.d.ts:1402

---

### onAnimationEnd

• `Optional` **onAnimationEnd**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationEnd

#### Defined in

node_modules/@types/react/index.d.ts:1531

---

### onAnimationEndCapture

• `Optional` **onAnimationEndCapture**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1532

---

### onAnimationIteration

• `Optional` **onAnimationIteration**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationIteration

#### Defined in

node_modules/@types/react/index.d.ts:1533

---

### onAnimationIterationCapture

• `Optional` **onAnimationIterationCapture**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationIterationCapture

#### Defined in

node_modules/@types/react/index.d.ts:1534

---

### onAnimationStart

• `Optional` **onAnimationStart**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationStart

#### Defined in

node_modules/@types/react/index.d.ts:1529

---

### onAnimationStartCapture

• `Optional` **onAnimationStartCapture**: `AnimationEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAnimationStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1530

---

### onAuxClick

• `Optional` **onAuxClick**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAuxClick

#### Defined in

node_modules/@types/react/index.d.ts:1447

---

### onAuxClickCapture

• `Optional` **onAuxClickCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onAuxClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1448

---

### onBeforeInput

• `Optional` **onBeforeInput**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onBeforeInput

#### Defined in

node_modules/@types/react/index.d.ts:1375

---

### onBeforeInputCapture

• `Optional` **onBeforeInputCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onBeforeInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1376

---

### onBlur

• `Optional` **onBlur**: `FocusEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onBlur

#### Defined in

node_modules/@types/react/index.d.ts:1369

---

### onBlurCapture

• `Optional` **onBlurCapture**: `FocusEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onBlurCapture

#### Defined in

node_modules/@types/react/index.d.ts:1370

---

### onCanPlay

• `Optional` **onCanPlay**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCanPlay

#### Defined in

node_modules/@types/react/index.d.ts:1403

---

### onCanPlayCapture

• `Optional` **onCanPlayCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCanPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1404

---

### onCanPlayThrough

• `Optional` **onCanPlayThrough**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCanPlayThrough

#### Defined in

node_modules/@types/react/index.d.ts:1405

---

### onCanPlayThroughCapture

• `Optional` **onCanPlayThroughCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCanPlayThroughCapture

#### Defined in

node_modules/@types/react/index.d.ts:1406

---

### onChange

• `Optional` **onChange**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onChange

#### Defined in

node_modules/@types/react/index.d.ts:1373

---

### onChangeCapture

• `Optional` **onChangeCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1374

---

### onClick

• `Optional` **onClick**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onClick

#### Defined in

node_modules/@types/react/index.d.ts:1449

---

### onClickCapture

• `Optional` **onClickCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1450

---

### onCompositionEnd

• `Optional` **onCompositionEnd**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1359

---

### onCompositionEndCapture

• `Optional` **onCompositionEndCapture**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1360

---

### onCompositionStart

• `Optional` **onCompositionStart**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionStart

#### Defined in

node_modules/@types/react/index.d.ts:1361

---

### onCompositionStartCapture

• `Optional` **onCompositionStartCapture**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1362

---

### onCompositionUpdate

• `Optional` **onCompositionUpdate**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1363

---

### onCompositionUpdateCapture

• `Optional` **onCompositionUpdateCapture**: `CompositionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCompositionUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1364

---

### onContextMenu

• `Optional` **onContextMenu**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onContextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1451

---

### onContextMenuCapture

• `Optional` **onContextMenuCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onContextMenuCapture

#### Defined in

node_modules/@types/react/index.d.ts:1452

---

### onCopy

• `Optional` **onCopy**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCopy

#### Defined in

node_modules/@types/react/index.d.ts:1351

---

### onCopyCapture

• `Optional` **onCopyCapture**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCopyCapture

#### Defined in

node_modules/@types/react/index.d.ts:1352

---

### onCut

• `Optional` **onCut**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCut

#### Defined in

node_modules/@types/react/index.d.ts:1353

---

### onCutCapture

• `Optional` **onCutCapture**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onCutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1354

---

### onDoubleClick

• `Optional` **onDoubleClick**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDoubleClick

#### Defined in

node_modules/@types/react/index.d.ts:1453

---

### onDoubleClickCapture

• `Optional` **onDoubleClickCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDoubleClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1454

---

### onDrag

• `Optional` **onDrag**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDrag

#### Defined in

node_modules/@types/react/index.d.ts:1455

---

### onDragCapture

• `Optional` **onDragCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragCapture

#### Defined in

node_modules/@types/react/index.d.ts:1456

---

### onDragEnd

• `Optional` **onDragEnd**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragEnd

#### Defined in

node_modules/@types/react/index.d.ts:1457

---

### onDragEndCapture

• `Optional` **onDragEndCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1458

---

### onDragEnter

• `Optional` **onDragEnter**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragEnter

#### Defined in

node_modules/@types/react/index.d.ts:1459

---

### onDragEnterCapture

• `Optional` **onDragEnterCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1460

---

### onDragExit

• `Optional` **onDragExit**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragExit

#### Defined in

node_modules/@types/react/index.d.ts:1461

---

### onDragExitCapture

• `Optional` **onDragExitCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragExitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1462

---

### onDragLeave

• `Optional` **onDragLeave**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragLeave

#### Defined in

node_modules/@types/react/index.d.ts:1463

---

### onDragLeaveCapture

• `Optional` **onDragLeaveCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1464

---

### onDragOver

• `Optional` **onDragOver**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragOver

#### Defined in

node_modules/@types/react/index.d.ts:1465

---

### onDragOverCapture

• `Optional` **onDragOverCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1466

---

### onDragStart

• `Optional` **onDragStart**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragStart

#### Defined in

node_modules/@types/react/index.d.ts:1467

---

### onDragStartCapture

• `Optional` **onDragStartCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDragStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1468

---

### onDrop

• `Optional` **onDrop**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDrop

#### Defined in

node_modules/@types/react/index.d.ts:1469

---

### onDropCapture

• `Optional` **onDropCapture**: `DragEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDropCapture

#### Defined in

node_modules/@types/react/index.d.ts:1470

---

### onDurationChange

• `Optional` **onDurationChange**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDurationChange

#### Defined in

node_modules/@types/react/index.d.ts:1407

---

### onDurationChangeCapture

• `Optional` **onDurationChangeCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onDurationChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1408

---

### onEmptied

• `Optional` **onEmptied**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEmptied

#### Defined in

node_modules/@types/react/index.d.ts:1409

---

### onEmptiedCapture

• `Optional` **onEmptiedCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEmptiedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1410

---

### onEncrypted

• `Optional` **onEncrypted**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEncrypted

#### Defined in

node_modules/@types/react/index.d.ts:1411

---

### onEncryptedCapture

• `Optional` **onEncryptedCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEncryptedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1412

---

### onEnded

• `Optional` **onEnded**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEnded

#### Defined in

node_modules/@types/react/index.d.ts:1413

---

### onEndedCapture

• `Optional` **onEndedCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onEndedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1414

---

### onError

• `Optional` **onError**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onError

#### Defined in

node_modules/@types/react/index.d.ts:1389

---

### onErrorCapture

• `Optional` **onErrorCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onErrorCapture

#### Defined in

node_modules/@types/react/index.d.ts:1390

---

### onFocus

• `Optional` **onFocus**: `FocusEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onFocus

#### Defined in

node_modules/@types/react/index.d.ts:1367

---

### onFocusCapture

• `Optional` **onFocusCapture**: `FocusEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onFocusCapture

#### Defined in

node_modules/@types/react/index.d.ts:1368

---

### onGotPointerCapture

• `Optional` **onGotPointerCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onGotPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1515

---

### onGotPointerCaptureCapture

• `Optional` **onGotPointerCaptureCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onGotPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1516

---

### onInput

• `Optional` **onInput**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onInput

#### Defined in

node_modules/@types/react/index.d.ts:1377

---

### onInputCapture

• `Optional` **onInputCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1378

---

### onInvalid

• `Optional` **onInvalid**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onInvalid

#### Defined in

node_modules/@types/react/index.d.ts:1383

---

### onInvalidCapture

• `Optional` **onInvalidCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onInvalidCapture

#### Defined in

node_modules/@types/react/index.d.ts:1384

---

### onKeyDown

• `Optional` **onKeyDown**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyDown

#### Defined in

node_modules/@types/react/index.d.ts:1393

---

### onKeyDownCapture

• `Optional` **onKeyDownCapture**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1394

---

### onKeyPress

• `Optional` **onKeyPress**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyPress

#### Defined in

node_modules/@types/react/index.d.ts:1395

---

### onKeyPressCapture

• `Optional` **onKeyPressCapture**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyPressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1396

---

### onKeyUp

• `Optional` **onKeyUp**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyUp

#### Defined in

node_modules/@types/react/index.d.ts:1397

---

### onKeyUpCapture

• `Optional` **onKeyUpCapture**: `KeyboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onKeyUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1398

---

### onLoad

• `Optional` **onLoad**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoad

#### Defined in

node_modules/@types/react/index.d.ts:1387

---

### onLoadCapture

• `Optional` **onLoadCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadCapture

#### Defined in

node_modules/@types/react/index.d.ts:1388

---

### onLoadStart

• `Optional` **onLoadStart**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadStart

#### Defined in

node_modules/@types/react/index.d.ts:1419

---

### onLoadStartCapture

• `Optional` **onLoadStartCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1420

---

### onLoadedData

• `Optional` **onLoadedData**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadedData

#### Defined in

node_modules/@types/react/index.d.ts:1415

---

### onLoadedDataCapture

• `Optional` **onLoadedDataCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadedDataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1416

---

### onLoadedMetadata

• `Optional` **onLoadedMetadata**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadedMetadata

#### Defined in

node_modules/@types/react/index.d.ts:1417

---

### onLoadedMetadataCapture

• `Optional` **onLoadedMetadataCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLoadedMetadataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1418

---

### onLostPointerCapture

• `Optional` **onLostPointerCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLostPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1517

---

### onLostPointerCaptureCapture

• `Optional` **onLostPointerCaptureCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onLostPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1518

---

### onMouseDown

• `Optional` **onMouseDown**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseDown

#### Defined in

node_modules/@types/react/index.d.ts:1471

---

### onMouseDownCapture

• `Optional` **onMouseDownCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1472

---

### onMouseEnter

• `Optional` **onMouseEnter**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseEnter

#### Defined in

node_modules/@types/react/index.d.ts:1473

---

### onMouseLeave

• `Optional` **onMouseLeave**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseLeave

#### Defined in

node_modules/@types/react/index.d.ts:1474

---

### onMouseMove

• `Optional` **onMouseMove**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseMove

#### Defined in

node_modules/@types/react/index.d.ts:1475

---

### onMouseMoveCapture

• `Optional` **onMouseMoveCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1476

---

### onMouseOut

• `Optional` **onMouseOut**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseOut

#### Defined in

node_modules/@types/react/index.d.ts:1477

---

### onMouseOutCapture

• `Optional` **onMouseOutCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1478

---

### onMouseOver

• `Optional` **onMouseOver**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseOver

#### Defined in

node_modules/@types/react/index.d.ts:1479

---

### onMouseOverCapture

• `Optional` **onMouseOverCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1480

---

### onMouseUp

• `Optional` **onMouseUp**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseUp

#### Defined in

node_modules/@types/react/index.d.ts:1481

---

### onMouseUpCapture

• `Optional` **onMouseUpCapture**: `MouseEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onMouseUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1482

---

### onPaste

• `Optional` **onPaste**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPaste

#### Defined in

node_modules/@types/react/index.d.ts:1355

---

### onPasteCapture

• `Optional` **onPasteCapture**: `ClipboardEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPasteCapture

#### Defined in

node_modules/@types/react/index.d.ts:1356

---

### onPause

• `Optional` **onPause**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPause

#### Defined in

node_modules/@types/react/index.d.ts:1421

---

### onPauseCapture

• `Optional` **onPauseCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPauseCapture

#### Defined in

node_modules/@types/react/index.d.ts:1422

---

### onPlay

• `Optional` **onPlay**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPlay

#### Defined in

node_modules/@types/react/index.d.ts:1423

---

### onPlayCapture

• `Optional` **onPlayCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1424

---

### onPlaying

• `Optional` **onPlaying**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPlaying

#### Defined in

node_modules/@types/react/index.d.ts:1425

---

### onPlayingCapture

• `Optional` **onPlayingCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPlayingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1426

---

### onPointerCancel

• `Optional` **onPointerCancel**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerCancel

#### Defined in

node_modules/@types/react/index.d.ts:1505

---

### onPointerCancelCapture

• `Optional` **onPointerCancelCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1506

---

### onPointerDown

• `Optional` **onPointerDown**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerDown

#### Defined in

node_modules/@types/react/index.d.ts:1499

---

### onPointerDownCapture

• `Optional` **onPointerDownCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1500

---

### onPointerEnter

• `Optional` **onPointerEnter**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerEnter

#### Defined in

node_modules/@types/react/index.d.ts:1507

---

### onPointerEnterCapture

• `Optional` **onPointerEnterCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1508

---

### onPointerLeave

• `Optional` **onPointerLeave**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerLeave

#### Defined in

node_modules/@types/react/index.d.ts:1509

---

### onPointerLeaveCapture

• `Optional` **onPointerLeaveCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1510

---

### onPointerMove

• `Optional` **onPointerMove**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerMove

#### Defined in

node_modules/@types/react/index.d.ts:1501

---

### onPointerMoveCapture

• `Optional` **onPointerMoveCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1502

---

### onPointerOut

• `Optional` **onPointerOut**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerOut

#### Defined in

node_modules/@types/react/index.d.ts:1513

---

### onPointerOutCapture

• `Optional` **onPointerOutCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1514

---

### onPointerOver

• `Optional` **onPointerOver**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerOver

#### Defined in

node_modules/@types/react/index.d.ts:1511

---

### onPointerOverCapture

• `Optional` **onPointerOverCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1512

---

### onPointerUp

• `Optional` **onPointerUp**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerUp

#### Defined in

node_modules/@types/react/index.d.ts:1503

---

### onPointerUpCapture

• `Optional` **onPointerUpCapture**: `PointerEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onPointerUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1504

---

### onProgress

• `Optional` **onProgress**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onProgress

#### Defined in

node_modules/@types/react/index.d.ts:1427

---

### onProgressCapture

• `Optional` **onProgressCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onProgressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1428

---

### onRateChange

• `Optional` **onRateChange**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onRateChange

#### Defined in

node_modules/@types/react/index.d.ts:1429

---

### onRateChangeCapture

• `Optional` **onRateChangeCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onRateChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1430

---

### onReset

• `Optional` **onReset**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onReset

#### Defined in

node_modules/@types/react/index.d.ts:1379

---

### onResetCapture

• `Optional` **onResetCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onResetCapture

#### Defined in

node_modules/@types/react/index.d.ts:1380

---

### onScroll

• `Optional` **onScroll**: `UIEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onScroll

#### Defined in

node_modules/@types/react/index.d.ts:1521

---

### onScrollCapture

• `Optional` **onScrollCapture**: `UIEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onScrollCapture

#### Defined in

node_modules/@types/react/index.d.ts:1522

---

### onSeeked

• `Optional` **onSeeked**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSeeked

#### Defined in

node_modules/@types/react/index.d.ts:1431

---

### onSeekedCapture

• `Optional` **onSeekedCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSeekedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1432

---

### onSeeking

• `Optional` **onSeeking**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSeeking

#### Defined in

node_modules/@types/react/index.d.ts:1433

---

### onSeekingCapture

• `Optional` **onSeekingCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSeekingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1434

---

### onSelect

• `Optional` **onSelect**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSelect

#### Defined in

node_modules/@types/react/index.d.ts:1485

---

### onSelectCapture

• `Optional` **onSelectCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSelectCapture

#### Defined in

node_modules/@types/react/index.d.ts:1486

---

### onStalled

• `Optional` **onStalled**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onStalled

#### Defined in

node_modules/@types/react/index.d.ts:1435

---

### onStalledCapture

• `Optional` **onStalledCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onStalledCapture

#### Defined in

node_modules/@types/react/index.d.ts:1436

---

### onSubmit

• `Optional` **onSubmit**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSubmit

#### Defined in

node_modules/@types/react/index.d.ts:1381

---

### onSubmitCapture

• `Optional` **onSubmitCapture**: `FormEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSubmitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1382

---

### onSuspend

• `Optional` **onSuspend**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSuspend

#### Defined in

node_modules/@types/react/index.d.ts:1437

---

### onSuspendCapture

• `Optional` **onSuspendCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onSuspendCapture

#### Defined in

node_modules/@types/react/index.d.ts:1438

---

### onTimeUpdate

• `Optional` **onTimeUpdate**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTimeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1439

---

### onTimeUpdateCapture

• `Optional` **onTimeUpdateCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTimeUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1440

---

### onTouchCancel

• `Optional` **onTouchCancel**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchCancel

#### Defined in

node_modules/@types/react/index.d.ts:1489

---

### onTouchCancelCapture

• `Optional` **onTouchCancelCapture**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1490

---

### onTouchEnd

• `Optional` **onTouchEnd**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchEnd

#### Defined in

node_modules/@types/react/index.d.ts:1491

---

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1492

---

### onTouchMove

• `Optional` **onTouchMove**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchMove

#### Defined in

node_modules/@types/react/index.d.ts:1493

---

### onTouchMoveCapture

• `Optional` **onTouchMoveCapture**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1494

---

### onTouchStart

• `Optional` **onTouchStart**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchStart

#### Defined in

node_modules/@types/react/index.d.ts:1495

---

### onTouchStartCapture

• `Optional` **onTouchStartCapture**: `TouchEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTouchStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1496

---

### onTransitionEnd

• `Optional` **onTransitionEnd**: `TransitionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTransitionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1537

---

### onTransitionEndCapture

• `Optional` **onTransitionEndCapture**: `TransitionEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onTransitionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1538

---

### onVolumeChange

• `Optional` **onVolumeChange**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onVolumeChange

#### Defined in

node_modules/@types/react/index.d.ts:1441

---

### onVolumeChangeCapture

• `Optional` **onVolumeChangeCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onVolumeChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1442

---

### onWaiting

• `Optional` **onWaiting**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onWaiting

#### Defined in

node_modules/@types/react/index.d.ts:1443

---

### onWaitingCapture

• `Optional` **onWaitingCapture**: `ReactEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onWaitingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1444

---

### onWheel

• `Optional` **onWheel**: `WheelEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onWheel

#### Defined in

node_modules/@types/react/index.d.ts:1525

---

### onWheelCapture

• `Optional` **onWheelCapture**: `WheelEventHandler`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.onWheelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1526

---

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

ComponentProps.placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1757

---

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

ComponentProps.prefix

#### Defined in

node_modules/@types/react/index.d.ts:1775

---

### property

• `Optional` **property**: `string`

#### Inherited from

ComponentProps.property

#### Defined in

node_modules/@types/react/index.d.ts:1776

---

### radioGroup

• `Optional` **radioGroup**: `string`

#### Inherited from

ComponentProps.radioGroup

#### Defined in

node_modules/@types/react/index.d.ts:1766

---

### ref

• `Optional` **ref**: `LegacyRef`<`HTMLDivElement`\>

#### Inherited from

ComponentProps.ref

#### Defined in

node_modules/@types/react/index.d.ts:139

---

### resource

• `Optional` **resource**: `string`

#### Inherited from

ComponentProps.resource

#### Defined in

node_modules/@types/react/index.d.ts:1777

---

### results

• `Optional` **results**: `number`

#### Inherited from

ComponentProps.results

#### Defined in

node_modules/@types/react/index.d.ts:1791

---

### role

• `Optional` **role**: `string`

#### Inherited from

ComponentProps.role

#### Defined in

node_modules/@types/react/index.d.ts:1769

---

### security

• `Optional` **security**: `string`

#### Inherited from

ComponentProps.security

#### Defined in

node_modules/@types/react/index.d.ts:1792

---

### slot

• `Optional` **slot**: `string`

#### Inherited from

ComponentProps.slot

#### Defined in

node_modules/@types/react/index.d.ts:1758

---

### spellCheck

• `Optional` **spellCheck**: `Booleanish`

#### Inherited from

ComponentProps.spellCheck

#### Defined in

node_modules/@types/react/index.d.ts:1759

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

ComponentProps.style

#### Defined in

node_modules/@types/react/index.d.ts:1760

---

### suppressContentEditableWarning

• `Optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

ComponentProps.suppressContentEditableWarning

#### Defined in

node_modules/@types/react/index.d.ts:1744

---

### suppressHydrationWarning

• `Optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

ComponentProps.suppressHydrationWarning

#### Defined in

node_modules/@types/react/index.d.ts:1745

---

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

ComponentProps.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1761

---

### title

• `Optional` **title**: `string`

#### Inherited from

ComponentProps.title

#### Defined in

node_modules/@types/react/index.d.ts:1762

---

### translate

• `Optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

ComponentProps.translate

#### Defined in

node_modules/@types/react/index.d.ts:1763

---

### typeof

• `Optional` **typeof**: `string`

#### Inherited from

ComponentProps.typeof

#### Defined in

node_modules/@types/react/index.d.ts:1778

---

### unselectable

• `Optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

ComponentProps.unselectable

#### Defined in

node_modules/@types/react/index.d.ts:1793

---

### value

• `Optional` **value**: `string`

#### Defined in

[src/components/select/option.tsx:8](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/option.tsx#L8)

---

### vocab

• `Optional` **vocab**: `string`

#### Inherited from

ComponentProps.vocab

#### Defined in

node_modules/@types/react/index.d.ts:1779
