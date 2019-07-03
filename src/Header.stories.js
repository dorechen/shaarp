import { jsx } from '@emotion/core'

import { storiesOf } from '@storybook/react'

import { H1 } from './Header'

storiesOf('Header', module).add('Header', () => <H1>H1 Header</H1>, {
  notes: 'work in progress',
})
