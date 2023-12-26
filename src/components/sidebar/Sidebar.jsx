import React from "react";

import logo from "../../asset/Union.svg";
import {
  Container,
  Header,
  HeaderWrapper,
  Icon,
  ListTitle,
  Logo,
  Menu,
  MenuItem,
  NotParagraph,
  Notification,
  Title,
  Wrapper,
} from "./sidebar.style";
import { menu } from "../../data/menu";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <Logo src={logo} />
            <Title>nexa</Title>
          </HeaderWrapper>
        </Header>
        <Menu>
          {menu.map((list, i) => (
            <MenuItem key={i}>
              <Icon>{list.icon}</Icon>
              <ListTitle>{list.title}</ListTitle>
              {list.number && (
                <Notification>
                  <NotParagraph>{list.number}</NotParagraph>
                </Notification>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
