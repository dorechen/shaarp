import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { theme } from './theme'

import { Input } from './Input'
import { TextArea } from './TextArea'

const example = 'Text area\nput notes here!\n:)'

storiesOf('Input Field', module)
  .add('Title', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Title Input</h1>
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
      <h1>Mobile Title Input</h1>
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
    </ThemeProvider>
  ))
  .add('Text', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Text Input</h1>
      <Input
        onClick={action('text input selected')}
        placeholder="Text Input with placeholder"
      />
      <Input
        onClick={action('text input selected')}
        defaultValue="Text Input with a value"
      />
      <h1>Mobile Text Input</h1>
      <Input
        mobile
        onClick={action('Mobile title input selected')}
        placeholder="Mobile Title Input with placeholder"
      />
      <Input
        mobile
        onClick={action('Mobile title input selected')}
        defaultValue="Mobile Title Input with a value"
      />
    </ThemeProvider>
  ))
  .add('TextArea', () => (
    <ThemeProvider theme={theme}>
      <h1>TextArea Input</h1>
      <TextArea
        onClick={action('text area selected')}
        placeholder="Text area with placeholder"
      />
      <TextArea
        onClick={action('text area selected')}
        defaultValue="Text area with a value"
      />
      <TextArea onClick={action('text area selected')} defaultValue={example} />
    </ThemeProvider>
  ))
