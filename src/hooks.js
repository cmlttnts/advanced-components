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
  },
  {
    name: "useFetch",
    label: "useFetch",
    Component: useOutsideClickWrapper
  }
]

export default HOOKS
