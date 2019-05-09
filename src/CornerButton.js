import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const baseButton = css`
  border: none;
  height: 48px;
  min-width: 204px;
  background: #000;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: linear background 300ms;

  &:focus {
    outline: none;
    background: #080808;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background: #ddd;
    cursor: default;
  }

  @media print {
    display: none;
  }
`

const mobileButton = css`
  min-width: 48px;
`

export const CornerButton = ({ mobile, ...props }) => (
  <button css={[baseButton, mobile ? mobileButton : null]} {...props} />
)

CornerButton.propTypes = {
  mobile: T.bool,
}
