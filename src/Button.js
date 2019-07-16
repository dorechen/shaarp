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
    background-color: #333333;
  }

  &:active {
    padding: 0px;
  }

  &::-moz-focus-inner {
    border: 0;
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
`

const selectedButton = css`
  background-color: #6e61cc;
  color: #fafafa;

  &:hover,
  &:focus {
    background-color: #6e61cc;
    color: #fafafa;
  }
`

const fullWidthButton = css`
  min-width: 100%;
  width: 100%;
`

const mobileButton = css`
  @media screen and (max-width: 600px) {
    min-width: 100%;
    font-size: 16px;
  }
`

export const Button = ({
  inverted,
  selector,
  selected,
  fullWidth,
  ...props
}) => {
  return (
    <button
      css={[
        basicButton,
        inverted
          ? invertedButton
          : selector
          ? selector && selected
            ? selectedButton
            : selectorButton
          : selected
          ? selectedButton
          : null,
        fullWidth && fullWidthButton,
        mobileButton,
      ]}
      {...props}
    />
  )
}

Button.propTypes = {
  inverted: T.bool,
  selector: T.bool,
  selected: T.bool,
  fullWidth: T.bool,
}
