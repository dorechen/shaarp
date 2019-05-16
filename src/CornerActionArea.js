import { jsx, css } from '@emotion/core'

const actionArea = css`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const CornerActionArea = props => <div css={[actionArea]} {...props} />
