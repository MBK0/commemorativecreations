import React from "react";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import Section from "../components/Section";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="home" />
      <Section />
    </Layout>
  );
};
export default IndexPage;
