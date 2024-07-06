import React from "react";
import styled from "styled-components";
import { CertificateData } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";
import Typewriter from "typewriter-effect";
import StarryNightScene from "../canvas/StarryNightScene";

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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Divider = styled.hr`
  width: 60px;
  height: 3px;
  margin: 20px auto;
  background-color: #ccc;
  border: none;
`;

const Certificates = () => {
  return (
    <Container id="Certificate">
      <Divider />
      <StarryNightScene />
      <Stars />
      <Wrapper>
        <Title>Certificates & Achievements</Title>
        <Desc style={{ marginBottom: "40px" }}>
          <Typewriter
            options={{
              strings: "My Certificates and Achievements, I have Earned",
              autoStart: true,
              loop: true,
            }}
          />
        </Desc>
        <CardContainer>
          {CertificateData.map((certificate) => (
            <CertificateCard key={certificate.id} project={certificate} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
