import { useRef, useState } from "react"

import PropTypes from "prop-types"
import styled from "@emotion/styled"
import useOutsideClick from "customHooks/useOutsideClick"

/**
 *
 * @param {string} buttonLabel label for the dropdown button
 * @param {object} options array of options in the shape { option1: {}
 */

const DropdownMultiCheckbox = ({ buttonLabel, checkboxes }) => {
  const [active, setActive] = useState(false)
  const dropDownRef = useRef(null)
  useOutsideClick(dropDownRef, () => setActive(false))

  return (
    <Container>
      <button>{buttonLabel}</button>
      <Dropdown active={active}>
        {checkboxes.optionLabels.map((oLabel, index) => {
          const rmWhiteSpace = oLabel.replace(/\s/g, "")
          return (
            <label htmlFor={rmWhiteSpace}>
              <input
                type="checkbox"
                name={rmWhiteSpace}
                id={rmWhiteSpace}
                onChange={() => checkboxes.toggleOption(index)}
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
  checkboxes: PropTypes.shape({
    optionLabels: PropTypes.arrayOf(PropTypes.string),
    toggleOption: PropTypes.func
  })
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justifty-content: flex-start;
  align-items: flex-start;
`

const Dropdown = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justifty-content: flex-start;
  align-items: flex-start;
`

export default DropdownMultiCheckbox
