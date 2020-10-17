import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import DropdownMultiCheckbox from "advancedComps/DropdownMultiCheckbox"
import { useState } from "react"

const OPTIONAL_FIELDS_INIT_STATUS = [
  {
    text: "Option 1",
    active: false
  },
  {
    text: "Option 2",
    active: true
  },
  {
    text: "Option 3",
    active: false
  }
]
function App() {
  const [options, setOptions] = useState(OPTIONAL_FIELDS_INIT_STATUS)
  return (
    <div className="App">
      <h1>Advanced React Components</h1>
      <Router>
        <Switch>
          <Route path="/">
            <DropdownMultiCheckbox
              buttonLabel="Toggle Menu"
              options={options}
              setOptions={setOptions}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
