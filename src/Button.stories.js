import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { theme } from './theme'

import { CornerActionArea } from './CornerActionArea'
import { CornerButton } from './CornerButton'
import { Button } from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Default Button</h1>
      <Button onClick={action('clicked')}> Default </Button>
      <h1>Mobile Default Button</h1>
      <Button mobile onClick={action('clicked')}>
        Default
      </Button>
    </ThemeProvider>
  ))
  .add('inverted', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Inverted Button</h1>
      <Button inverted onClick={action('clicked')}>
        Inverted
      </Button>
      <h1>Mobile Inverted Button</h1>
      <Button inverted mobile onClick={action('clicked')}>
        Inverted
      </Button>
    </ThemeProvider>
  ))
  .add('selector', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Selector Button</h1>
      <Button selector onClick={action('clicked')}>
        Selector
      </Button>
      <h1>Mobile Selector Button</h1>
      <Button selector mobile onClick={action('clicked')}>
        Selector
      </Button>
    </ThemeProvider>
  ))
  .add('corner', () => (
    <ThemeProvider theme={theme}>
      <h1>Desktop Corner Button</h1>
      <CornerActionArea>
        <CornerButton disabled onClick={action('clicked disabled')}>
          Corner Disabled
        </CornerButton>
        <CornerButton onClick={action('clicked 1')}> Corner 1 </CornerButton>
        <CornerButton onClick={action('clicked 2')}> Corner 2 </CornerButton>
      </CornerActionArea>
    </ThemeProvider>
  ))
  .add('corner mobile', () => (
    <ThemeProvider theme={theme}>
      <h1>Mobile Corner Button</h1>
      <CornerActionArea>
        <CornerButton mobile disabled onClick={action('clicked')}>
          0
        </CornerButton>
        <CornerButton mobile onClick={action('clicked')}>
          1
        </CornerButton>
      </CornerActionArea>
    </ThemeProvider>
  ))
