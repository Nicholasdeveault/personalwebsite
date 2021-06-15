import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <Div>
        <Work>
          bcas frdakejfrgrdsg hzsdfkjsadf klsdjfaSLKDefsalfkmjslf
          lksjdfaslfdkamsflkj
        </Work>
      </Div>
    </>
  );
};

export default Projects;

const Work = styled.p`
  color: white;

  @media (max-width: 1200px) {
    color: white;
  }

  @media (max-width: 600px) {
    color: white;
  }
`;

const Div = styled.div`
  height: 100vh;
  border: 1px solid yellow;

  @media (max-width: 1200px) {
  }

  @media (max-width: 600px) {
  }
`;
