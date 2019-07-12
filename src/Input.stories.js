import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import inputNotes from './inputNotes.md'
import textAreaNotes from './textAreaNotes.md'

import { Input } from './Input'
import { TextArea } from './TextArea'

const example = 'Text area\nput notes here!\n:)'

storiesOf('Input Field', module)
  .add(
    'Input',
    () => (
      <div>
        <h1>Big Input</h1>
        <Input
          big
          onClick={action('big input selected')}
          placeholder="Big Input with placeholder"
        />
        <Input
          big
          onClick={action('big input selected')}
          defaultValue="Big Input with a value"
        />
        <h1>Default Input</h1>
        <Input
          onClick={action('text input selected')}
          placeholder="Text Input with placeholder"
        />
        <Input
          onClick={action('text input selected')}
          defaultValue="Text Input with a value"
        />
        <h1>Dark Input</h1>
        <Input
          big
          dark
          onClick={action('dark input selected')}
          defaultValue="Dark Big Text Input"
        />
        <Input
          dark
          onClick={action('dark input selected')}
          placeholder="Dark Text Input"
        />
      </div>
    ),
    { notes: { markdown: inputNotes } }
  )
  .add(
    'TextArea',
    () => (
      <div>
        <h1>TextArea Input</h1>
        <TextArea
          onClick={action('text area selected')}
          placeholder="Text area with placeholder"
        />
        <TextArea
          onClick={action('text area selected')}
          defaultValue="Text area with a value"
        />
        <TextArea
          onClick={action('text area selected')}
          defaultValue={example}
        />
      </div>
    ),
    { notes: { markdown: textAreaNotes } }
  )
