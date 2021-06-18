import React from "react";
import styled from "styled-components";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <Container open={open}>
        <HomeLink href="#home">Home</HomeLink>
        <AboutLink href="#about">About</AboutLink>
        <Projects href="#projects">Projects</Projects>
        <Resume href="https://github.com/Nicholasdeveault/Portfolio/raw/main/Resume-English.pdf">
          Resume
        </Resume>
        <Profile href="https://www.linkedin.com/in/nicholas-deveault/">
          linkedin
        </Profile>
        <GithubProfile href="https://github.com/Nicholasdeveault">
          GitHub
        </GithubProfile>
      </Container>
    </>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin-right: 65px;
  margin-top: 28px;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 1200px) {
    width: 320px;
    display: flex;
    justify-content: space-between;
    margin-right: 65px;
    margin-top: 28px;
    position: fixed;
    top: 0;
    right: 0;
  }

  @media (max-width: 600px) {
    display: flex;
    right: ${(props) => (props.open ? "0" : "-450px")};
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0);
    width: 305px;
    z-index: 10;

    a:nth-child(n) {
      display: block;
    }
  }
`;

const Profile = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;

const GithubProfile = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;

const Resume = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;

const Projects = styled.a`
  text-decoration: none;
  color: white;
  display: none;
`;
