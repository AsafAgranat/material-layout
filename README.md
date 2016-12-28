# Material layout

Material Design layout SASS Framework

## Installation

```
meteor add noxu:material-layout
```

## Docs

Meteor Material's responsive CSS layout is a fork of Angular Material layout.

###<a name="docs-container-elements"></a> Container elements
The layout system is based upon element attributes rather than CSS classes. Attributes provide an easy way to set a value (eg `layout="row"`), and additionally helps us separate concerns: attributes define layout, and classes define styling.

```html
<div layout="row">
  <div>I'm left.</div>
  <div>I'm right.</div>
</div>
<div layout="column">
  <div>I'm above.</div>
  <div>I'm below.</div>
</div>
```

See [Layout Options](#docs-options) for information on responsive layouts and other options.


####<a id="docs-grid-system"></a> Grid System
To customize the size and position of elements in a layout, use the `flex`, `offset`, and `flex-order` attributes.

#### Flex Attribute

```html
<div layout="row">
  <div flex>
    [flex]
  </div>
  <div flex>
    [flex]
  </div>
  <div flex hide-sm>
    [flex]
  </div>
</div>
```

Add the `flex` attribute to a layout's child element, and it will flex (stretch) to fill the available area.

#### Flex Percent Values

```html
<div layout="row" layout-wrap>
  <div flex="33">
    [flex="33"]
  </div>
  <div flex="55">
    [flex="55"]
  </div>
  <div flex>
    [flex]
  </div>
  <div flex="66">
    [flex="66"]
  </div>
  <div flex="33">
    [flex="33"]
  </div>
</div>
```

A layout child's `flex` attribute can be given an integer value from 0-100. The element will stretch to the percentage of available space matching the value.

The `flex` attribute value is restricted to 33, 66, and multiples of five.
For example: `flex="5"`, `flex="20"`, `"flex="33"`, `flex="50"`, `flex="66"`, `flex="75"`, ....

See the [options section](#docs-options) for more information on responsive flex attributes.

#### Flex Order Attribute

```html
<div layout="row" layout-margin>
  <div flex flex-order="3">
    [flex-order="3"]
  </div>
  <div flex flex-order="2">
    [flex-order="2"]
  </div>
  <div flex flex-order="1">
    [flex-order="1"]
  </div>
</div>
```

Add the `flex-order` attribute to a layout child to set its position within the layout. Any value from 0-9 is accepted.

|Attribute|Description|
| ------      | -----------         |
| `flex-order`  | Sets element order. |
|`flex-order-sm`|	Sets element order on devices less than 600px wide. |
| `flex-order-gt-sm` |	Sets element order on devices greater than 600px wide. |
|`flex-order-md` |	Sets element order on devices between 600px and 960px wide. |
| `flex-order-gt-md` |	Sets element order on devices greater than 960px wide. |
|`flex-order-lg` |	Sets element order on devices between 960px and 1200px wide.|
|`flex-order-gt-lg` |	Sets element order on devices greater than 1200px wide.|

#### <a id="docs-options"></a> Options

The `layout-align` attribute takes two words. The first word says how the children will be aligned in the layout's direction, and the second word says how the children will be aligned perpindicular to the layout's direction.

Only one word is required for the attribute. For example, `layout="row" layout-align="center"` would make the elements center horizontally and use the default behavior vertically.

`layout="column" layout-align="center end"` would make children align along the center vertically and along the end (right) horizontally.

The layout align attribute first words can be  `start`, `center`, `end`, `space-around` or `space-between`. The second word can be `start`, `center` or `end`.



|Attribute|Description|
|---------|-----------|
|`layout-align`	|Sets child alignment.|
|`layout-align-sm`|	Sets child alignment on devices less than 600px wide.|
|`layout-align-gt-sm`	|Sets child alignment on devices greater than 600px wide.|
|`layout-align-md`|	Sets child alignment on devices between 600px and 960px wide.|
|`layout-align-gt-md`|	Sets child alignment on devices greater than 960px wide.|
|`layout-align-lg`|	Sets child alignment on devices between 960px and 1200px wide.|
|`layout-align-gt-lg`	|Sets child alignment on devices greater than 1200px wide.|
