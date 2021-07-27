import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <>
      <Div>
        <ScrollAnimation animateIn="fadeIn">
          <Work>
            <Project1>
              <P>Hibagon Judo Project</P>
              <Video controls>
                <source
                  src="https://res.cloudinary.com/dwqpv7b5b/video/upload/v1623960318/Recording__6_slil0e.mp4"
                  type="video/mp4"
                />
              </Video>
              <Description>
                This project was intended for a judo school. The goal was to
                make it easy for the teacher to create his day-to-day classes by
                selecting each exercise and refer to them when needed.<br></br>
                <br></br>
                <StackImg src="/images/js.png" />
                <StackImg src="/images/react.jpg" />
                <StackImg src="/images/html5.jpg" />
                <StackImg src="/images/css.jpg" />
                <StackImg src="/images/node.png" />
                <StackImg src="/images/redux.png" />
              </Description>
            </Project1>
            <Project2>
              <P>YYZ E-Commerce Project</P>
              <Video1 controls>
                <source
                  src="https://res.cloudinary.com/dwqpv7b5b/video/upload/v1623962766/Recording__7_gxzpt1.mp4"
                  type="video/mp4"
                />
              </Video1>
              <Description>
                During my time at Concordia, one of the most exciting challenges
                I faced was through building an e-commerce website. As a team,
                we inspired one another to make our ideas come to life.<br></br>
                <br></br> <StackImg src="/images/js.png" />
                <StackImg src="/images/react.jpg" />
                <StackImg src="/images/html5.jpg" />
                <StackImg src="/images/css.jpg" />
                <StackImg src="/images/node.png" />
              </Description>
            </Project2>
          </Work>
          <Socials>
            <LinkedinLink href="https://www.linkedin.com/in/nicholas-deveault/">
              <Img src="/images/linkedin.jpg" />
            </LinkedinLink>
            <GithubLink href="https://github.com/Nicholasdeveault">
              <Img src="/images/github.jpg" />
            </GithubLink>
            <Mail href="mailto: nicholasdeveault@gmail.com">
              <Img src="/images/mail.png" />
            </Mail>
          </Socials>
        </ScrollAnimation>
      </Div>
    </>
  );
};

export default Projects;

const StackImg = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px 10px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1200px) {
    height: 50px;
    width: 50px;
    margin: 10px 10px;
  }

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
    margin: 10px 10px;
  }
`;

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
  }
`;

const Work = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Project1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Project2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 45px;
  color: white;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  border: 5px solid white;
  color: white;
  font-size: 35px;
  margin: 50px 100px;
  padding: 30px;
  width: 50%;

  @media (max-width: 1200px) {
    color: white;
    border: 5px solid white;
    font-size: 35px;
    margin: 60px;
    width: 50%;
  }

  @media (max-width: 600px) {
    color: white;
    border: 5px solid white;
    font-size: 25px;
    width: 50%;
  }
`;

const Video = styled.video`
  width: 55%;
  margin: 30px 0;
  animation: flicker 3s infinite alternate;

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      box-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #fff;
    }

    20%,
    24%,
    55% {
      box-shadow: none;
    }
  }

  &:hover {
    transition: ease-in 0.2s;
    transform: rotate(5deg);
  }

  @media (max-width: 1200px) {
    width: 50%;
    margin: 20px 50px;
  }
  @media (max-width: 600px) {
    width: 80%;
    margin: 20px 50px;
  }
`;
const Video1 = styled.video`
  width: 55%;
  margin: 20px 40px;
  animation: flicker 3s infinite alternate;

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      box-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #fff;
    }

    20%,
    24%,
    55% {
      box-shadow: none;
    }
  }

  &:hover {
    transition: ease-in 0.2s;
    transform: rotate(5deg);
  }

  @media (max-width: 1200px) {
    width: 50%;
    margin: 20px 50px;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 20px 50px;
  }
`;

const Socials = styled.div`
  position: fixed;
  bottom: -4%;
  margin: 70px 10px;

  @media (max-width: 1200px) {
    position: fixed;
    bottom: -4%;
    margin: 50px 10px;
  }

  @media (max-width: 600px) {
    position: fixed;
  }
`;

const LinkedinLink = styled.a`
  margin: 10px;
`;

const GithubLink = styled.a`
  margin: 10px;
`;

const Mail = styled.a`
  margin: 10px;
`;

const Img = styled.img`
  border-radius: 30%;
  height: 35px;
  width: 35px;

  &:hover {
    height: 40px;
    width: 40px;
    transition: ease-in 0.1s;
    transform: rotate(-10deg);
  }
`;
