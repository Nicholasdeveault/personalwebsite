import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS",
    "Node.js",
    "Redux",
    "MongoDB",
    "MySql",
    "SEO",
    "TypeScript",
    "Ruby",
  ],
  datasets: [
    {
      label: "Skill level",
      backgroundColor: [
        "rgb(245, 232, 19)",
        "rgb(0, 191, 255)",
        "rgb(255, 87, 51)",
        "rgb(0, 0, 130)",
        "rgb(56, 142, 68)",
        "rgb(144, 65, 193)",
        "rgb(56, 142, 68)",
        "rgb(50, 80, 255)",
        "rgb(204, 204, 204)",
        "rgb(245, 155, 50)",
        "rgb(255, 10, 10)",
      ],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [72, 77, 85, 80, 60, 55, 50, 20, 55, 5, 10],
    },
  ],
};

const SkillStack = () => {
  return (
    <>
      <Div>
        <ScrollAnimation animateIn="fadeIn">
          <Graphdiv>
            <Graph>
              <Bar
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Graph>
            <Stack>
              <Current>
                <P>Skills: </P>
                <StackImg src="/images/js.png" />
                <StackImg src="/images/react.jpg" />
                <StackImg src="/images/html5.jpg" />
                <StackImg src="/images/css.jpg" />
                <StackImg src="/images/node.png" />
                <StackImg src="/images/redux.png" />
                <StackImg src="/images/mongoDB.png" />
              </Current>
              <Learning>
                {/* <P>Expending my knowledge</P> */}
                <P>Learning: </P>
                <LearnImg src="/images/seo.png" />
                <LearnImg src="/images/mysql.png" />
                <LearnImg src="/images/typescript.png" />
                <LearnImg src="/images/ruby.png" />
              </Learning>
            </Stack>
          </Graphdiv>
        </ScrollAnimation>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150vh;
  }
`;

const Graphdiv = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  /* justify-content: center; */

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Graph = styled.div`
  display: flex;
  width: 40vw;
  margin-right: 80px;

  @media (max-width: 1200px) {
    width: 70vw;
    margin: 50px 0;
  }

  @media (max-width: 600px) {
    width: 80vw;
    margin: 50px 0;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

const Current = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 120px;
  }
`;

const StackImg = styled.img`
  height: 80px;
  width: 80px;
  margin: 15px 15px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1200px) {
    height: 65px;
    width: 65px;
    margin: 10px 10px;
  }

  @media (max-width: 600px) {
    height: 55px;
    width: 55px;
    margin: 10px 10px;
  }
`;

const Learning = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const LearnImg = styled.img`
  height: 80px;
  width: 80px;
  margin: 15px 15px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1200px) {
    height: 65px;
    width: 65px;
    margin: 10px 10px;
  }

  @media (max-width: 600px) {
    height: 55px;
    width: 55px;
    margin: 10px 10px;
  }
`;

const P = styled.p`
  color: white;
  font-size: 40px;

  @media (max-width: 1200px) {
    color: white;
    font-size: 30px;
  }

  @media (max-width: 600px) {
    color: white;
    font-size: 20px;
  }
`;

export default SkillStack;
