import React from "react";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Instagram from "../components/Instagram";
import Services from "../components/Services";
import Story from "../components/Story";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Story />
      <Services />
      <Testimonials />
      <Instagram />
    </Layout>
  );
};
export default IndexPage;
