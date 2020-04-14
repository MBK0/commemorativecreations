import React, { useState } from "react";
import Popup from "../components/popup";
import styled from "styled-components";
import Layout from "../templates/DefaultLayout";
import Seo from "../components/seo";
import ContactInfo from "../components/ContactInfo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 97px;
  background: #fff;
  h3 {
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 50px;
    line-height: 64px;
    text-transform: uppercase;
    margin: 80px auto 60px auto;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #333;
  }
  label {
    position: absolute;
    font-size: 1px;
    padding: 0;
    color: #fff;
  }
  .contact-form-wrapper {
    background: #fff;
    width: 100%;
  }
  .email-form {
    width: 100%;
    max-width: 1000px;
    width: 100%;
    margin: auto;
    padding: 0.5em;
  }
  .form-input {
    width: 100%;
    height: 20px;
    margin: 15px 0px;
    color: #989a9e;
    background-color: transparent;
    resize: none;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    padding: 0.5em;
  }
  .inputs-flex {
    display: flex;
    flex-direction: row;
  }
  .form-input::-webkit-input-placeholder {
    color: #ccc;
  }
  #name,
  #email {
    height: 50px;
  }
  #message {
    height: 150px;
  }
  #name {
    margin-right: 15px;
  }
  #submit {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 12px 30px;
    border-radius: 7px;
    border: 2px solid #99be8f;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    color: #99be8f;
    background: transparent;
    transition: all 0.4s;
    margin-bottom: 5em;
  }
  .mapouter,
  iframe {
    width: 100%;
    position: relative;
    margin: 0 !important;
  }
  .mapouter {
    height: 450px;
  }
  @media only screen and (max-width: 910px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 725px) {
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const Contact = () => {
  const [contact, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });
  const [popupState, setPopup] = useState("walo");
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact })
    })
      .then(() => {
        setPopup("sucess");
      })
      .catch(() => {
        setPopup("error");
      });

    e.preventDefault();
  };
  return (
    <Layout headerBg="#fff">
      <Seo title="Contact" />
      <Container>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              title="map"
              width="600"
              height="450"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=20%20City%20Vista%20Cct%2C%20Cranbourne%20West%2C%20Victoria%203977&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h3>Get in touch</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="email-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="inputs-flex">
              <label htmlFor="name">i</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-input"
                required
                value={contact.name}
                onChange={e => {
                  const val = e.target.value;
                  setState(prevState => {
                    return { ...prevState, name: val };
                  });
                }}
              />
              <label htmlFor="email">i</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="form-input"
                required
                value={contact.email}
                onChange={e => {
                  const val = e.target.value;
                  setState(prevState => {
                    return { ...prevState, email: val };
                  });
                }}
              />
            </div>
            <label htmlFor="message">i</label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="form-input"
              placeholder="Message"
              value={contact.message}
              required
              onChange={e => {
                const val = e.target.value;
                setState(prevState => {
                  return { ...prevState, message: val };
                });
              }}
            />

            <button type="submit" id="submit">
              Submit
            </button>
            <Popup type={popupState} setPopup={setPopup} />
          </form>
          <ContactInfo />
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
