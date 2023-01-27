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
    box-shadow: ${({ theme }) => theme.shadow};
    text-align: center;
    h1 {
      font-family: "Courier New", Courier, cursive;
    }
  }
`;

export const SignupButton = styled.button`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  width: 80%;
  padding: 1rem 2rem;
  border-radius: 10px;
  appearance: none;
  border: 0;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  &:focus,
  &:hover {
    appearance: none;
    border: 0;
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export default Signup;
