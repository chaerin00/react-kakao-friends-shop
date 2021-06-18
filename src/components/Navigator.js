import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const NavigatorWrap = styled.div`
  position: fixed;
  top: 4rem;
  width: 64rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.7rem;
    height: 4.3rem;
    font-size: 1.6rem;
  }
`;
const Navigator = ({ history }) => {
  const clickHandler = (e) => {
    console.log(e.target.id);
    history.push(`/${e.target.id}`);
  };
  return (
    <NavigatorWrap>
      <div className="item" id="today" onClick={clickHandler}>
        오늘
      </div>
      <div
        className="item"
        id="new"
        style={{ fontWeight: "bold", borderBottom: "5px solid black" }}
        onClick={clickHandler}
      >
        신규
      </div>
      <div className="item" id="hot" onClick={clickHandler}>
        인기
      </div>
      <div className="item" id="my" onClick={clickHandler}>
        마이
      </div>
    </NavigatorWrap>
  );
};

export default withRouter(Navigator);
