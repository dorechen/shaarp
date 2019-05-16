import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const basicButton = css`
  min-width: 336px;
  height: 48px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  outline: none;
  font-size: 24px;
  cursor: pointer;
  transition: linear 300ms;
  transition-property: color, background-color;

  &:hover {
    background-color: #00000080;
  }
`

const invertedButton = css`
  background-color: #414141;
  border: 2px solid #ffffff;

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #000000;
  }
`

const selectorButton = css`
  background-color: #fafafa;
  color: #979797;

  &:hover {
    background-color: #f0f0ee;
    color: #000000;
  }

  &:focus {
    background-color: #6e61cc;
    color: #fafafa;
  }
`

const mobileButton = css`
  min-width: 100%;
`

export const Button = ({ inverted, selector, mobile, ...props }) => {
  return (
    <button
      css={[
        basicButton,
        inverted ? invertedButton : selector ? selectorButton : null,
        mobile ? mobileButton : null,
      ]}
      {...props}
    />
  )
}

Button.propTypes = {
  inverted: T.bool,
  selector: T.bool,
  mobile: T.bool,
}
