import COMPS, { defaultCompOption } from "comps"
import HOOKS, { defaultHookOption } from "hooks"
import { Link, Route, Switch, useHistory } from "react-router-dom"

import CompOption from "helperComps/CompOption"
import { useState } from "react"

function App() {
  const history = useHistory()

  const [selectedComp, setSelectedComp] = useState(defaultCompOption.name)
  const [selectedHook, setSelectedHook] = useState(defaultHookOption.name)

  return (
    <div className="App">
      <Link
        to="/"
        onClick={() => {
          setSelectedComp(defaultCompOption.name)
          setSelectedHook(defaultHookOption.name)
        }}>
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
            <CompOption value={defaultCompOption.name} disabled label={defaultCompOption.label} />
            {COMPS.map((comp) => (
              <CompOption key={comp.name} value={comp.name} label={comp.label} />
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="advancedHooks">Hooks</label>
          <select
            className="comp-picker"
            name="advancedHooks"
            id="advancedHooks"
            value={selectedHook}
            onChange={bringHook}>
            <CompOption value={defaultHookOption.name} disabled label={defaultHookOption.label} />
            {HOOKS.map((hook) => (
              <CompOption key={hook.name} value={hook.name} label={hook.label} />
            ))}
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
          {HOOKS.map((hook) => (
            <Route path={`/${hook.name}`} key={hook.name}>
              <hook.Component />
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
      setSelectedHook(defaultHookOption.name)
    } else {
      throw new Error("Invalid url from component list!")
    }
  }

  function bringHook(e) {
    const url = HOOKS.find((hook) => hook.name === e.target.value)
    if (url) {
      history.push(`/${url.name}`)
      setSelectedHook(url.name)
      setSelectedComp(defaultCompOption.name)
    } else {
      throw new Error("Invalid url from component list!")
    }
  }
}

export default App
