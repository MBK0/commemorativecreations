import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../templates/DefaultLayout";
import styled from "styled-components";
import BlockContent from "../components/block-content";
const Container = styled.div`
  padding: 15em 10px 100px 10px;
  background: #070707;
  max-width: 1100px;
  margin: auto;
  h2 {
    display: block;
    text-align: center;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 60px;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
  }
  p {
    text-align: justify;
  }
`;

const Privacy = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPrivacy(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          title
          _rawText
        }
      }
    }
  `);
  return (
    <Layout>
      <Container>
        <h2>{data.allSanityPrivacy.nodes[0].title}</h2>
        <BlockContent blocks={data.allSanityPrivacy.nodes[0]._rawText} />
      </Container>
    </Layout>
  );
};

export default Privacy;
