# Button Usage

## Attributes
Attributes of Button

Attribute Name | Type | Desc
--- | --- | ---
fullWidth | boolean | stretches width of the button to 100% of container
inverted | boolean | inverted style button
selector | boolean | selector style button
selected | boolean | selected style button, should be used with selector button

Attributes of IconButton

Attribute Name | Type | Desc
--- | --- | ---
light | boolean | light colour style of IconButton (default is black)

## Typical Default Button and IconButton Use

```javascript
import { Button, IconButton } from '@woorkio/shaarp'

<Button> Default </Button>

<IconButton> I </IconButton>
```

## Inverted and Selector Styles

```javascript
<Button inverted> Inverted </Button>

<Button selector selected={isSelected}> Selector </Button>

<Button selected> Selected Selector </Button>
```

## Full Width Button Style

```javascript
<Button fullWidth> Inverted </Button>
```

## Light IconButton Style

```javascript
<IconButton light> X </IconButton>
```

## Note

- Mobile View: `Button` style will change with screen width <= 600px
- IconButton does not change for mobile view