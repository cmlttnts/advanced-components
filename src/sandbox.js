// Try stuff out

import { useState } from "react"

const Parent = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      Parent {count}
      <button onClick={() => setCount((p) => p + 1)}> Inc parent count</button>
      <Child count={count} />
    </div>
  )
}
export default Parent

const Child = ({ count }) => {
  const [childCount, setChildCount] = useState(count)
  console.log(childCount)
  return (
    <div>
      <hr />
      Child count {childCount}
      <button onClick={() => setChildCount((p) => p + 1)}> Inc parent count</button>
    </div>
  )
}
