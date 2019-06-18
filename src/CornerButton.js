import { jsx, css } from '@emotion/core'

const baseButton = css`
  border: none;
  height: 48px;
  min-width: 204px;
  background: #000;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: linear background 300ms;

  &:focus {
    outline: none;
    background: #080808;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background: #ddd;
    cursor: default;
  }

  @media print {
    display: none;
  }
`

const mobileButton = css`
  @media screen and (max-width: 600px) {
    min-width: 48px;
  }
`

export const CornerButton = props => (
  <button css={[baseButton, mobileButton]} {...props} />
)
