import COMPS from "comps"
import CompAndUsageContainer from "helperComps/CompAndUsageContainer"
import DropdownMultiCheckbox from "advancedComps/DropdownMultiCheckbox"
import { useState } from "react"

const INIT_OPTIONS = [
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

const DropdownMultiCheckboxWrapper = () => {
  const [options, setOptions] = useState(INIT_OPTIONS)
  const compLabel = COMPS.find((comp) => comp.name === "dropdownMultiCheckbox").label

  return (
    <CompAndUsageContainer>
      <div>
        <h2>{compLabel}</h2>
        <DropdownMultiCheckbox
          buttonLabel="Toggle Menu"
          options={options}
          setOptions={setOptions}
        />
      </div>
      <div>
        <h2>Usage</h2>
        <pre style={{ textAlign: "left" }}>
          {`const INIT_OPTIONS = [
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
]\n...\n`}
          {`const [options, setOptions] = useState(INIT_OPTIONS)\n ... \n`}
          {`<DropdownMultiCheckbox\n  buttonLabel="Toggle Menu"\n  options={options}\n  setOptions={setOptions} />\n`}
          {`\n// Use option's active field to do your conditional logic`}
        </pre>
      </div>
    </CompAndUsageContainer>
  )
}
export default DropdownMultiCheckboxWrapper
