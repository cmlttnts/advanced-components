import styled from "@emotion/styled"

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & > input {
    transform: scale(1.4);
    margin-left: 45px;
    margin-right: 25px;
  }
`
export default Label
