import React from "react";
import styled from "styled-components";
import BlockContent from "./block-content";
import { useStaticQuery, graphql } from "gatsby";
const Container = styled.div`
  padding: 12em 10px;
  background: #0d0d0d;
  color: #fff;
  .wrapper {
    max-width: 1000px;
    margin: auto;
    text-align: center;
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
    text-align: center;
  }
  video {
    width: 100%;
    height: 100%;
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
          _rawBody
        }
      }
    }
  `);
  return (
    <Container>
      <div className="wrapper">
        <h2 className="story-h2">{data.allSanityAbout.nodes[0].heading}</h2>
        <BlockContent blocks={data.allSanityAbout.nodes[0]._rawBody} />
      </div>
    </Container>
  );
}

export default Mission;
