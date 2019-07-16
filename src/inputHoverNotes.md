# InputHover Usage

## Attributes
Attributes of InputHover

Attribute Name | Type | Desc
--- | --- | ---
label | string | the string displayed on the component
hasSelection | boolean | used for styling change when a selection has been made

## Typical InputHover Use

```javascript
import { InputHover, SingleSelector } from '@woorkio/shaarp'

...

<InputHover
  label={
    selectedHover === null
      ? 'Pick your favourite'
      : hoverOptions.find(o => o.key === selectedHover).text
  }
  hasSelection={selectedHover !== null}
>
  <SingleSelector
    options={hoverOptions.map(o => o.key)}
    selectedOption={selectedHover}
    labelMapper={key => hoverOptions.find(o => o.key === key).text}
    onOptionChange={key => setSelectedHover(key)}
  />
</InputHover>
```

## Note
- `InputHover` will display its children when cursor is hovering over it
- Currently, styling does not change with mobile view