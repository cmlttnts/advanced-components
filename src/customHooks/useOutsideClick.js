import { useCallback, useEffect } from "react"

export const useOutsideClick = (ref, cb) => {
  const nodeExists = ref && ref.current

  const callback = useCallback(
    (event) => {
      if (nodeExists && !ref?.current?.contains(event.target)) {
        cb(event)
      }
    },
    // arrow functions will retrigger this every call, but we can introduce bugs if we omit
    [ref, nodeExists, cb]
  )

  useEffect(() => {
    if (nodeExists) {
      document.addEventListener("click", callback)
      document.addEventListener("ontouchstart", callback)
      return () => {
        document.removeEventListener("click", callback)
        document.removeEventListener("ontouchstart", callback)
      }
    }
  }, [nodeExists, callback])
}

export default useOutsideClick
