import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './Input'
import { TextArea } from './TextArea'

storiesOf('Input Field', module)
  .add('Title', () => (
    <div>
      <Input
        title
        onClick={action('title input selected')}
        placeholder="Title Input with placeholder"
      />
      <Input
        title
        onClick={action('title input selected')}
        defaultValue="Title Input with a value"
      />

      <Input
        title
        mobile
        onClick={action('Mobile title input selected')}
        placeholder="Mobile Title Input with placeholder"
      />
      <Input
        title
        mobile
        onClick={action('Mobile title input selected')}
        defaultValue="Mobile Title Input with a value"
      />
    </div>
  ))
  .add('Text', () => (
    <div>
      <Input
        text
        onClick={action('text input selected')}
        placeholder="Text Input with placeholder"
      />
      <Input
        text
        onClick={action('text input selected')}
        defaultValue="Text Input with a value"
      />

      <Input
        text
        mobile
        onClick={action('Mobile title input selected')}
        placeholder="Mobile Title Input with placeholder"
      />
      <Input
        text
        mobile
        onClick={action('Mobile title input selected')}
        defaultValue="Mobile Title Input with a value"
      />
    </div>
  ))
  .add('TextArea', () => (
    <div>
      <TextArea
        onClick={action('text area selected')}
        placeholder="Text area with placeholder"
      />
      <TextArea
        onClick={action('text area selected')}
        defaultValue="Text area with a value"
      />
    </div>
  ))
