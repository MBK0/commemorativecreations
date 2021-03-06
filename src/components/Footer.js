import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
const Container = styled.div`
  padding: 30px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  background: #070707;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  .site-foot-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .site-foot-nav-right a:last-child {
    padding-right: 0;
  }
  .site-foot-nav div {
    margin: 0em 0.5em;
  }
  .name {
    color: #d09900;
    font-weight: 500;
  }
  svg {
    fill: #d09900;
    margin: 0 0.5em;
    cursor: pointer;
  }
  .footer-item {
    padding: 10px 0;
  }
  a {
    margin: 0 0.5em;
  }
  @media only screen and (max-width: 312px) {
    .site-foot-nav {
      justify-content: center;
    }
  }
`;
function Footer() {
  const data = useStaticQuery(graphql`
    {
      allSanityContact {
        nodes {
          facebook
          instagram
          email
        }
      }
    }
  `);
  return (
    <Container>
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left footer-item">
          All rights reserved © 2020, Developed By{" "}
          <span className="name">MBK</span>
        </div>
        <div className="footer-item">
          <Link to="privacy"> Privacy Policy</Link>
          <Link to="terms"> Terms & Conditions</Link>
        </div>
        <div className="footer-item">
          <a
            href={data.allSanityContact.nodes[0].facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
          <a
            href={data.allSanityContact.nodes[0].instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href={`mailto:${data.allSanityContact.nodes[0].email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
