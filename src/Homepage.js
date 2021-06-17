import React from "react";
import styled from "styled-components";
// import ScrollAnimation from "react-animate-on-scroll";

const Homepage = () => {
  return (
    <>
      <Container>
        {/* <ScrollAnimation animateIn="fadeIn"> */}
        <Name>Nicholas Deveault</Name>
        {/* </ScrollAnimation> */}
      </Container>
    </>
  );
};

export default Homepage;

const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2607&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    background-image: url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2607&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 50%;
    height: 120vh;
  }

  @media (max-width: 600px) {
    background-image: url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2607&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 50%;
    height: 120vh;
  }
`;

const Name = styled.p`
  margin-top: 150px;
  font-size: 60px;
  color: white;

  @media (max-width: 1200px) {
    margin-top: 160px;
    font-size: 35px;
    color: white;
    border-bottom: 2px solid white;
  }

  @media (max-width: 600px) {
    margin-top: 160px;
    font-size: 35px;
    color: white;
    border-bottom: 2px solid white;
  }
`;
