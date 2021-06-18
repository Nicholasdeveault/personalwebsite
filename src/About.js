import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <Div>
        <Img src="/images/unnamed.jpg" />
        <ScrollAnimation animateIn="fadeIn">
          <Me>This is me!</Me>
          <Info>
            Hi! My name is Nicholas and I am someone who is very imaginative,
            open-minded and curious. I am energized by social interaction and
            focusing on social harmony and cooperation. I value clarity,
            structure and planning.
          </Info>
        </ScrollAnimation>
      </Div>
    </>
  );
};

export default About;

const Info = styled.p`
  border: 5px solid white;
  color: white;
  font-size: 50px;
  margin: 0 150px;
  padding: 40px;

  @media (max-width: 1200px) {
    color: white;
    border: 5px solid white;
    font-size: 35px;
    margin: 60px;
  }

  @media (max-width: 600px) {
    color: white;
    border: 5px solid white;
    font-size: 25px;
    margin: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  height: 600px;
  width: 600px;
  margin-left: 100px;
  border-radius: 40px;
  zoom: 120%;
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

  @media (max-width: 1200px) {
    height: 400px;
    width: 300px;
    border-radius: 20px;
    zoom: 100%;
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
  }

  @media (max-width: 600px) {
    height: 300px;
    width: 190px;
    margin-bottom: 20px;
    border-radius: 20px;
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
  }
`;

const Me = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 50px;
  color: white;
  /* position: absolute; */
  /* right: 70%; */
  /* top: 130%; */
  transform: rotate(-8deg);
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa;
  z-index: -2;

  @media (max-width: 1200px) {
    font-size: 35px;
    color: white;
    position: absolute;
    left: 7%;
    top: 140%;
    transform: rotate(-8deg);
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
    z-index: -2;
  }

  @media (max-width: 600px) {
    font-size: 25px;
    color: white;
    position: absolute;
    right: 0;
    top: 135%;
    transform: rotate(-8deg);
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
    z-index: -2;
  }
`;
