import React from "react";
import StyledSignup, { SignupButton } from "./styled/Signup.styled";

const Signup = () => {
  return (
    <StyledSignup>
      <form>
        <div>
          <h1>Social Media App</h1>
          <sub>Created by Jonghan(Joseph)</sub>
        </div>
        <hr />
        <SignupButton>
          Sign in with Google <i className="fa-brands fa-google" />
        </SignupButton>
      </form>
    </StyledSignup>
  );
};

export default Signup;
