import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Container>
          <HomeLink href="#home">Home</HomeLink>
          <AboutLink href="#about">About</AboutLink>
          <StackLink href="#stack">Stack</StackLink>
          <Projects href="#projects">Projects</Projects>
          <Resume href="https://github.com/Nicholasdeveault/personalwebsite/raw/main/Resume-English.pdf">
            Resume
          </Resume>
          <Profile href="https://www.linkedin.com/in/nicholas-deveault/">
            linkedin
          </Profile>
          <GithubProfile href="https://github.com/Nicholasdeveault">
            GitHub
          </GithubProfile>
        </Container>
        <Hamburger
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Ham1></Ham1>
          <Ham2></Ham2>
          <Ham3></Ham3>
        </Hamburger>
        <Sidebar setOpen={setOpen} open={open} />
      </Wrapper>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 25%;
  height: 8vh;
  position: fixed;
  top: 0;
  width: 50vw;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 10;

  a:nth-child(n) {
    color: white;
    text-decoration: none;
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 50%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      width: 100%;
      left: 0;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 25%;
    height: 8vh;
    position: fixed;
    top: 0;
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.8);

    z-index: 10;

    a:nth-child(n) {
      color: white;
      text-decoration: none;
      display: inline-block;
      position: relative;
      padding-bottom: 10px;
      :after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 3px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      :hover:after {
        width: 100%;
        left: 0;
      }
    }
  }

  @media (max-width: 600px) {
    display: none;
    z-index: 10;
  }
`;

const Profile = styled.a`
  text-decoration: none;
  color: white;
`;

const GithubProfile = styled.a`
  text-decoration: none;
  color: white;
`;

const Resume = styled.a`
  text-decoration: none;
  color: white;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: white;
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: white;
`;

const StackLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Projects = styled.a`
  text-decoration: none;
  color: white;
`;

const Wrapper = styled.div``;

const Hamburger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: none;

  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    right: 0;
    display: none;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 25px;
    z-index: 10;
  }
`;

const Ham1 = styled.div`
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 2px 0;
  transition-duration: 1s;
`;

const Ham2 = styled.div`
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 2px 0;
  transition-duration: 1s;
`;

const Ham3 = styled.div`
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 2px 0;
  transition-duration: 1s;
`;
