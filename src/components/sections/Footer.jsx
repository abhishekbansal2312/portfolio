import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.soft2};
  margin: 10px 0; /* Reduced margin for smaller devices */
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: 2rem;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Divider />
        <Logo>Abhishek Bansal</Logo>

        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>&copy; 2024 Abhishek Bansal. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
