import React from "react";

import styled from "styled-components";

import QuestionaireContainer from "./QuestionaireContainer";

const TopHalfBackground = styled.div`
  background: #653fb8;
  height: 150px;
  width: 100%;
  position: -webkit-fixed;
  position: -moz-fixed;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const FooterText = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

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
