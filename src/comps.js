import DropdownMultiCheckboxWrapper from "wrappers/DropdownMultiCheckboxWrapper"
import DropdownSingleSelectPaginationWrapper from "wrappers/DropdownSingleSelectPaginationWrapper"

export const defaultCompOption = {
  name: "default",
  label: " ⬇ Select a component ⬇ "
}
// FIXME: enable when ready
const COMPS = [
  {
    name: "dropdownMultiCheckbox",
    label: "Dropdown Multi-Checkbox",
    Component: DropdownMultiCheckboxWrapper
  },
  {
    name: "dropdownSingleSelectPagination",
    label: "Dropdown Single-Select Pagination",
    Component: DropdownSingleSelectPaginationWrapper
  }
]

export default COMPS
