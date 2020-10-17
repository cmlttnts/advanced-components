import styled from "@emotion/styled"

const CompAndUsageContainer = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default CompAndUsageContainer
