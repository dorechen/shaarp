import { jsx, css } from '@emotion/core'

const baseTextArea = css`
  width: 100%;
  height: 48px;
  padding: 0px;
  box-sizing: border-box;
  border: solid transparent 6px;
  outline: none;
  background-color: #fafafa;
  font-family: 'Avenir Next';
  font-size: 24px;
  text-align: center;
  resize: none;

  &::placeholder {
    color: #979797;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`
export const TextArea = props => (
  <textarea css={[baseTextArea]} data-enable-grammarly="false" {...props} />
)
