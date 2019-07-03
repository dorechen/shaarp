import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const base = css`
  height: 48px;
  min-width: 48px;
  font-size: 24px;
  line-height: 48px;
  color: #ffffff;
  background-color: #000000;
  text-align: center;
`

const lightIcon = css`
  color: #979797;
  background-color: #ffffff;
`

export const Icon = ({ light, ...props }) => {
  return <div css={[base, light && lightIcon]} {...props} />
}

Icon.propTypes = {
  light: T.bool,
}
