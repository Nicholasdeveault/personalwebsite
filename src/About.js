import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <Div>
        <Img src="/images/unnamed.jpg" />

        <ScrollAnimation animateIn="fadeIn">
          {/* <Me>This is me!</Me> */}
          <Me>A little bit about me.</Me>
          <Stack>
            <StackImg src="/images/js.png" />
            <StackImg src="/images/react.jpg" />
            <StackImg src="/images/html5.jpg" />
            <StackImg src="/images/css.jpg" />
            <StackImg src="/images/node.png" />
            <StackImg src="/images/redux.png" />
            <Learning>
              {/* <P>Expending my knowledge</P> */}
              <P>Learning: </P>
              <LearnImg src="/images/seo.png" />
              <LearnImg src="/images/mysql.png" />
              <LearnImg src="/images/typescript.png" />
            </Learning>
          </Stack>
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

  @media (max-width: 1200px) {
    font-size: 35px;
    color: white;
    position: absolute;
    left: 7%;
    top: 145%;
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

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const StackImg = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px 10px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
    margin: 10px 10px;
  }
`;

const Learning = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const P = styled.p`
  color: white;
  font-size: 30px;
`;

const LearnImg = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px 10px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
    /* margin-left: 90px; */
    /* margin: 10px 50px; */
  }
`;
