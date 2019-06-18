import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CornerActionArea } from './CornerActionArea'
import { CornerButton } from './CornerButton'
import { Button } from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <div>
      <h1>Default Button</h1>
      <Button onClick={action('clicked')}> Default </Button>
    </div>
  ))
  .add('inverted', () => (
    <div>
      <h1>Inverted Button</h1>
      <Button inverted onClick={action('clicked')}>
        Inverted
      </Button>
    </div>
  ))
  .add('selector', () => (
    <div>
      <h1>Selector Button</h1>
      <Button selector onClick={action('clicked')}>
        Selector
      </Button>
    </div>
  ))
  .add('corner', () => (
    <div>
      <h1>Desktop Corner Button</h1>
      <CornerActionArea>
        <CornerButton disabled onClick={action('clicked disabled')}>
          Corner Disabled
        </CornerButton>
        <CornerButton onClick={action('clicked 1')}> Corner 1 </CornerButton>
        <CornerButton onClick={action('clicked 2')}> Corner 2 </CornerButton>
      </CornerActionArea>
    </div>
  ))
  .add('corner mobile', () => (
    <div>
      <h1>Mobile Corner Button</h1>
      <h2>(view on screen width smaller or equal 600px)</h2>
      <CornerActionArea>
        <CornerButton disabled onClick={action('clicked')}>
          0
        </CornerButton>
        <CornerButton onClick={action('clicked')}> 1 </CornerButton>
      </CornerActionArea>
    </div>
  ))
