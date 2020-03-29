import React from "react";
import styled from "styled-components";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import ContactInfo from "../components/ContactInfo";
import Mission from "../components/Mission";
import ChooseUs from "../components/ChooseUs";
import { AboutHero } from "../components/AboutHero";

const Container = styled.div`
  text-align: center;
  background: #070707;
  color: #fff;
`;
function About() {
  return (
    <Layout>
      <Seo title="About" />
      <Container>
        <AboutHero />
        <Mission />
        <ChooseUs />
        <ContactInfo />
      </Container>
    </Layout>
  );
}

export default About;
