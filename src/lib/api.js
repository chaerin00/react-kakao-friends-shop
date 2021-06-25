import axios from "axios";

export const responseKakao = async (res) => {
  console.log(res.response.access_token);
  const userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
    headers: {
      Authorization: `Bearer ${res.response.access_token}`
    }
  });
  console.log(userInfo);
};
