import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
const Container = styled.div`
  padding: 12em 10px;
  background: #0d0d0d;
  color: #fff;
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
    color: #fff;
  }
  p {
    font-size: 16px !important;
    line-height: 30px !important;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: left;
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
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 770, maxHeight: 440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container>
      <div className="wrapper">
        <div className="story-column story-column-1">
          <Img fluid={data.file.childImageSharp.fluid} alt="bg" />
        </div>
        <div className="story-column story-column-2">
          <h2 className="story-h2">Our Mission</h2>
          <p>
            CatchCo is a creative photo studio providing a great number of photo
            and video services. We are passionate about photography and gladly
            share this passion with you. CatchCo is a team of enthusiasts who do
            their best to meet any client’s’ demand and provide them with
            perfectly made photos. We capture the moments of your life! We
            specialize in studio and location photography together with video
            recording and clipart production. We are glad to create for you a
            unique photo session totally reflecting your individuality and
            character.
          </p>
          <p>
            Founded in 2010 by renowned photographer North Sullivan, and located
            in a retro warehouse in New York. Ultimately our mission is to help
            people to see beauty in themselves and the world around us while
            creating wonderful works of art that will be passed down through
            generations.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Mission;
