import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const baseInput = theme => css`
  width: 100%;
  height: ${theme.size.small};
  padding: 0px;
  border: none;
  outline: none;
  background-color: ${theme.colour.lightgrey};
  font-size: ${theme.size.header2};
  text-align: center;

  &::placeholder {
    color: ${theme.colour.darkgrey};
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`

const titleInput = theme => css`
  height: ${theme.size.big};
  font-size: ${theme.size.header1};
`

const mobileInput = theme => css`
  font-size: ${theme.size.header4};
`

const mobileTitleInput = theme => css`
  height: ${theme.size.small};
  font-weight: bold;
`

export const Input = ({ title, mobile, ...props }) => (
  <input
    css={theme => css`
      ${baseInput(theme)}
      ${title && titleInput(theme)}
      ${mobile && mobileInput(theme)}
      ${mobile && title && mobileTitleInput(theme)}
    `}
    {...props}
  />
)

Input.propTypes = {
  title: T.bool,
  mobile: T.bool,
}
