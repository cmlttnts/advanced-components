import styled from "@emotion/styled"

const CompAndUsageContainer = ({ children }) => {
  const firstChild = children.length ? children[0] : children
  return (
    <Container>
      {firstChild}
      {children.length > 1 && (
        <>
          <div className="arrowDivider">➡</div>
          {children[1]}
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
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
    margin-bottom: 1rem;
  }
  .arrowDivider {
    align-self: center;
    font-size: 3rem;
  }
`

export default CompAndUsageContainer
