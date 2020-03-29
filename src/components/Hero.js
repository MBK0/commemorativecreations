import React, { useEffect, useState } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
const Conatiner = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  flex-direction: column;
  .hero-bg {
    position: relative;
    height: 100vh;
    z-index: -1;
    width: 100%;
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .hero-content {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
  }
  .hero-h1 {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-align: center;
    box-sizing: border-box;
    line-height: 1.1;
    color: inherit;
    margin-top: 20px;
    font-family: "Work Sans", sans-serif;
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .hero-h6 {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    line-height: 24px;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    font-size: 19px;
    box-sizing: border-box;
    color: #fff;
    font-weight: 400;
  }
  .btn {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 12px 30px;
    border-radius: 7px;
    border: 2px solid #d09900;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    color: #d09900;
    background: transparent;
    transition: all 0.4s;
    &:hover {
      color: #fff;
      border: 2px solid #fff;
    }
  }
  span {
    border-right: 0.05em solid;
    color: #d09900;
    animation: caret 1s steps(1) infinite;
  }
  .btn:focus {
    box-shadow: none !important;
  }
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
  .scroll-icon {
    position: absolute;
    width: 13px;
    height: 70px;
    bottom: 0px;
    border-right: 1px dashed rgba(255, 255, 255, 0.3);
    margin: 10px auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }
  .scroll-icon .mouse {
    position: relative;
    height: 38px;
    width: 25px;
    border: 3px solid #fff;
    border-radius: 12px;
    right: 0;
    top: 10px;
    display: block;
    text-align: center;
    z-index: 10;
    -webkit-animation: move 3s ease infinite;
    animation: move 3s ease infinite;
    &::before {
      content: "";
      display: block;
      height: 5px;
      width: 3px;
      background-color: #fff;
      position: absolute;
      top: 6px;
      left: 50%;
      margin-left: -1.5px;
      border-radius: 2px;
    }
  }
  @keyframes move {
    100% {
      -webkit-transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(-5px);
    }
    40% {
      -webkit-transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 650px) {
    .hero-h1 {
      font-size: 40px;
    }
    .hero-h6 {
      font-size: 16px;
    }
    .btn {
      font-size: 14px;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bg1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [heroState] = useState(0);
  useEffect(() => {
    var dataText = ["Creativity", "Imagination", "Motivation", "Results"];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length && document.querySelector(".hero-span")) {
        document.querySelector(".hero-span").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 2000);
      }
    }

    function StartTextAnimation(i) {
      if (dataText[i]) {
        typeWriter(dataText[i], 0, function() {
          StartTextAnimation(i + 1);
        });
      } else {
        StartTextAnimation(0);
      }
    }
    StartTextAnimation(0);
  }, [heroState]);
  return (
    <Conatiner>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="bg"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1 className="hero-h1">Welcome To Name</h1>
        <h6 className="hero-h6">
          Making Your Dreams Come True With Our{" "}
          <span className="hero-span">Creativity</span>
        </h6>
        <button className="btn">
          <Link to="/contact">Get In Touch</Link>
        </button>
      </div>
      <div class="scroll-icon">
        <a href="#about">
          <div class="mouse"></div>
        </a>
        <div class="end-top"></div>
      </div>
    </Conatiner>
  );
};

export default Hero;
