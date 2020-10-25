import styled from "@emotion/styled"

const Dropdown = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justifty-content: flex-start;
  align-items: flex-start;
`

export default Dropdown
