import { Link, Route, Switch, useHistory } from "react-router-dom"
import { compToUrl, componentList, componentUiName } from "componentList"

import CompOption from "helperComps/CompOption"
import DropdownMultiCheckboxWrapper from "wrappersForAdvancedComps/DropdownMultiCheckboxWrapper"
import { useState } from "react"

function App() {
  const history = useHistory()
  const [selectedComp, setSelectedComp] = useState(componentList.default)
  return (
    <div className="App">
      <Link to="/">
        <h1>Advanced React Components</h1>
      </Link>
      <select
        className="comp-picker"
        name="advancedComps"
        id="advancedComps"
        value={selectedComp}
        onChange={bringComponent}>
        <CompOption
          value={componentList.default}
          disabled
          label={componentUiName[componentList.default]}
        />
        <CompOption
          value={componentList.dropdownMultiCheckbox}
          label={componentUiName[componentList.dropdownMultiCheckbox]}
        />
      </select>
      <div className="comp-container">
        <Switch>
          <Route path={compToUrl[componentList.dropdownMultiCheckbox]}>
            <DropdownMultiCheckboxWrapper />
          </Route>
        </Switch>
      </div>
    </div>
  )

  function bringComponent(e) {
    const url = compToUrl[componentList[e.target.value]]
    if (url) {
      history.push(url)
      setSelectedComp(componentList[e.target.value])
    } else {
      throw new Error("Invalid url from component list!")
    }
  }
}

export default App
