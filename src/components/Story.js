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
function Story() {
  return (
    <Container>
      <div className="wrapper">
        <div className="story-column story-column-1">
          <video autoPlay muted loop>
            <source
              src={`${require("../images/videos/Milly_Promo_480p.mp4")}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="story-column story-column-2">
          <h2 className="story-h2">Our Story</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Story;
