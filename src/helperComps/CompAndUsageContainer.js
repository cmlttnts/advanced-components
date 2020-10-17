import styled from "@emotion/styled"

const CompAndUsageContainer = ({ children }) => {
  return (
    <Container>
      {children[0]}
      <div className="arrowDivider">➡</div>
      {children[1]}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 1000px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (min-width: 1250px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .arrowDivider {
    align-self: center;
    font-size: 3rem;
  }
`

export default CompAndUsageContainer
