import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const LeftArrowWrap = styled.div`
  position: absolute;
  top: 25.4rem;
  left: 30vw;
  width: 2.5rem;
  height: 3.5rem;
  background: url("https://t1.kakaocdn.net/friends/new_store/2.0/pc/arrow-left.png")
    center center / 16px no-repeat;
  z-index: 10;
  cursor: pointer;
`;
const LeftArrow = ({ handleBtnClick }) => {
  return <LeftArrowWrap onClick={handleBtnClick} />;
};
const RightArrowWrap = styled.div`
  position: absolute;
  top: 25.4rem;
  right: 30vw;
  width: 2.5rem;
  height: 3.5rem;
  background: url("https://t1.kakaocdn.net/friends/new_store/2.0/pc/arrow-right.png")
    center center / 16px no-repeat;
  z-index: 10;
  cursor: pointer;
`;
const RightArrow = ({ handleBtnClick }) => {
  return <RightArrowWrap onClick={handleBtnClick} />;
};

const Container = styled.div`
  max-width: 64rem;
  overflow: hidden;
`;
const ImageSliderWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  .slider__img {
    width: 64rem;
    height: 36rem;
    background: url(${(props) => props.bg}) no-repeat top center;
    object-fit: cover;
  }
  .slider__title {
    padding-top: 1.2rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -0.07em;
    color: #373737;
  }
  .slider__subtitle {
    padding-top: 1.1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: -0.055em;
    color: #505050;
  }
`;
const ImageSliderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const images = [
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210531110734_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210615144604_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210615143750_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210610121236_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210609153826_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210531115449_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210604113152_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210524120219_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210222160504_mobile_kr.jpg?type=thumb&opt=R375x211@2xa",
    "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210208100213_mobile_kr.jpg?type=thumb&opt=R375x211@2xa"
  ];
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    //이미지 크기만큼 x축으로 이동
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    setTimeout(handleNext, 2000);
  }, [currentSlide]);

  //   useEffect(() => {
  //     setTimeout(handleNext, 2000);
  //   }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide === 9) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(9);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <ImageSliderDiv>
      <Container>
        <LeftArrow handleBtnClick={handlePrev} />
        <ImageSliderWrap ref={slideRef}>
          {images.map((img, key) => (
            <SliderItem bg={img}>
              <div className="slider__img" alt={key}></div>
            </SliderItem>
          ))}
        </ImageSliderWrap>
        <RightArrow handleBtnClick={handleNext} />
      </Container>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
