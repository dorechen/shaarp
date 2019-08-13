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

  &:active {
    padding: 0px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  @media print {
    display: none;
  }
`

const invertedButton = css`
  background-color: #ffffff;
  border: 2px solid #000000;
  color: #000000;

  &:hover,
  &:focus {
    background-color: #f2f2f2;
  }
`

const mobileButton = css`
  @media screen and (max-width: 600px) {
    display: block;
    min-width: 0px;
    width: 48px;
    padding: 0px;
  }
`

const fullWidthMobile = css`
  @media screen and (max-width: 600px) {
    width: 100vw;
    min-width: unset;
    max-width: 100%;
    font-size: 16px;
  }
`

export const CornerButton = ({ inverted, fullWidth, ...props }) => (
  <button
    css={[
      baseButton,
      inverted && invertedButton,
      fullWidth ? fullWidthMobile : mobileButton,
    ]}
    {...props}
  />
)

CornerButton.propTypes = {
  inverted: T.bool,
  fullWidth: T.bool,
}
