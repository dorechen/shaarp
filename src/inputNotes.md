# Input Usage

## Attributes
Attributes of Input

Attribute Name | Type | Desc
--- | --- | ---
big | boolean | bigger input component, height and text size increases
dark | boolean | dark style input

## Typical Input Use

```javascript
import { Input } from '@woorkio/shaarp'

<Input
  big
  defaultValue="Big Input with a value"
/>

<Input
  defaultValue="Text Input with a value"
/>
```

## Note
- Mobile View: `Input` style will change with screen width <= 600px