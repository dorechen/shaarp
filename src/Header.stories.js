import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'

import headerNotes from './headerNotes.md'

import { H1, H2, H4 } from './Header'

storiesOf('Header', module).add(
  'Header',
  () => (
    <div>
      <H1>H1 Header</H1>
      <H2>H2 Header</H2>
      <H4>H4 Header</H4>
    </div>
  ),
  { notes: { markdown: headerNotes } }
)
