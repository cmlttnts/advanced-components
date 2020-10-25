import DropdownMultiCheckboxWrapper from "wrappersForAdvancedComps/DropdownMultiCheckboxWrapper"
import DropdownSingleSelectPaginationWrapper from "wrappersForAdvancedComps/DropdownSingleSelectPaginationWrapper"

export const defaultOption = {
  name: "default",
  label: " ⬇ Select a component ⬇ "
}

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
