import { useRef, useState } from "react"

import Dropdown from "helperComps/Dropdown"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import useOutsideClick from "customHooks/useOutsideClick"

/**
 *
 * @param {string} buttonLabel label for the dropdown button
 * @param {object[]} options array of options in the shape [{ text: string, active: boolean},...]
 */

const DropdownMultiCheckbox = ({ buttonLabel, options, setOptions }) => {
  const [active, setActive] = useState(false)
  const dropDownContainerRef = useRef(null)
  useOutsideClick(dropDownContainerRef, () => setActive(false))

  const togglingLabel = active ? ` ⬆ ${buttonLabel} ⬆ ` : ` ⬇ ${buttonLabel} ⬇ `
  return (
    <Container ref={dropDownContainerRef}>
      <button onClick={() => setActive((old) => !old)}>{togglingLabel}</button>
      <Dropdown active={active}>
        {options.map((option, index) => {
          const rmWhiteSpace = option.text.replace(/\s/g, "")
          return (
            <label htmlFor={rmWhiteSpace} key={rmWhiteSpace}>
              {option.text}
              <input
                type="checkbox"
                checked={option.active}
                name={rmWhiteSpace}
                id={rmWhiteSpace}
                onChange={() => {
                  const newOptions = [...options]
                  newOptions[index].active = !newOptions[index].active
                  setOptions(newOptions)
                }}
              />
            </label>
          )
        })}
      </Dropdown>
    </Container>
  )
}
DropdownMultiCheckbox.propTypes = {
  buttonLabel: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      active: PropTypes.bool
    })
  ),
  setOptions: PropTypes.func
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justifty-content: flex-start;
  align-items: flex-start;
  outline: 2px solid pink;
  & * {
    font-size: 1.5rem;
  }
`

export default DropdownMultiCheckbox
