# Single Selector Usage

## Attributes
Functional Attributes (compulsory)

Attribute Name | Type | Desc
--- | --- | ---
options | array or strings | option labels to display
selectedOption | string | current option that is selected
onOptionChange | function | function to run on option change
labelMapper | function | maps labels to keys if using a 


Styling Attributes

Attribute Name | Type | Desc
--- | --- | ---
numerical | boolean | forces button to be 48px wide


## Usage Example

Simple use case

```javascript
import { SingleSelector } from '@woorkio/shaarp'


const NumericalSingleSelectorStory = () => {
  const numberOptions = ['0', '20', '40', '60', '80', '100']
  const [selectedNumber, setSelectedNumber] = useState(null)

  return (
    <SingleSelector
      numerical
      options={numberOptions}
      selectedOption={selectedNumber}
      labelMapper={item => item}
      onOptionChange={item => setSelectedNumber(item)}
    />
  )
}
```




<details><summary>Another Example</summary>

```javascript
import { SingleSelector } from '@woorkio/shaarp'


const SingleSelectorStory = () => {
  const selectorOptions = [
    { key: '1', text: 'One' },
    { key: '2', text: 'Two' },
    { key: '3', text: 'Three' },
  ]
  const [selectedNumber, setSelectedOption] = useState('2')

  return (
    <SingleSelector
      options={selectorOptions.map(option => option.key)}
      selectedOption={selectedNumber}
      labelMapper={key => selectorOptions.find(option => option.key === key).text}
      onOptionChange={key => setSelectedOption(key)}
    />
  )
}
```
</details>

## Note
- Currently, styling does not change with mobile view