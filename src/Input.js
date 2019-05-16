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

const titleInput = css`
  height: 72px;
  font-size: 48px;
`

const mobileInput = css`
  font-size: 16px;
`

const mobileTitleInput = css`
  height: 48px;
  font-weight: bold;
`

export const Input = ({ title, mobile, ...props }) => (
  <input
    css={[
      baseInput,
      title ? titleInput : null,
      mobile ? mobileInput : null,
      mobile && title ? mobileTitleInput : null,
    ]}
    {...props}
  />
)

Input.propTypes = {
  title: T.bool,
  mobile: T.bool,
}
