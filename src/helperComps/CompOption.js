import PropTypes from "prop-types"
import styled from "@emotion/styled"

const CompOption = ({ value, label, disabled }) => {
  return (
    <StyledOption value={value} disabled={disabled}>
      {label}
    </StyledOption>
  )
}
CompOption.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.any
}

const StyledOption = styled.option`
  text-align: center;
`
export default CompOption
