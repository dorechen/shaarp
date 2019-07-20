import { jsx, css } from '@emotion/core'
import T from 'prop-types'
import { Button } from './Button'

const baseSelector = css`
  display: flex;
  width: 100%;
  margin: 0 auto;
`

const baseSelections = css`
  min-width: unset;
  width: 100%;
  padding: 0px;
  margin-left: 2px;

  &:first-of-type {
    margin-left: 0px;
  }

  @media screen and (max-width: 600px) {
    min-width: unset;
    font-size: 14px;
  }
`

const numericalSelection = css`
  min-width: 48px;
  max-width: 48px;
`

export const SingleSelector = ({
  numerical,
  options,
  selectedOption,
  onOptionChange,
  labelMapper,
  ...props
}) => {
  const buttons = options.map(item => {
    const label = labelMapper(item)
    return (
      <Button
        selector
        selected={selectedOption === item}
        key={item}
        css={[baseSelections, numerical ? numericalSelection : null]}
        onClick={() => {
          onOptionChange(selectedOption === item ? null : item)
        }}
      >
        {label}
      </Button>
    )
  })

  return (
    <div css={[baseSelector]}>
      {props.children}
      {buttons}
    </div>
  )
}

SingleSelector.propTypes = {
  numerical: T.bool,
  // Enforce options to pass in array of keys
  options: T.arrayOf(T.string),
  selectedOption: T.string,
  onOptionChange: T.func,
  labelMapper: T.func,
  children: T.object,
}
