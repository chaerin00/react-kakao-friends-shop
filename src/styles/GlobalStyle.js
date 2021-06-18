import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        font-size: 10px;
    }
    body{
        font-size: 10px;
        font-family:SFProText, "Apple SD Gothic Neo", AppleSDGothicNeo, "맑은 고딕", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
`;

export default GlobalStyle;
