import { jsx, css } from '@emotion/core'
import T from 'prop-types'

const base = css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  color: #000000;
  text-align: center;
  align-items: center;
`
const h1Size = css`
  height: 72px;
  font-size: 48px;
  border-top: solid transparent 12px;

  @media screen and (max-width: 600px) {
    height: 100%;
    font-size: 24px;
  }
`

const h2Size = css`
  height: 33px;
  font-size: 24px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const H1 = ({ ref, ...props }) => {
  return <h1 css={[base, h1Size]} ref={ref} {...props} />
}

export const H2 = ({ ref, ...props }) => {
  return <h2 css={[base, h2Size]} ref={ref} {...props} />
}

H1.propTypes = {
  ref: T.object,
}

H2.propTypes = {
  ref: T.object,
}
