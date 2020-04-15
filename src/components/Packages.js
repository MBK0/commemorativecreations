import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
const Container = styled.div`
  padding: 10em 10px;
  width: 100%;
  background: #070707;
  color: #fff;
  .wrapper {
    max-width: 1400px;
    margin: auto;
  }
  h2 {
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 60px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
  }
  .subtitle {
    text-align: center;
    line-height: 1.5em;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 5em;
  }
  .packages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 4em;
  }
  .btn {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 8px 30px;
    border-radius: 7px;
    border: 2px solid #d09900;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #d09900;
    background: transparent;
    transition: all 0.4s;
    &:hover {
      color: #666;
      border: 2px solid #666;
    }
  }
  .package {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #d09900;
    margin: 2em auto;
  }
  span {
    color: #d09900;
    font-weight: 600;
  }
  h3,
  .price {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    span {
      font-size: 14px;
      color: #fff;
    }
  }
  .package-top {
    width: 100%;
    display: flex;
    background: #d09900;
    justify-content: space-around;
    padding: 12px 5px;
    margin-bottom: 40px;
  }
  li {
    margin: 10px 40px;
  }
`;
const Packages = ({ SetOrderFormIsActive, SetPackageName }) => {
  const data = useStaticQuery(graphql`
    {
      allSanityPackages(sort: { fields: price }) {
        nodes {
          price
          packageFeatures {
            description
          }
          nbrphotos
          nbrminutes
          name
          currency
        }
      }
    }
  `);
  return (
    <Container>
      <h2>Our Packages</h2>
      <div className="wrapper">
        <p className="subtitle">
          At Commemorative Creations we are here to give you a 100% satisfaction
          guarantee. Delivering to you the best when needed without any fuss
          whatsoever especially when you have other pressing things to worry
          about.
        </p>
        <div className="packages">
          {data.allSanityPackages.nodes.map((node) => (
            <div className="package">
              <div className="package-top">
                <h3>{node.name}</h3>
                <p className="price">
                  {node.price} <span>{node.currency}</span>
                </p>
              </div>

              <ul>
                <li>
                  Up to <span>{node.nbrphotos}</span> photos and short videos
                </li>
                <li>
                  Approximately <span>{node.nbrminutes}</span> minutes of
                  viewing & music to accompany the photo slideshow
                </li>
                {node.packageFeatures.map((feature) => (
                  <li>{feature.description}</li>
                ))}
              </ul>
              <button
                className="btn"
                onClick={() => {
                  SetPackageName(node.name);
                  SetOrderFormIsActive(1);
                }}
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Packages;
