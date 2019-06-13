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
`

const mobileInput = css`
  font-size: 16px;
`

const mobileBigInput = css`
  height: 48px;
  font-weight: bold;
`

export const Input = ({ big, mobile, ...props }) => (
  <input
    css={[
      baseInput,
      big && bigInput,
      mobile && mobileInput,
      mobile && big && mobileBigInput,
    ]}
    {...props}
  />
)

Input.propTypes = {
  big: T.bool,
  mobile: T.bool,
}
