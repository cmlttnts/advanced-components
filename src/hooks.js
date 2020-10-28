import useOutsideClickWrapper from "wrappers/useOutsideClickWrapper"

export const defaultHookOption = {
  name: "default",
  label: " ⬇ Select a hook ⬇ "
}
// FIXME: enable when ready
const HOOKS = [
  {
    name: "useOutsideClick",
    label: "useOutsideClick",
    Component: useOutsideClickWrapper
  } /* ,
  {
    name: "dropdownSingleSelectPagination",
    label: "Dropdown Single-Select Pagination",
    Component: DropdownSingleSelectPaginationWrapper
  } */
]

export default HOOKS
