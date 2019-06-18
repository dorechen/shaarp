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

export const Input = ({ big, ...props }) => (
  <input css={[baseInput, big && bigInput, mobileInput]} {...props} />
)

Input.propTypes = {
  big: T.bool,
}
