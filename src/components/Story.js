import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 10em 10px;
  background: #070707;
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
    font-weight: 600;
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
  return (
    <Container>
      <div className="wrapper">
        <div className="story-column story-column-1">
          <img
            src={`${require("../images/gallery/photo-256887_960_720.jpg")}`}
            alt="story"
          />
        </div>
        <div className="story-column story-column-2">
          <h2 className="story-h2">Our Story</h2>
          <p>
            We are innovative and caring in our work, dedicated in providing
            high-quality long-lasting media services which capture true moments
            in time.
          </p>
          <p>
            Remembering beloved family and friends through your heart, thoughts
            and mind…to once again take pleasure in treasured moments
            shared…what better way to do this than with a beautifully presented
            photo-video commemoration.
          </p>
          <p>
            We will understand your feelings and emotions and dedicate the
            necessary time to capture every page of your story.
          </p>
          <p>
            We would love to take this opportunity and work with you to find the
            perfect balance of photo and music video for your special needs.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Story;
