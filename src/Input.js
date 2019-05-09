import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const baseInput = css`
  width: calc(100% - 96px * 2);
  padding: 0px;
  border: none;
  margin: 16px 96px;
  outline: none;
  background-color: #fafafa;
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

const textInput = css`
  height: 48px;
  font-size: 24px;
`

const mobileInput = css`
  width: calc(100% - 12px * 2);
  height: 48px;
  margin: 15px 12px;
  font-size: 16px;
`

const mobileTitleInput = css`
  font-weight: bold;
`

export const Input = ({ title, text, mobile, ...props }) => (
  <input
    css={[
      baseInput,
      title ? titleInput : text ? textInput : null,
      mobile ? mobileInput : null,
      mobile && title ? mobileTitleInput : null,
    ]}
    {...props}
  />
)

Input.propTypes = {
  title: T.bool,
  text: T.bool,
  mobile: T.bool,
}
