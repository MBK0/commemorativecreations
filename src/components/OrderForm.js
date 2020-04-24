import React, { useState, useEffect } from "react";
import Popup from "../components/popup";
import styled from "styled-components";

const Container = styled.div`
  width: 95vw;
  max-width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  position: fixed;
  z-index: 25;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 30px 50px;
  h3 {
    display: block;
    margin: auto;
    font-weight: 600;
    font-size: 36px;
    line-height: 64px;
    margin: 80px auto 60px auto;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
    span {
      color: #d09900;
    }
  }
  label {
    position: absolute;
    font-size: 1px;
    padding: 0;
    color: #070707;
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
    color: #d09900;
    background-color: transparent;
    resize: none;
    border: 1px solid #fff;
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
  #email,
  #phone {
    height: 50px;
  }

  #submit {
    outline: none !important;
    box-sizing: border-box;
    color: white;
    max-width: 180px;
    padding: 12px 30px;
    border-radius: 7px;
    border: 2px solid #d09900;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 40px;
    color: #d09900;
    background: transparent;
    transition: all 0.4s;
  }
  .close {
    position: absolute;
    top: 2em;
    right: 2em;
    fill: #d09900;
    cursor: pointer;
  }
  @media only screen and (max-width: 910px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const OrderForm = ({ packageName, SetOrderFormIsActive }) => {
  const [order, setState] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
  });
  const [popupState, setPopup] = useState("walo");
  const handleSubmit = (e) => {
    document.getElementById("package").value = packageName;
    console.log(document.getElementById("package"));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "order", ...order }),
    })
      .then(() => {
        setPopup("sucess");
      })
      .catch(() => {
        setPopup("error");
      });

    e.preventDefault();
  };
  useEffect(() => {
    if (order.package == "") {
      setState((prevState) => {
        return { ...prevState, package: packageName };
      });
    }
  }, []);
  return (
    <Container>
      <h3>
        Order For The <span>{packageName}</span> Package
      </h3>
      {console.log(order)}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        className="close"
        onClick={() => SetOrderFormIsActive(0)}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.5 16.084l-1.403 1.416-4.09-4.096-4.102 4.096-1.405-1.405 4.093-4.092-4.093-4.098 1.405-1.405 4.088 4.089 4.091-4.089 1.416 1.403-4.092 4.087 4.092 4.094z" />
      </svg>
      <form
        name="order"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="email-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="order" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="form-input"
          required
          value={order.name}
          onChange={(e) => {
            const val = e.target.value;
            setState((prevState) => {
              return { ...prevState, name: val };
            });
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input"
          required
          value={order.email}
          onChange={(e) => {
            const val = e.target.value;
            setState((prevState) => {
              return { ...prevState, email: val };
            });
          }}
        />
        <label htmlFor="phone">phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-input"
          placeholder="Phone number"
          value={order.phone}
          required
          onChange={(e) => {
            const val = e.target.value;
            setState((prevState) => {
              return { ...prevState, phone: val };
            });
          }}
        />
        <label htmlFor="package">Package</label>
        <input
          type="hidden"
          name="package"
          value={order.packageName}
          id="package"
        />
        <button type="submit" id="submit">
          Submit
        </button>
        <Popup type={popupState} setPopup={setPopup} />
      </form>
    </Container>
  );
};

export default OrderForm;
