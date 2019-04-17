import { jsx, css } from '@emotion/core'

export const Button = props => {
  return (
    <button
      css={css`
        color: hotpink;
      `}
      {...props}
    />
  )
}