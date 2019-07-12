import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const baseInput = css`
  width: 100%;
  height: 48px;
  padding: 0px;
  border: none;
  outline: none;
  background-color: #fafafa;
  font-size: 24px;
  text-align: center;

  &::placeholder {
    color: #979797;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`

const darkInput = css`
  background-color: #000000;
  color: #ffffff;
`

const bigInput = css`
  height: 72px;
  font-size: 48px;
  @media screen and (max-width: 600px) {
    height: 48px;
    font-weight: bold;
  }
`

const mobileInput = css`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const Input = ({ big, dark, ...props }) => (
  <input
    css={[baseInput, big && bigInput, dark && darkInput, mobileInput]}
    {...props}
  />
)

Input.propTypes = {
  big: T.bool,
  dark: T.bool,
}
