import React from "react";
import styled from "styled-components";
import Layout from "../templates/DefaultLayout";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/seo";
import ContactInfo from "../components/ContactInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Categories from "../components/Categories";
const Container = styled.div`
  text-align: center;
  padding-top: 97px;
  background: #fff;
  .bg {
    height: 500px;
  }
  .slide {
    position: relative;
  }
`;
function Services() {
  const data = useStaticQuery(graphql`
    {
      allSanityPicture(limit: 10) {
        nodes {
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 1920, maxHeight: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Container>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          transitionTime={1000}
          emulateTouch={false}
          infiniteLoop={false}
          autoPlay={true}
          interval={2500}
        >
          {data.allSanityPicture.nodes.map(node => (
            <div className="slide">
              <Img
                fluid={node.mainImage.asset.fluid}
                alt="bg"
                className="bg"
                key={node.slug}
              />
            </div>
          ))}
        </Carousel>
        <Categories />
        <ContactInfo />
      </Container>
    </Layout>
  );
}

export default Services;
