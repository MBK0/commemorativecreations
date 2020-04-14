import React, { useState } from "react";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Story from "../components/Story";
import Packages from "../components/Packages";
import OrderForm from "../components/OrderForm";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
`;
const IndexPage = () => {
  const [orderFormIsActive, SetOrderFormIsActive] = useState(0);
  const [packageName, SetPackageName] = useState(0);
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Story />
      <Packages
        SetOrderFormIsActive={SetOrderFormIsActive}
        SetPackageName={SetPackageName}
      />
      <Testimonials />
      <Container
        className="order-form"
        style={orderFormIsActive ? { display: "block" } : { display: "none" }}
      >
        <OrderForm
          packageName={packageName}
          SetOrderFormIsActive={SetOrderFormIsActive}
        />
      </Container>
    </Layout>
  );
};
export default IndexPage;
