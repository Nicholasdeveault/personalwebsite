import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <>
      <Div>
        <ScrollAnimation animateIn="fadeIn">
          {/* <Title>A little bit of what I've built</Title> */}
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
                This project was intended for a judo school purposes. The goal
                was to maked it easy for the teacher to create his day to day
                classes and refer to them when needed.
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
                During my time at Concordia, one of the best project we had to
                do was an online E-Commerce website. We had to work in teams,
                come up with ideas together and help eachother with are
                different strength and weaknesses.
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
          </Socials>
        </ScrollAnimation>
      </Div>
    </>
  );
};

export default Projects;

const Div = styled.div`
  height: 80vh;
  @media (max-width: 1200px) {
    height: 80vh;
  }

  @media (max-width: 600px) {
    height: 80vh;
  }
`;

// const Title = styled.p`
//   font-size: 50px;
//   color: white;
//   position: relative;
//   left: 35%;
// `;

const Work = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
  margin-left: 150px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
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
    margin: 20px;
    width: 50%;
  }
`;

const Video = styled.video`
  width: 60%;
  margin: 30px 0;
  animation: flicker 1.5s infinite alternate;

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

  @media (max-width: 1200px) {
    width: 50%;
    margin: 20px 50px;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin: 20px 50px;
  }
`;
const Video1 = styled.video`
  width: 50%;
  margin: 20px 40px;
  animation: flicker 1.5s infinite alternate;

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

  @media (max-width: 1200px) {
    width: 50%;
    margin: 20px 50px;
  }

  @media (max-width: 600px) {
    width: 50%;
    margin: 20px 50px;
  }
`;

const Socials = styled.div`
  position: fixed;
  bottom: -4%;
  margin: 70px 10px;
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
