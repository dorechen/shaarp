import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CornerActionArea } from './CornerActionArea'
import { CornerButton } from './CornerButton'
import { Button } from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <div>
      <h1>Desktop Default Button</h1>
      <Button onClick={action('clicked')}> Default </Button>
      <h1>Mobile Default Button</h1>
      <Button mobile onClick={action('clicked')}>
        Default
      </Button>
    </div>
  ))
  .add('inverted', () => (
    <div>
      <h1>Desktop Inverted Button</h1>
      <Button inverted onClick={action('clicked')}>
        Inverted
      </Button>
      <h1>Mobile Inverted Button</h1>
      <Button inverted mobile onClick={action('clicked')}>
        Inverted
      </Button>
    </div>
  ))
  .add('selector', () => (
    <div>
      <h1>Desktop Selector Button</h1>
      <Button selector onClick={action('clicked')}>
        Selector
      </Button>
      <h1>Mobile Selector Button</h1>
      <Button selector mobile onClick={action('clicked')}>
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
      <CornerActionArea>
        <CornerButton mobile disabled onClick={action('clicked')}>
          0
        </CornerButton>
        <CornerButton mobile onClick={action('clicked')}>
          1
        </CornerButton>
      </CornerActionArea>
    </div>
  ))
