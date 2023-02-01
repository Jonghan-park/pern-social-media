import React from "react";
import StyledNav, { HamburgerButton } from "./styled/Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <HamburgerButton className="fas fa-bars" />
    </StyledNav>
  );
};

export default Nav;
