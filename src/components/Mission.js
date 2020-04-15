import React from "react";
import styled from "styled-components";
import BlockContent from "./block-content";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Container = styled.div`
  padding: 12em 10px;
  background: #0d0d0d;
  color: #fff;
  .wrapper {
    max-width: 1300px;
    margin: auto;
  }
  .story-column {
    margin: 0em 2vw;
    width: 100%;
    height: 100%;
  }
  h2 {
    display: block;
    text-align: center;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 60px;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
  }
  p {
    font-size: 16px !important;
    line-height: 30px !important;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: justify;
  }
  h3 {
    font-weight: 400;
    line-height: 1.6em;
    text-align: justify;
    font-size: 16px;
  }
  video {
    width: 100%;
    height: 100%;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
  img {
    width: 100%;
    height: 100%;
  }
  .item {
    margin: 5em 2em;
  }
  @media only screen and (max-width: 1350px) {
    .wrapper {
      flex-direction: column-reverse;
    }
    .story-column {
      max-width: 750px;
      margin: auto;
    }
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
`;
function Mission() {
  const data = useStaticQuery(graphql`
    {
      allSanityAbout(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          heading
          _rawBody1
          _rawBody2
          image1 {
            asset {
              fluid(maxWidth: 1920, maxHeight: 1080) {
                src
              }
            }
          }
          image2 {
            asset {
              fluid(maxWidth: 1920, maxHeight: 1080) {
                src
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Container>
      <div className="wrapper">
        <h2 className="story-h2">{data.allSanityAbout.nodes[0].heading}</h2>
        <div className="content">
          <div className="item">
            <img src={data.allSanityAbout.nodes[0].image1.asset.fluid.src} />
          </div>
          <div className="item">
            <BlockContent blocks={data.allSanityAbout.nodes[0]._rawBody1} />
          </div>
        </div>
        <div className="content">
          <div className="item">
            <BlockContent blocks={data.allSanityAbout.nodes[0]._rawBody2} />
          </div>
          <div className="item">
            <img src={data.allSanityAbout.nodes[0].image2.asset.fluid.src} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Mission;
