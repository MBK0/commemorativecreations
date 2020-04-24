import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  padding: 5em 10px;
  margin: auto;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${require("../images/tests-bg.jpg")});
  background-position: center;
  background-size: cover;
  color: #666;
  h2 {
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
  }
  .tests {
    max-width: 800px;
    padding: 10px;
    height: 100%;
    margin: auto;
  }
  .test-box {
    padding: 2em 2.25em 1em 2.25em;
    height: inherit;
  }
  p {
    color: #c7c7c7;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    text-align: center;
  }
  .name {
    text-align: right;
    color: #d09900;
    margin-top: 3.2em;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-weight: 500;
    font-size: 13px;
  }
  .svg1 {
    margin-bottom: 0.6em;
  }
  .svg2 {
    float: right;
  }
  svg {
    fill: #c7c7c7;
  }
  @media only screen and (max-width: 1035px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
`;
function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  const data = useStaticQuery(graphql`
    {
      allSanityTestimonials {
        nodes {
          name
          testimonial
        }
      }
    }
  `);
  return (
    <Container>
      <h2>OUR CLIENTS</h2>
      <div className="tests">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all 1.5s"
          transitionDuration={1000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.allSanityTestimonials.nodes.map((node) => (
            <div className="test-box" key={node.name}>
              <svg
                stroke="currentColor"
                viewBox="0 0 512 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="svg1"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p className="quote">{node.testimonial}</p>
              <svg
                stroke="currentColor"
                viewBox="0 0 512 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="svg2"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p className="name">{node.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Testimonials;
