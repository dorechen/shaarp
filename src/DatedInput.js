// import { jsx, css } from '@emotion/core'
// import { useState } from 'react'
// import T from 'prop-types'
// import moment from 'moment'

// import { TextArea } from './TextArea'
// import { Icon } from './Icon'

// const baseDatedInput = css`
//   position: relative;
//   display: flex;
//   width: 100%;
//   border: none;
//   font-size: 24px;
//   text-align: center;
//   align-items: stretch;
//   /* margin-bottom: 2px;
//     @include mobile {
//       margin-bottom: 16px;
//     }
//     &:first-child {
//       margin-top: 2px;
//       @include mobile {
//         margin-top: 16px;
//       }
//     }
//     &:last-child {
//       margin-bottom: 0px;
//     } */
//   @media screen and (max-width: 600px) {
//     font-size: 16px;
//   }
// `

// const baseDate = css`
//   display: flex;
//   flex-grow: 0;
//   flex-basis: 10rem;
//   margin-right: 2px;
//   background-color: #fafafa;
//   font-size: 21px;
//   align-items: center;
//   justify-content: center;
//   @media screen and (max-width: 600px) {
//     font-size: 16px;
//   }
// `

// const input = css`
//   /* margin: 0; */
//   /* text-align: left; */
// `

// export const DatedInput = ({ date, value, onChange, onDelete, ...props }) => {
//   const [inputValue, setInputValue] = useState(value)
//   return (
//     <div css={[baseDatedInput]}>
//       <span css={[baseDate]}>{moment(date).format('DD/MM/YY')}</span>
//       <TextArea
//         css={[input]}
//         onChange={e => setInputValue(e.target.value)}
//         onBlur={() => ""}
//       >
//         {inputValue || props.children}
//       </TextArea>
//       {onDelete && <Icon light onDelete={onDelete}>✕</Icon>}
//     </div>
//   )
// }

// DatedInput.propTypes = {
//   date: T.date,
//   value: T.object,
//   onChange: T.func,
//   onDelete: T.func,
// }
