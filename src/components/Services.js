import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 5em 10px 8em 10px;
  text-align: center;
  margin: auto;
  width: 100%;
  background: #0d0d0d;
  h2 {
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 60px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
  }
  .insta-grid {
    display: grid;
    max-width: 1400px;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 2px;
  }
  .insta {
    position: relative;
    box-sizing: border-box;
    width: calc(100% - 1px);
    height: 100%;
  }
  .insta-info {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    padding: 0em 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    display: flex;
    transition: all 0.7s ease;
  }
  .insta:hover .insta-info {
    z-index: -1;
  }
  h5 {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }
  h6 {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #ccc;
    line-height: 1.5em;
  }
  video {
    width: 100%;
    height: 100%;
  }
  p {
    color: #fff;
    max-width: 1400px;
    margin: auto;
    margin-top: 6em;
    line-height: 2em;
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
    .insta-grid {
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
  }
`;
function Services({ data }) {
  const videos = [
    "Baby_Promo_1_480p.mp4",
    "Milly_Promo_480p.mp4",
    "Pet_Promo_480p.mp4",
    "Wedding_Promo_480p.mp4",
  ];
  const captions1 = [
    "Babies Christening",
    "Funerals",
    "Pet funerals",
    "Wedding",
  ];
  const captions2 = [
    "There is nothing quite as exciting as waiting for the arrival of a new baby, The most precious jewels, you’ll ever have around your neck, are the arms of your children. Capture the joy of your baby’s memorable moments from the first breath to the first step ",
    "How we tell our story to ourselves and others, can have a significant impact on our life, sharing moments of those we’ve lost is how we keep from really losing them. Commemorative Creations can bring your story together by providing you with a memorial video produced to enhance your loved one’s memories",
    "Let's not forget that special friend that made our life wholesome, with Commemorative-creations we can give you a memory that can last forever",
    "Tell your unique love story with a beautiful photo-video production, we combine your images and video clips into a moving pictorial collage with the perfect combination of music.",
  ];
  return (
    <Container>
      <h2>Our Services</h2>
      <div className="insta-grid">
        {videos.map((video, index) => (
          <div className="insta" key={video}>
            <video
              controls
              preload="none"
              poster={`${require(`../images/p${index + 1}.png`)}`}
            >
              <source
                src={`${require(`../images/services/${video}`)}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="insta-info">
              <h5>{captions1[index]}</h5>
              <h6>{captions2[index]}</h6>
            </div>
          </div>
        ))}
      </div>
      <p>
        • Funerals • Birthdays • Anniversaries • Pet Memorials • Baby Years •
        Reunions • Entering a nursing home • Friendships • Engagement •
        Retirement • Milestones • Travel • Milestones for organisations •
        Promotions for business • Promote events...
      </p>
    </Container>
  );
}

export default Services;
