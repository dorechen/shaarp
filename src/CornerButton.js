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
    background-color: #333333;
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
  @media screen and (max-width: 600px) {
    min-width: 0px;
    width: 48px;
  }
`

const fullWidthMobile = css`
  @media screen and (max-width: 600px) {
    width: 100vw;
    font-size: 16px;
  }
`

export const CornerButton = ({ fullWidth, ...props }) => (
  <button
    css={[baseButton, fullWidth ? fullWidthMobile : mobileButton]}
    {...props}
  />
)

CornerButton.propTypes = {
  fullWidth: T.bool,
}
