import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'

import { H1, H2 } from './Header'

storiesOf('Header', module).add(
  'Header',
  () => (
    <div>
      <H1>H1 Header</H1>
      <H2>H2 Header</H2>
    </div>
  ),
  {
    notes: 'work in progress',
  }
)
