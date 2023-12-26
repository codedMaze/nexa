import React from "react";

import search from "../../asset/Search.svg";
import {
  Container,
  Input,
  InputWrapper,
  LogOut,
  SearchIcon,
} from "./navbar.style";

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon src={search} />
        <Input />
      </InputWrapper>
      <LogOut>Log Out</LogOut>
    </Container>
  );
};

export default Navbar;
