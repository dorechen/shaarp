import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import buttonNotes from './buttonNotes.md'
import cornerButtonNotes from './cornerButtonNotes.md'

import { CornerActionArea } from './CornerActionArea'
import { CornerButton } from './CornerButton'
import { Button } from './Button'
import { IconButton } from './IconButton'

storiesOf('Button', module)
  .add(
    'button',
    () => (
      <div>
        <h1>Default Button</h1>
        <Button onClick={action('clicked')}> Default </Button>
        <h1>Inverted Button</h1>
        <Button inverted onClick={action('clicked')}>
          Inverted
        </Button>
        <h1>Selector Button</h1>
        <Button selector onClick={action('clicked')}>
          Selector
        </Button>
        <Button selected fullWidth onClick={action('clicked')}>
          Selected Full Width
        </Button>
        <h1>Icon Button</h1>
        <IconButton>I</IconButton>
      </div>
    ),
    { notes: { markdown: buttonNotes } }
  )
  .add(
    'corner button',
    () => (
      <div>
        <h1>Corner Button</h1>
        <CornerActionArea>
          <CornerButton onClick={action('clicked 1')}> 1 </CornerButton>
          <CornerButton onClick={action('clicked 2')}> 2 </CornerButton>
        </CornerActionArea>
      </div>
    ),
    { notes: { markdown: cornerButtonNotes } }
  )
