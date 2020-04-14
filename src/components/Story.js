import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BlockContent from "./block-content";
const Container = styled.div`
  padding: 10em 10px;
  background: #fff;
  color: #666;
  .wrapper {
    display: flex;
    max-width: 1700px;
    margin: auto;
  }
  .story-column {
    margin: 0em 2vw;
    width: 100%;
    height: 100%;
  }
  h2 {
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 45px;
    text-align: left;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #333;
  }
  p {
    font-size: 16px !important;
    line-height: 30px !important;
    font-weight: 400;
    margin-bottom: 20px;
  }
  img {
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
function Story() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          _rawStory
          storytitle
          storyImage {
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
        <div className="story-column story-column-1">
          <img
            src={data.allSanityHome.nodes[0].storyImage.asset.fluid.src}
            alt="story"
          />
        </div>
        <div className="story-column story-column-2">
          <h2 className="story-h2">{data.allSanityHome.nodes[0].storytitle}</h2>
          <BlockContent blocks={data.allSanityHome.nodes[0]._rawStory} />
        </div>
      </div>
    </Container>
  );
}

export default Story;
