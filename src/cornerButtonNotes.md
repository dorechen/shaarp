# Corner Button Usage

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