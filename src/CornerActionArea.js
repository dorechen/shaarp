import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const actionArea = css`
  position: absolute;
`

const mobileArea = css`
  display: flex;
  flex-direction: column;
  bottom: 48px;
`

const bottomRightArea = css`
  bottom: 0;
  right: 0;
`

const topRightArea = css`
  top: 0;
  right: 0;
`

export const CornerActionArea = ({ topRight, mobile, ...props }) => (
  <div
    css={[
      actionArea,
      topRight ? topRightArea : bottomRightArea,
      mobile && mobileArea,
    ]}
    {...props}
  />
)

CornerActionArea.propTypes = {
  mobile: T.bool,
  topRight: T.bool,
}
