import { useReducer } from "react"

const initState = {
  loading: true,
  error: false,
  data: null
}
const ACTION_TYPES = {
  START_FETCH: 0,
  ERROR_OCCURED: 1,
  SUCCESS: 2
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.START_FETCH:
      return { ...state }
    case ACTION_TYPES.ERROR_OCCURED:
      return { ...state }
    case ACTION_TYPES.SUCCESS:
      return { ...state }
    default:
      return state
  }
}

const useAjax = () => {
  const [state, dispatch] = useReducer(reducer, initState)
}
