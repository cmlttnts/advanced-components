import COMPS, { defaultOption } from "comps"
import { Link, Route, Switch, useHistory } from "react-router-dom"

import CompOption from "helperComps/CompOption"
import useFetch from "customHooks/useFetch"
import { useState } from "react"

function App() {
  const history = useHistory()
  const { state } = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  console.log(state)
  const [selectedComp, setSelectedComp] = useState(defaultOption.name)
  return (
    <div className="App">
      <Link to="/" onClick={() => setSelectedComp(defaultOption.name)}>
        <h1>Advanced React Components And Hooks</h1>
      </Link>
      <section>
        <div>
          <label htmlFor="advancedComps">Components</label>
          <select
            className="comp-picker"
            name="advancedComps"
            id="advancedComps"
            value={selectedComp}
            onChange={bringComponent}>
            <CompOption value={defaultOption.name} disabled label={defaultOption.label} />
            {COMPS.map((comp) => (
              <CompOption key={comp.name} value={comp.name} label={comp.label} />
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="advancedHooks">Hooks</label>
          <select name="advancedHooks" id="advancedHooks">
            <option value="nothing">TBA</option>
          </select>
        </div>
      </section>
      <div className="comp-container">
        <Switch>
          {COMPS.map((comp) => (
            <Route path={`/${comp.name}`} key={comp.name}>
              <comp.Component />
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  )

  function bringComponent(e) {
    const url = COMPS.find((comp) => comp.name === e.target.value)
    if (url) {
      history.push(`/${url.name}`)
      setSelectedComp(url.name)
    } else {
      throw new Error("Invalid url from component list!")
    }
  }
}

export default App
