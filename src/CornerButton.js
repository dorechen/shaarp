import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const baseButton = theme => css`
  border: none;
  height: ${theme.size.small};
  min-width: 204px;
  background: ${theme.colour.black};
  color: ${theme.colour.white};
  font-size: ${theme.size.header2};
  cursor: pointer;
  transition: linear background 300ms;

  &:focus {
    outline: none;
    background: #080808;
  }

  &:hover {
    background: ${theme.colour.black_80};
  }

  &:disabled {
    background: #ddd;
    cursor: default;
  }

  @media print {
    display: none;
  }
`

const mobileButton = theme => css`
  min-width: ${theme.size.icon};
`

export const CornerButton = ({ mobile, ...props }) => (
  <button
    css={theme => css`
      ${baseButton(theme)}
      ${mobile && mobileButton(theme)}
    `}
    {...props}
  />
)

CornerButton.propTypes = {
  mobile: T.bool,
}
