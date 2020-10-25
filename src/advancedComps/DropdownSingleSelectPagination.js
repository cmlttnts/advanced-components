import Dropdown from "helperComps/Dropdown"
import PropTypes from "prop-types"

/**
 *
 * @param {string} url link of the url to fetch data
 * @param {function} customRowComp component that lays the item in a row
 */

const DropdownSingleSelectPagination = ({ url, customRowComp: CustomRowComp }) => {
  return (
    <div>
      <Dropdown />
    </div>
  )
}
DropdownSingleSelectPagination.propTypes = {
  url: PropTypes.func,
  customRowComp: PropTypes.func,
  pageSize: PropTypes.number
}
export default DropdownSingleSelectPagination
