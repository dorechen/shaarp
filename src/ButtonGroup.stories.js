import { jsx } from '@emotion/core'
import { useState } from 'react'
import { storiesOf } from '@storybook/react'

import singleSelectorNotes from './singleSelectorNotes.md'

import { Icon } from './Icon'
import { InputHover } from './InputHover'
import { SingleSelector } from './SingleSelector'

const SingleSelectorStory = () => {
  const selectorOptions = [
    { key: '1', text: 'One' },
    { key: '2', text: 'Two' },
    { key: '3', text: 'Three' },
  ]
  const [selectedOption, setSelectedOption] = useState('2')
  return (
    <SingleSelector
      options={selectorOptions.map(o => o.key)}
      selectedOption={selectedOption}
      labelMapper={key => selectorOptions.find(o => o.key === key).text}
      onOptionChange={key => setSelectedOption(key)}
    />
  )
}

const SingleSelectorIconStory = () => {
  const selectorOptions = [
    { key: '1', text: 'One' },
    { key: '2', text: 'Two' },
    { key: '3', text: 'Three' },
    { key: '4', text: 'Four' },
  ]
  const [selectedOption, setSelectedOption] = useState('4')
  return (
    <SingleSelector
      options={selectorOptions.map(o => o.key)}
      selectedOption={selectedOption}
      labelMapper={key => selectorOptions.find(o => o.key === key).text}
      onOptionChange={key => setSelectedOption(key)}
    >
      <Icon light>#</Icon>
    </SingleSelector>
  )
}

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

const HoverSingleSelectorStory = () => {
  const hoverOptions = [
    { key: '1', text: 'Cat' },
    { key: '2', text: 'Dog' },
    { key: '3', text: 'Hamster' },
    { key: '4', text: 'Parakeet' },
  ]
  const [selectedHover, setSelectedHover] = useState(null)
  return (
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
  )
}

storiesOf('Button Group', module).add(
  'Single Selector',
  () => (
    <div>
      <h1>Selector (Single)</h1>
      <SingleSelectorStory />
      <h1>Selector with Icon (Single)</h1>
      <SingleSelectorIconStory />
      <h1>Numerical Selector (Single)</h1>
      <NumericalSingleSelectorStory />
      <h1>Selector (Single) with Hover</h1>
      <HoverSingleSelectorStory />
    </div>
  ),
  { notes: { markdown: singleSelectorNotes } }
)
