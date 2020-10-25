import COMPS from "comps"
import CompAndUsageContainer from "helperComps/CompAndUsageContainer"
import DropdownSingleSelectPagination from "advancedComps/DropdownSingleSelectPagination"

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
  const compLabel = COMPS.find((comp) => comp.name === "dropdownSingleSelectPagination").label

  return (
    <CompAndUsageContainer>
      <div>
        <h2>{compLabel}</h2>
        <DropdownSingleSelectPagination />
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
