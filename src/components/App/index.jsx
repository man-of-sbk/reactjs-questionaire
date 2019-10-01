import React from "react";

import { TopHalfBackground, FooterText } from "./style";

import QuestionaireContainer from "../QuestionaireContainer/index";

function App() {
  return (
    <React.Fragment>
      <TopHalfBackground />
      <QuestionaireContainer />
      <FooterText>
        <p>
          This content is neither created nor endorsed by Framgia Report Abuse -
          Terms & Services - Additional Terms
        </p>
        <img
          src="https://sun-asterisk.vn/wp-content/uploads/2019/03/Sun-Logotype-RGB-01.png"
          alt="framgia-logo"
        />
      </FooterText>
    </React.Fragment>
  );
}

export default App;
