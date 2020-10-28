import Dropdown from "helperComps/Dropdown"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import useFetch from "customHooks/useFetch"
import { useState } from "react"

/**
 * @param {number} pageSize number of items for a page
 * @param {function} buildUrl function to build the url from page and page size
 * @param {object} dataConfig shape of the fetched data mapped to a common interface
 * @param {function} customRowComp component that lays the item in a row
 * @param {object} options fetch request opitons
 */

const DropdownSingleSelectPagination = ({
  pageSize,
  buildUrl,
  dataConfig,
  customRowComp: CustomRowComp,
  options
}) => {
  const [page, setPage] = useState(0)
  const { state, setUrl } = useFetch(buildUrl(page, pageSize), { ...options })

  const { items, totalCount } = processData(state.data)
  console.log(items)
  console.log(totalCount)
  return (
    <div>
      <Dropdown>
        {items.map((item) => (
          <CustomRowComp item={item} key={item.id} />
        ))}
        <NavigationRow>
          <button onClick={setPrevPage}>Prev</button>
          <button onClick={setNextPage}>Next</button>
        </NavigationRow>
      </Dropdown>
    </div>
  )

  function setNextPage() {
    const pageNumUpperLimit = Math.ceil(totalCount / pageSize)
    if (page + 1 < pageNumUpperLimit) {
      setPage((p) => p + 1)
      setUrl(page + 1)
    }
  }

  function setPrevPage() {
    if (page > 0) {
      setPage((p) => p - 1)
      setUrl(page - 1)
    }
  }

  function processData(data) {
    return {
      items: data[dataConfig.items],
      totalCount: data[dataConfig.totalCount]
    }
  }
}
DropdownSingleSelectPagination.propTypes = {
  buildUrl: PropTypes.func,
  pageSize: PropTypes.number,
  dataConfig: PropTypes.shape({
    totalCount: PropTypes.string,
    items: PropTypes.string
  }),
  customRowComp: PropTypes.node,
  options: PropTypes.object
}
export default DropdownSingleSelectPagination

const NavigationRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
