import PropTypes from "prop-types"

/**
 *
 * @param {async function} asyncCb callback that returns a promise with data
 * @param {function} itemOverlayRowCb callback that lays the item on a row
 */

const DropdownSingleSelectPagination = ({ asyncCb, itemOverlayRowCb }) => {
  return <div>Hello World</div>
}
DropdownSingleSelectPagination.propTypes = {
  asyncCb: PropTypes.func,
  itemOverlayRowCb: PropTypes.func
}
export default DropdownSingleSelectPagination
