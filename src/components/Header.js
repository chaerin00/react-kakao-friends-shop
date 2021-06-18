import React from "react";
import styled from "styled-components";
import search from "../assets/img/search.svg";
import menu from "../assets/img/menu.svg";
import language from "../assets/img/globe.svg";
import { withRouter } from "react-router";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 64rem;
  padding: 0.8rem;
  background: white;
`;
const MenuIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background: url(${menu}) center center/cover no-repeat;
`;
const Logo = styled.div`
  width: 14.7rem;
  height: 2.4rem;
  background: url("https://t1.kakaocdn.net/friends/new_store/2.0/mobile/new-logo-mo.png")
    center center/cover no-repeat;
  border-radius: 1.2rem;
`;
const IconWrap = styled.div`
  display: flex;
`;
const SearchIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
  background: url(${search}) center center/cover no-repeat;
`;
const LangaugeIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background: url(${language}) center center/cover no-repeat;
`;

const Header = ({ history }) => {
  const logoClickHandler = () => {
    history.push("/");
  };
  return (
    <HeaderWrap>
      <MenuIcon></MenuIcon>
      <Logo onClick={logoClickHandler}></Logo>
      <IconWrap>
        <SearchIcon></SearchIcon>
        <LangaugeIcon></LangaugeIcon>
      </IconWrap>
    </HeaderWrap>
  );
};

export default withRouter(Header);
