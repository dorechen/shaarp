# Corner Button Usage

## Attributes
Attributes of CornerButton

Attribute Name | Type | Desc
--- | --- | ---
fullWidth | boolean | (mobile view only) stretches width of the corner button to 100% of container

Attributes of CornerActionArea

Attribute Name | Type | Desc
--- | --- | ---
topRight | boolean | places children at the top right corner of its container (default is bottom right corner) 

## Typical use

```javascript
import { CornerButton, CornerActionArea } from '@woorkio/shaarp'

<CornerActionArea>
  <CornerButton> 1 </CornerButton>
  <CornerButton> 2 </CornerButton>
</CornerActionArea>
```

## Note
- `CornerButton` should be wrapped in `CornerActionArea` for positioning.
- Mobile View: `Corner Button` style and `CornerActionArea` positioning will change with screen width <= 600px