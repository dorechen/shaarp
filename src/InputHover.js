import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import T from 'prop-types'

const hoverSwitch = css`
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  color: #979797;
  background-color: #fafafa;
  text-align: center;

  &:hover {
    background-color: transparent;
  }
`

const selected = css`
  background-color: #6e61cc;
  color: #fafafa;
`

export const InputHover = ({ label, hasSelection, ...props }) => {
  const [isMouseHovered, setIsMouseHovered] = useState(false)

  return (
    <div
      css={[hoverSwitch, hasSelection && selected]}
      onMouseOver={() => setIsMouseHovered(true)}
      onMouseLeave={() => setIsMouseHovered(false)}
    >
      {!isMouseHovered ? label : props.children}
    </div>
  )
}

InputHover.propTypes = {
  label: T.string,
  hasSelection: T.bool,
  children: T.object,
}
