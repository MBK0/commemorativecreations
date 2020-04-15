import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
const Container = styled.div`
  width: 100%;
  margin: 7em auto;
  max-width: 1560px;
  padding: 0.5em;
  .react-tabs__tab-list,
  .react-tabs__tab--selected {
    border: 0px;
    outline: none;
  }
  .react-tabs__tab:focus {
    box-shadow: none;
  }
  .react-tabs__tab-panel {
    display: block;
    transform: translateX(100%);
    transition: all 1s;
  }
  .react-tabs__tab-panel--selected {
    transform: translateX(0%);
  }
  .react-tabs {
    overflow: hidden;
  }
  .react-tabs__tab {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .react-tabs__tab--selected {
    color: #d09900;
    background: transparent;
  }
  .tab-content {
    margin-top: 5em;
  }
  .tab-card {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
  .tab-img {
    width: 100%;
    min-height: 300px;
    height: 100%;
  }
  video {
    width: 100%;
  }
  @media only screen and (max-width: 1022px) {
    .tab-img {
      min-height: 50vw;
    }
  }
  @media only screen and (max-width: 530px) {
    .tab-card {
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
  }
`;

const CategoryTab = ({ catsArray, nbrCats }) => {
  const data = useStaticQuery(graphql`
    {
      pictures: allSanityPicture(
        limit: 50
        sort: { fields: _createdAt, order: DESC }
      ) {
        nodes {
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 1920, maxHeight: 1080) {
                src
              }
            }
          }
          categories {
            title
          }
        }
      }
      videos: allSanityVideo(
        limit: 50
        sort: { fields: _createdAt, order: DESC }
      ) {
        nodes {
          video {
            asset {
              url
            }
          }
          poster {
            asset {
              url
            }
          }
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  `);
  const createTabsContent = () => {
    let array1 = [];
    let array2 = [];
    let array4 = [];
    let j = 0;
    data.pictures.nodes.map((node) => {
      node.categories.map((cat) => {
        array1.push({ category: cat.title, node: node });
        return null;
      });
      return null;
    });

    data.videos.nodes.map((node) => {
      node.categories.map((cat) => {
        array1.push({ category: cat.title, node: node });
        return null;
      });
      return null;
    });
    array1.sort((a, b) => (a.category > b.category ? 1 : -1));
    array1.push({ category: null, node: null });
    for (let i = 1; i < array1.length; i++) {
      if (array1[i].category !== array1[i - 1].category) {
        array2.push(array1.slice(j, i));
        j = i;
      }
    }
    array2.map((elem, index) => {
      array4.push(
        <TabPanel key={index}>
          <div className={`tab-card tab-card-${index}`}>
            {elem.map((item) =>
              item.node.video ? (
                <video
                  controls
                  preload="none"
                  poster={item.node.poster.asset.url}
                  key={item.node.slug.current}
                >
                  <source src={item.node.video.asset.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Img
                  key={item.node.slug.current}
                  fluid={item.node.mainImage.asset.fluid}
                  className="tab-img"
                />
              )
            )}
          </div>
        </TabPanel>
      );
      return null;
    });
    return array4;
  };
  return (
    <Container>
      <Tabs>
        <TabList>
          {catsArray.map((elem) => (
            <Tab key={elem}>{elem}</Tab>
          ))}
        </TabList>
        <div className="tab-content">{createTabsContent()}</div>
      </Tabs>
    </Container>
  );
};

export default CategoryTab;
