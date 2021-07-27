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
  border: 2px solid red;
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
    height: 100vh;
  }
`;

const Graphdiv = styled.div`
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  width: 1200px;
  margin-right: 100px;

  @media (max-width: 1200px) {
    max-width: 800px;
  }

  @media (max-width: 600px) {
    max-width: 500px;
    margin: 0;
    /* margin-left: 120px; */
    /* margin-right: 150px; */
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const Current = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
  }

  @media (max-width: 600px) {
  }
`;

const StackImg = styled.img`
  height: 80px;
  width: 80px;
  margin: 15px 15px;

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

const LearnImg = styled.img`
  height: 80px;
  width: 80px;
  margin: 15px 15px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
  }
`;

const P = styled.p`
  color: white;
  font-size: 40px;
`;

export default SkillStack;
