import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import Typewriter from "typewriter-effect";
import StarryNightCanvas from "../canvas/StarryNightCanvas";
import HeroBgAnimation from "../HeroBgAnimation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  z-index: 2; /* Ensure the content is above the background */
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Ensure the background is behind the content */
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <HeroBg>
        <StarryNightCanvas />
        <HeroBgAnimation />
      </HeroBg>
      <Wrapper>
        <Title>Experience</Title>
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

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
