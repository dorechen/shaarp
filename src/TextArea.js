import { jsx, css } from '@emotion/core'
import { useEffect, useRef } from 'react'
import T from 'prop-types'
import autosize from 'autosize'

const baseTextArea = theme => css`
  width: 100%;
  height: ${theme.size.small};
  padding: 0px;
  box-sizing: border-box;
  padding: 9px;
  border: 0;
  outline: none;
  background-color: ${theme.colour.lightgrey};
  font-family: 'Avenir Next';
  font-size: ${theme.size.header2};
  text-align: center;
  resize: none;

  &::placeholder {
    color: ${theme.colour.darkgrey};
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`
export const TextArea = ({ value, ...props }) => {
  const textareaRef = useRef(null)
  useEffect(() => {
    autosize(textareaRef.current)
  }, [value])

  return (
    <textarea
      ref={textareaRef}
      css={theme =>
        css`
          ${baseTextArea(theme)}
        `
      }
      data-enable-grammarly="false"
      value={value}
      {...props}
    />
  )
}

TextArea.propTypes = {
  value: T.string,
}
