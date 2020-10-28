import Dropdown from "helperComps/Dropdown"
import PropTypes from "prop-types"

/**
 *
 * @param {number} pageSize number of items for a page
 * @param {function} buildUrl function to build the url from page and page size
 * @param {function} customRowComp component that lays the item in a row
 */

const DropdownSingleSelectPagination = ({ pageSize, buildUrl, customRowComp: CustomRowComp }) => {
  return (
    <div>
      <Dropdown />
    </div>
  )
}
DropdownSingleSelectPagination.propTypes = {
  buildUrl: PropTypes.func,
  pageSize: PropTypes.number,
  customRowComp: PropTypes.node
}
export default DropdownSingleSelectPagination
