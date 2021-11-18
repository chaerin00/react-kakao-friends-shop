import React from "react";
import KakaoLogin from "react-kakao-login";
import { responseKakao } from "../lib/api";

const My = () => {
  return <KakaoLogin jsKey={"2ddc176ab543acd5e95ff7f0bbfc2683"} onSuccess={responseKakao} />;
};

export default My;
