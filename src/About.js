import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <Div>
        <Img src="/images/unnamed.jpg" />

        <ScrollAnimation animateIn="fadeIn">
          <Me>A little bit about me.</Me>
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
  margin: 0 50px;
  padding: 40px;

  @media (max-width: 1200px) {
    color: white;
    border: 5px solid white;
    font-size: 35px;
    margin: 20px;
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

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const Img = styled.img`
  height: 600px;
  width: 600px;
  margin-left: 80px;
  margin-right: 20px;
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
    width: 270px;
    border-radius: 20px;
    zoom: 100%;
    margin-bottom: 30px;
    margin-left: 40%;
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
    margin-left: 180px;
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
  font-size: 50px;
  color: white;
  transform: rotate(-8deg);
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00bfff,
    0 0 82px #00bfff;
  z-index: -2;
  margin-bottom: 180px;

  @media (max-width: 1200px) {
    font-size: 35px;
    color: white;
    position: absolute;
    left: 7%;
    top: 155%;
    transform: rotate(-8deg);
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00bfff,
      0 0 82px #00bfff, 0 0 92px #00bfff, 0 0 102px #00bfff, 0 0 151px #00bfff;
    z-index: -2;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    color: white;
    position: absolute;
    right: 0;
    top: 125%;
    transform: rotate(-8deg);
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00bfff,
      0 0 82px #00bfff, 0 0 92px #00bfff, 0 0 102px #00bfff, 0 0 151px #00bfff;
    z-index: -2;
  }
`;
