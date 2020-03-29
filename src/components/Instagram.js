import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
const Container = styled.div`
  padding: 6em 10px;
  text-align: center;
  margin: auto;
  width: 100%;
  background: #0d0d0d;
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
  .insta-grid {
    display: grid;
    cursor: pointer;
    max-width: 1300px;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  }
  .insta-img {
    height: 290px;
    top: 0;
    width: 100%;
    position: relative;
  }
  .insta {
    width: 100%;
    height: 290px;
    position: relative;
    box-sizing: border-box;
  }
  .insta-info {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 290px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    padding: 0em 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    display: flex;
    transition: all 0.7s ease;
  }
  .insta:hover .insta-info {
    opacity: 0;
  }
  .insta-row {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1em 0em;
  }
  .insta-flex {
    display: flex;
    margin: 0em 1.5em;
  }
  svg {
    fill: #fff;
    margin-right: 0.5em;
  }
  a {
    color: #fff;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
`;
function Instagram({ data }) {
  return (
    <Container>
      <h2>Our Instagram</h2>
      <div className="insta-grid">
        {data.allInstaNode.nodes.map(node => (
          <a
            href="https://www.instagram.com/imdb/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            key={node.caption}
            className="insta"
          >
            <Image
              fluid={node.localFile.childImageSharp.fluid}
              alt="instagram"
              className="insta-img"
            />
            <div className="insta-info">
              <div className="insta-row">
                <div className="insta-flex">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                  <p>{node.likes}</p>
                </div>
                <div className="insta-flex">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                  </svg>
                  <p>{node.comments}</p>
                </div>
              </div>
              <div className="insta-row">
                <p>{node.caption.substr(0, 100)}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 8, sort: { order: DESC, fields: timestamp }) {
          nodes {
            id
            original
            comments
            caption
            likes
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Instagram data={data} />}
  />
);
