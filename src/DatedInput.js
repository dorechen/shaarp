import { jsx, css } from '@emotion/core'
import T from 'prop-types'
import moment from 'moment'

import { TextArea } from './TextArea'

const baseDatedInput = css`
  position: relative;
  display: flex;
  width: 100%;
  border: none;
  font-size: 24px;
  text-align: center;
  align-items: stretch;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

const baseDate = css`
  display: flex;
  flex-grow: 0;
  flex-basis: 10rem;
  margin-right: 2px;
  background-color: #fafafa;
  font-size: 21px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const DatedInput = ({ date, value, ...props }) => {
  return (
    <div css={[baseDatedInput]}>
      <span css={[baseDate]}>{moment(date).format('DD/MM/YY')}</span>
      <TextArea defaultValue={value} {...props} />
    </div>
  )
}

DatedInput.propTypes = {
  date: T.date,
  value: T.object,
}
