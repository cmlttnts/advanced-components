import { useEffect, useReducer, useState } from "react"

const useFetch = (initUrl, initOptions) => {
  const [url, setUrl] = useState(initUrl)
  const [options, setOptions] = useState(initOptions)

  const [state, dispatch] = useReducer(fetchReducer, INIT_STATE)

  useEffect(() => {
    // assume empty string as cancellation
    let canceled = !url
    if (canceled) {
      dispatch(getAction(ActionTypeTypes.FETCH_NOT_ACTIVE))
      return
    }
    const fetchData = async () => {
      dispatch(getAction(ActionTypeTypes.FETCH_INIT))
      try {
        const res = await fetch(url, { ...options })
        if (res.ok) {
          const json = await res.json()
          if (!canceled) {
            dispatch(getAction(ActionTypeTypes.FETCH_SUCCESS, json))
          }
        } else {
          throw new Error(`Error! Http Code: ${res.status}`)
        }
      } catch (error) {
        console.log(error)
        if (!canceled) {
          dispatch(getAction(ActionTypeTypes.FETCH_FAILURE))
        }
      }
    }
    fetchData()

    return () => {
      // cancel on unmount
      canceled = true
    }
  }, [url, options])

  return {
    state,
    setUrl,
    setOptions
  }
}

export default useFetch

const ActionTypeTypes = {
  FETCH_NOT_ACTIVE: 0,
  FETCH_INIT: 1,
  FETCH_SUCCESS: 2,
  FETCH_FAILURE: 3
}

function getAction(type, payload) {
  return {
    type,
    payload
  }
}

const INIT_STATE = {
  isLoading: false,
  isError: false,
  data: null
}

const fetchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypeTypes.FETCH_NOT_ACTIVE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: null
      }
    case ActionTypeTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case ActionTypeTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case ActionTypeTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error("Invalid Action")
  }
}
