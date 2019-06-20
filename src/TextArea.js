import { jsx, css } from '@emotion/core'
import { useEffect, useRef } from 'react'
import T from 'prop-types'
import autosize from 'autosize'

const baseTextArea = css`
  width: 100%;
  height: 48px;
  padding: 0px;
  box-sizing: border-box;
  padding: 9px;
  border: 0;
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
export const TextArea = ({ defaultValue, ...props }) => {
  const textareaRef = useRef(null)
  useEffect(() => {
    autosize(textareaRef.current)
  }, [defaultValue])

  return (
    <textarea
      ref={textareaRef}
      css={[baseTextArea]}
      data-enable-grammarly="false"
      defaultValue={defaultValue}
      {...props}
    />
  )
}

TextArea.propTypes = {
  defaultValue: T.string,
}
