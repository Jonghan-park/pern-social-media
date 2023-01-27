import styled from "styled-components";

const Signup = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > form {
    background-color: ${({ theme }) => theme.elevation_1};
    border-radius: 5px;
    height: 400px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const SignupButton = styled.button``;

export default Signup;
