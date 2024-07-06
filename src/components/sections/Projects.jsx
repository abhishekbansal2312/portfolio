import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Typewriter from "typewriter-effect";
import StarryNightScene from "../canvas/StarryMoon";

const Container = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
  overflow: hidden;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 1px,
    transparent 2px
  );
  z-index: -1;
  animation: animateStars 50s linear infinite;

  @keyframes animateStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -1000px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 90};
    color: ${({ theme }) => theme.white};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
`}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="Projects">
      <Stars />
      <StarryNightScene />
      <Wrapper>
        <Title>Projects</Title>

        <Desc style={{ marginBottom: "40px" }}>
          <Typewriter
            options={{
              strings:
                "My work experience as a software engineer and working on different companies and projects",
              autoStart: true,
              loop: true,
            }}
          />
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}>
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}>
            WEB APP"S
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
