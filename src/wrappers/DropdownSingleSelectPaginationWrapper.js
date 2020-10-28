import COMPS from "comps"
import CompAndUsageContainer from "helperComps/CompAndUsageContainer"
import DropdownSingleSelectPagination from "advancedComps/DropdownSingleSelectPagination"
// * ?_start=10&_limit=10
// http://jsonplaceholder.typicode.com/posts
const DropdownMultiCheckboxWrapper = () => {
  const compLabel = COMPS.find((comp) => comp.name === "dropdownSingleSelectPagination").label

  return (
    <CompAndUsageContainer>
      <div>
        <h2>{compLabel}</h2>
        <DropdownSingleSelectPagination />
      </div>
      <div>
        <h2>Usage</h2>
      </div>
    </CompAndUsageContainer>
  )
}
export default DropdownMultiCheckboxWrapper
