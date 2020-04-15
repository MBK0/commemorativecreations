import React from "react";
import Services from "../components/Services";
import Layout from "../templates/DefaultLayout";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 95px;
  background: #070707;
`;
const services = () => {
  return (
    <Layout>
      <Container>
        <Services />
      </Container>
    </Layout>
  );
};

export default services;
