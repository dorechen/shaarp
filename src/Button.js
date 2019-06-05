import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const basicButton = theme => css`
  min-width: 336px;
  height: ${theme.size.small};
  color: ${theme.colour.white};
  background-color: ${theme.colour.black};
  border: none;
  outline: none;
  font-size: ${theme.size.header2};
  cursor: pointer;
  transition: linear 300ms;
  transition-property: color, background-color;

  &:hover {
    background-color: ${theme.colour.black_80};
  }
`

const invertedButton = theme => css`
  background-color: #414141;
  border: 2px solid ${theme.colour.white};

  &:hover,
  &:focus {
    background-color: ${theme.colour.white};
    color: ${theme.colour.black};
  }
`

const selectorButton = theme => css`
  background-color: ${theme.colour.lightgrey};
  color: ${theme.colour.darkgrey};

  &:hover {
    background-color: #f0f0ee;
    color: ${theme.colour.black};
  }

  &:focus {
    background-color: ${theme.colour.purple};
    color: ${theme.colour.lightgrey};
  }
`

const mobileButton = css`
  min-width: 100%;
`

export const Button = ({ inverted, selector, mobile, ...props }) => {
  return (
    <button
      css={theme => css`
      ${basicButton(theme)}
      ${
        inverted
          ? invertedButton(theme)
          : selector
          ? selectorButton(theme)
          : null
      }
      ${mobile ? mobileButton : null}
    `}
      {...props}
    />
  )
}

Button.propTypes = {
  inverted: T.bool,
  selector: T.bool,
  mobile: T.bool,
}
