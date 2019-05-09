import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CornerButton } from './CornerButton'
import { Button } from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello Button 😎 👍 💯</Button>
  ))
  .add('inverted', () => (
    <Button inverted onClick={action('clicked')}>
      Inverted
    </Button>
  ))
  .add('selector', () => (
    <Button selector onClick={action('clicked')}>
      Selector Button
    </Button>
  ))
  .add('corner', () => (
    <CornerButton onClick={action('clicked')}> Corner </CornerButton>
  ))
  .add('corner disabled', () => (
    <CornerButton disabled onClick={action('clicked')}>
      Corner Disabled
    </CornerButton>
  ))
  .add('corner mobile', () => (
    <CornerButton mobile onClick={action('clicked')}>
      M
    </CornerButton>
  ))
