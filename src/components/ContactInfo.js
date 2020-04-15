import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background: #0d0d0d;
  color: #fff;
  padding: 60px 10px;
  align-items: center;
  flex-wrap: wrap;
  .contact-info-item {
    margin: 2em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  svg {
    fill: #d09900;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 0.25em;
    font-size: 13px;
    font-weight: 400;
  }
  h6 {
    font-size: 17px;
    margin-bottom: 15px !important;
    font-weight: 400;
  }
`;
const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityContact(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          email
          address
          Phone
        }
      }
    }
  `);
  return (
    <Container>
      <div className="contact-info-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 9l24-9-8.986 24-3.014-12z" />
        </svg>
        <h6>ADDRESS</h6>
        <p>{data.allSanityContact.nodes[0].address}</p>
      </div>
      <div className="contact-info-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
        </svg>
        <h6>CALL US</h6>
        <p>{data.allSanityContact.nodes[0].Phone}</p>
      </div>
      <div className="contact-info-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
        <h6>EMAIL US</h6>
        <p>{data.allSanityContact.nodes[0].email}</p>
      </div>
    </Container>
  );
};

export default ContactInfo;
