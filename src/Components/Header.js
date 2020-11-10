import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(20, 20, 20, 0.9);
  box-shadow: 0px 1px 5px 2px rgb(0, 0, 0, 0.5);
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
`;
const Item = styled.li`
  padding-top: 6px;
  width: 90px;
  height: 100%;
  border-bottom: 4px solid
    ${(props) => (props.current ? "rgb(112, 161, 255)" : "transparent")};
  background-color: ${(props) => (props.current ? "rgb(40, 40, 40, 1)" : "")};
  transition: border-bottom 0.2s linear, background-color 0.2s linear;
  :hover {
    background-color: rgb(40, 40, 40, 1);
    border-bottom: 4px solid
      ${(props) =>
        props.current ? "rgb(112, 161, 255)" : "rgb(170,170,170,0.6)"};
  }
`;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default withRouter(({ location: { pathname } }) => {
  //Header 컴포넌트는 Route로 불러온 컴포넌트가 아니므로, withRouter 를 통해 location, history, match 등에 접근 가능!
  console.log(pathname);
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
});
