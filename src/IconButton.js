import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const base = css`
  height: 48px;
  width: 48px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #000000;
  text-align: center;
  font-size: 24px;
  line-height: 48px;
  cursor: pointer;
  transition: linear 300ms;
  transition-property: color, background-color;

  &:active {
    padding: 0px;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`

const lightIcon = css`
  color: #979797;
  background-color: #ffffff;
`

export const IconButton = ({ light, ...props }) => {
  return <button css={[base, light && lightIcon]} {...props} />
}

IconButton.propTypes = {
  light: T.bool,
}
