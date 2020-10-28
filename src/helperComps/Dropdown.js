import styled from "@emotion/styled"

const Dropdown = ({ active, children }) => {
  return (
    <DropdownContainer>
      <DropdownContent active={active}>{children}</DropdownContent>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
`

const DropdownContent = styled.div`
  width: 100%;
  position: absolute;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justifty-content: flex-start;
  align-items: flex-start;
  background-color: lightgreen;
  & > * {
    margin-top: 0.4rem;
  }
`

export default Dropdown
