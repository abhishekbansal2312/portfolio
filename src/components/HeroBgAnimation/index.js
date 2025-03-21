import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;

  .BgAnimation__svg {
    width: 100%;
    height: auto;
    max-width: 1200px;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6">
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)">
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737">
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint6_linear)">
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6">
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)">
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737">
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)">
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737">
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)">
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="230.854"
        cy="288.633"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-230.854 -288.633) rotate(90 230.854 288.633)"
        fill="#F46737">
        <animateMotion
          dur="10s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M231.208 288.273L256.962 262.489"
        transform="translate(-231.208 -288.273) rotate(-45 231.208 288.273)"
        stroke="url(#paint8_linear)">
        <animateMotion
          dur="10s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>

      <g className="shooting-stars">
        <circle cx="50" cy="50" r="2" fill="#FFFFFF">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            keyTimes="0; 1"
            values="0 0; 600 600"
            keySplines=".42 0 1 1; .42 0 1 1"
          />
        </circle>
        <circle cx="100" cy="100" r="2" fill="#FFFFFF">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            keyTimes="0; 1"
            values="0 0; 600 600"
            keySplines=".42 0 1 1; .42 0 1 1"
            begin="1s"
          />
        </circle>
        <circle cx="150" cy="150" r="2" fill="#FFFFFF">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            keyTimes="0; 1"
            values="0 0; 600 600"
            keySplines=".42 0 1 1; .42 0 1 1"
            begin="2s"
          />
        </circle>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 301) scale(301)">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 301) scale(301)">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 301) scale(301)">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="294.685"
          y1="193.474"
          x2="268.932"
          y2="219.258"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.171"
          y1="362.952"
          x2="450.417"
          y2="337.168"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="381.81"
          y1="154.669"
          x2="356.057"
          y2="128.885"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.667"
          y1="382.335"
          x2="359.42"
          y2="356.551"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="231.208"
          y1="288.273"
          x2="256.962"
          y2="262.489"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;
