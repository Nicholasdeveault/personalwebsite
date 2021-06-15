import React from "react";
import styled from "styled-components";
// import arrow from "../images/arrow.jpg";

const About = () => {
  return (
    <>
      <Div>
        <Img src="/images/me.jpg" />
        <Me>This is me!</Me>
        {/* <ArrowImg src={arrow} /> */}
        <Info>
          I am someone who is very imaginative, open-minded and curious,
          energized by social interaction and focusing on social harmony and
          cooperation. I value clarity, structure and planning.
        </Info>
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
  box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #ffffff;

  @media (max-width: 1200px) {
    height: 400px;
    width: 300px;
    border-radius: 20px;
    box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #ffffff;
  }

  @media (max-width: 600px) {
    height: 300px;
    width: 230px;
    /* margin-right: 240px; */
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #ffffff;
  }
`;

const Me = styled.p`
  font-size: 50px;
  color: white;
  position: absolute;
  right: 70%;
  top: 130%;
  transform: rotate(-8deg);
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  animation: flicker 1.5s infinite alternate;
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
    animation: flicker 1.5s infinite alternate;
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
    animation: flicker 1.5s infinite alternate;
    z-index: -2;
  }
`;

// const ArrowImg = styled.img`
//   /* border: 2px solid blue; */
//   width: 80px;
//   height: 80px;
//   position: absolute;
//   right: 73%;
//   top: 142%;
//   transform: rotate(-10deg);
//   z-index: -3;
// `;
