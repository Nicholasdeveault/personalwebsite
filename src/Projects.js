import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <>
      <Div>
        <ScrollAnimation animateIn="fadeIn">
          <Work>
            bcas frdakejfrgrdsg hzsdfkjsadf klsdjfaSLKDefsalfkmjslf
            lksjdfaslfdkamsflkj
          </Work>
          <Socials>
            <LinkedinLink href="https://www.linkedin.com/in/nicholas-deveault/">
              <Img src="/images/linkedin.jpg" />
            </LinkedinLink>
            <GithubLink href="https://github.com/Nicholasdeveault">
              <Img src="/images/github.jpg" />
            </GithubLink>
          </Socials>
        </ScrollAnimation>
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

const Socials = styled.div`
  border: 2px solid red;
`;

const LinkedinLink = styled.a`
  margin: 10px;
`;

const GithubLink = styled.a`
  margin: 10px;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;

  &:hover {
    height: 40px;
    width: 40px;
    transition: ease-in 0.1s;
    transform: rotate(-10deg);
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
