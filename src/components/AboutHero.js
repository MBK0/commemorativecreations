import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
const Container = styled.div`
  position: relative;
  .bg {
    position: relative;
    width: 100%;
    min-height: 600px;
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
  .about-content {
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
  h1 {
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
  p {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    line-height: 24px;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    font-size: 19px;
    box-sizing: border-box;
    color: #fff;
    font-weight: 400;
  }
  button {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 12px 30px;
    border-radius: 7px;
    border: 2px solid #99be8f;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    color: #99be8f;
    background: transparent;
    transition: all 0.4s;
    &:hover {
      color: #fff;
      border: 2px solid #fff;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 15px;
    }
    button {
      font-size: 14px !important;
    }
  }
`;
export const AboutHero = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityAbout(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          title
          subtilte
          mainImage {
            asset {
              fluid(maxWidth: 1920, maxHeight: 600) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Img
        fluid={data.allSanityAbout.nodes[0].mainImage.asset.fluid}
        alt="bg"
        className="bg"
      />
      <div className="about-content">
        <h1>{data.allSanityAbout.nodes[0].title}</h1>
        <p>{data.allSanityAbout.nodes[0].subtilte}</p>
        <button className="btn">
          <Link to="/contact">Book Now</Link>
        </button>
      </div>
    </Container>
  );
};
