import COMPS from "comps"
import CompAndUsageContainer from "helperComps/CompAndUsageContainer"
import DropdownSingleSelectPagination from "advancedComps/DropdownSingleSelectPagination"
// * Change according to your api
// For pokemon api typical query is like this
// https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20
const buildUrl = (page, pageSize) => {
  const offset = pageSize * page // page offsets at 0
  const limit = pageSize
  return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
}
// How to render each row in the dropdown, make a custom comp
const CustomRowComp = ({ item, index }) => (
  <div
    style={{
      backgroundColor: "whitesmoke"
    }}>
    <i>{index}-) </i>
    <strong>{item.name}</strong>
  </div>
)

const DropdownSingleSelectPaginationWrapper = () => {
  const compLabel = COMPS.find((comp) => comp.name === "dropdownSingleSelectPagination").label

  return (
    <CompAndUsageContainer>
      <div>
        <h2>{compLabel}</h2>
        <DropdownSingleSelectPagination
          label="Pokemon"
          placeHolder="click to see the list"
          pageSize={5}
          buildUrl={buildUrl}
          dataConfig={{
            totalCount: "count",
            items: "results"
          }}
          customRowComp={CustomRowComp}
        />
      </div>
      <div>
        <h2>Usage</h2>
        <pre style={{ textAlign: "left" }}>
          {`<DropdownSingleSelectPagination
  label="Pokemon"
  placeholder="click to see the list"
  pageSize={5}
  buildUrl={buildUrl}
  dataConfig={{
    totalCount: "count",
    items: "results"
  }}
  customRowComp={CustomRowComp}
/>\n\n`}
          {`// Change according to your api
// For pokemon api typical query is like this
// https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20

const buildUrl = (page, pageSize) => {
  const offset = pageSize * page
  const limit = pageSize
  return \`https://pokeapi.co/api/v2/pokemon/?limit=\${limit}&offset=\${offset}\`
}\n`}
          {`// How to render each row in the dropdown, make a custom comp
const CustomRowComp = ({ item, index }) => (
  <div
    style={{
      backgroundColor: "whitesmoke"
    }}>
    <i>{index}-) </i>
    <strong>{item.name}</strong>
  </div>
)\n`}
        </pre>
      </div>
    </CompAndUsageContainer>
  )
}
export default DropdownSingleSelectPaginationWrapper
