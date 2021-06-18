import React from "react";
import styled from "styled-components";
import choonsik from "../assets/img/banner.jpg";
import Item from "../components/Item";

const NewWrap = styled.div``;
const ImageSlider = styled.img`
  width: 64rem;
`;
const Items = styled.div`
  padding: 4.9rem 3.5rem;
  .title {
    display: flex;
    flex-direction: column;
    &__sub {
      font-size: 1.5rem;
      color: #9a9a9a;
      margin-bottom: 0.5rem;
    }
    &__main {
      font-size: 2.8rem;
      font-weight: bold;
      color: #000000;
      margin-bottom: 2rem;
    }
  }
`;
const ItemsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const New = () => {
  const items = [
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601174532087_8809721509166_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 어피치 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601174615656_8809721509173_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601174708372_8809721509180_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601174755126_8809721509197_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601174840973_8809721509203_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210604175432746_8809721509562_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210604175532878_8809721509579_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    },
    {
      name: "초록방학 개구리 라이언 인형",
      price: 32000,
      image:
        "https://t1.daumcdn.net/friends/prod/product/20210601183830960_8809721509388_AW_00.jpg?type=thumb&opt=R255x255@2xa"
    }
  ];
  return (
    <NewWrap>
      <ImageSlider src={choonsik}></ImageSlider>
      <Items>
        <div className="title">
          <div className="title__sub">추천 신규 테마</div>
          <div className="title__main">초록방학</div>
        </div>
        <ItemsWrap>
          {items.map((item) => (
            <Item item={item} />
          ))}
        </ItemsWrap>
      </Items>
    </NewWrap>
  );
};

export default New;
