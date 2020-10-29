import { useRef, useState } from "react"

import Dropdown from "helperComps/Dropdown"
import Label from "helperComps/Label"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import useFetch from "customHooks/useFetch"
import useOutsideClick from "customHooks/useOutsideClick"

/**
 * @param {number} pageSize number of items for a page
 * @param {function} buildUrl function to build the url from page and page size
 * @param {object} dataConfig shape of the fetched data mapped to a common interface
 * @param {function} customRowComp component that lays the item in a row
 * @param {object} options fetch request opitons
 */

const DropdownSingleSelectPagination = ({
  label = "Select",
  placeHolder = "",
  pageSize,
  buildUrl,
  dataConfig,
  customRowComp: CustomRowComp,
  options = {}
}) => {
  const [page, setPage] = useState(0)
  const dRef = useRef(null)
  const { state, setUrl } = useFetch(buildUrl(page, pageSize), { ...options })
  useOutsideClick(dRef, () => setFocused(false))
  const [focused, setFocused] = useState(false)

  const { items, totalCount } = processData(state.data)

  return (
    <div ref={dRef}>
      <Label htmlFor="dropdownSingleSelectPagination">
        {label}
        <input
          type="text"
          placeholder={placeHolder}
          id="dropdownSingleSelectPagination"
          onFocus={() => setFocused(true)}
        />
      </Label>
      <Dropdown active={focused}>
        {!state.isLoading &&
          state.data &&
          items.map((item, index) => (
            <CustomRowComp item={item} key={item.id} index={page * pageSize + index + 1} />
          ))}
        {state.isLoading && <span>Loading...</span>}
        {state.isError && <span> Error</span>}
        {!state.data && <span>Couldn't load</span>}
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
      setUrl(buildUrl(page + 1, pageSize))
    }
  }

  function setPrevPage() {
    if (page > 0) {
      setPage((p) => p - 1)
      setUrl(buildUrl(page - 1, pageSize))
    }
  }

  function processData(data) {
    if (!data) {
      return { items: [], totalCount: 0 }
    }
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
  customRowComp: PropTypes.func,
  options: PropTypes.object
}
export default DropdownSingleSelectPagination

const NavigationRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
