import HeaderPage from "./components/header";
import PageOne from "./components/page1";
import PageTwo from "./components/page2";
import PageThree from "./components/page3";
import PageFour from "./components/page4";
import PageFive from "./components/page5";

import ReactFullpage from "@fullpage/react-fullpage";

import "./App.css";

function App() {
  return (
    <ReactFullpage
      scrollOverflow={true}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <HeaderPage />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
