import Header from "./components/Header";
import Navigator from "./components/Navigator";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import New from "./pages/New";
import My from "./pages/My";
import Hot from "./pages/Hot";
import Today from "./pages/Today";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Blank = styled.div`
  width: 64rem;
  height: 9rem;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Navigator />
        <Blank />
        <Switch>
          <Route path="/" exact component={New} />
          <Route path="/new" component={New} />
          <Route path="/my" component={My} />
          <Route path="/today" component={Today} />
          <Route path="/hot" component={Hot} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
