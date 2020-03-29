import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CategoryTab from "./CategoryTab";
import styled from "styled-components";
const Container = styled.div`
  margin: 5em auto;
`;
const Categories = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory(limit: 7, sort: { fields: title }) {
        nodes {
          title
        }
      }
    }
  `);
  const createCatsArray = () => {
    let array = [];
    for (let i = 0; i < data.allSanityCategory.nodes.length; i++) {
      array.push(data.allSanityCategory.nodes[i].title);
    }
    return array;
  };
  return (
    <Container>
      <CategoryTab catsArray={createCatsArray()} />
    </Container>
  );
};

export default Categories;
