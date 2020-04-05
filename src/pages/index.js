import React from "react";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Story from "../components/Story";
import Packages from "../components/Packages";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Story />
      <Services />
      <Packages />
      <Testimonials />
    </Layout>
  );
};
export default IndexPage;
