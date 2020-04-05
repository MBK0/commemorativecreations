import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery, Link } from "gatsby";
import Image from "gatsby-image";
const Container = styled.div`
  padding: 10em 10px;
  width: 100%;
  background: #070707;
  color: #fff;
  .wrapper {
    max-width: 1400px;
    margin: auto;
  }
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
  .subtitle {
    text-align: center;
    line-height: 1.5em;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 5em;
  }
  .packages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 4em;
  }
  .btn {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 8px 30px;
    border-radius: 7px;
    border: 2px solid #d09900;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #d09900;
    background: transparent;
    transition: all 0.4s;
    &:hover {
      color: #fff;
      border: 2px solid #fff;
    }
  }
  .package {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #d09900;
    margin: 2em auto;
  }
  span {
    color: #d09900;
    font-weight: 600;
  }
  h3,
  .price {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    span {
      font-size: 14px;
      color: #fff;
    }
  }
  .package-top {
    width: 100%;
    display: flex;
    background: #d09900;
    justify-content: space-around;
    padding: 12px 5px;
    margin-bottom: 40px;
  }
  li {
    margin: 10px 40px;
  }
`;
const Packages = () => {
  return (
    <Container>
      <h2>Our Packages</h2>
      <div className="wrapper">
        <p className="subtitle">
          At Commemorative Creations we are here to give you a 100% satisfaction
          guarantee. Delivering to you the best when needed without any fuss
          whatsoever especially when you have other pressing things to worry
          about.
        </p>
        <div className="packages">
          <div className="package">
            <div className="package-top">
              <h3>Silver</h3>
              <p className="price">
                250 <span>AUD</span>
              </p>
            </div>

            <ul>
              <li>
                Up to <span>70</span> photos and short videos
              </li>
              <li>
                Approximately <span>seven</span> minutes of viewing & music to
                accompany the photo slideshow
              </li>
              <li>A photo slideshow with video clips</li>
              <li>
                DVDs produced in high-definition, widescreen (16:9) USB and a
                digital link
              </li>
              <li>Basic photo enhancements as required</li>
              <li>Incorporate digital snaps, paper photos and video</li>
              <li>
                Scanning old photos and negatives including removing any dust,
                red eye, minor scratches
              </li>
              <li>Full crop of photo </li>
              <li>Presentations with captions, transitions and panning</li>
              <li>
                Royalty free soundtracks or your choice of music for personal
                use only
              </li>
              <li>Production of full HD 1080P DVD </li>
              <li>
                Production in Lower resolution suits all other portable players
              </li>
            </ul>
            <button className="btn">
              <Link to="/contact">Try</Link>
            </button>
          </div>
          <div className="package">
            <div className="package-top">
              <h3>Gold</h3>
              <p className="price">
                300 <span>AUD</span>
              </p>
            </div>
            <ul>
              <li>
                Up to <span>100</span> photos and short videos
              </li>
              <li>
                Approximately <span>twelve</span> minutes of viewing & music to
                accompany the photo slideshow
              </li>
              <li>A photo slideshow with video clips</li>
              <li>
                DVDs produced in high-definition, widescreen (16:9) USB and a
                digital link
              </li>
              <li>Basic photo enhancements as required</li>
              <li>Incorporate digital snaps, paper photos and video</li>
              <li>
                Scanning old photos and negatives including removing any dust,
                red eye, minor scratches
              </li>
              <li>Full crop of photo </li>
              <li>Presentations with captions, transitions and panning</li>
              <li>
                Royalty free soundtracks or your choice of music for personal
                use only
              </li>
              <li>Production of full HD 1080P DVD </li>
              <li>
                Production in Lower resolution suits all other portable players
              </li>
            </ul>
            <button className="btn">
              <Link to="/contact">Try</Link>
            </button>
          </div>
          <div className="package">
            <div className="package-top">
              <h3>Platinum </h3>
              <p className="price">
                350 <span>AUD</span>
              </p>
            </div>
            <ul>
              <li>
                Up to <span>150</span> photos and short videos
              </li>
              <li>
                Approximately <span>seventeen</span> minutes of viewing & music
                to accompany the photo slideshow
              </li>
              <li>A photo slideshow with video clips</li>
              <li>
                DVDs produced in high-definition, widescreen (16:9) USB and a
                digital link
              </li>
              <li>Basic photo enhancements as required</li>
              <li>Incorporate digital snaps, paper photos and video</li>
              <li>
                Scanning old photos and negatives including removing any dust,
                red eye, minor scratches
              </li>
              <li>Full crop of photo </li>
              <li>Presentations with captions, transitions and panning</li>
              <li>
                Royalty free soundtracks or your choice of music for personal
                use only
              </li>
              <li>Production of full HD 1080P DVD </li>
              <li>
                Production in Lower resolution suits all other portable players
              </li>
            </ul>
            <button className="btn">
              <Link to="/contact">Try</Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Packages;
