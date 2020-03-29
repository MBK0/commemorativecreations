import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import { Link } from "gatsby";
const Container = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 40px;
    position: fixed;
    z-index: 7;
    width: 100%;
    transition: all 0.5s;
    background: ${props => (props.headerBg ? props.headerBg : "transparnt")};
  }
  .nav-item {
    display: flex;
  }
  .logo {
    font-family: "Kalam", sans-serif;
    margin-right: 60px;
    font-size: 16px;
    font-weight: 900;
    position: relative;
    color: #d09900;
    &:hover {
      &:after {
        transform: scaleX(0) !important;
      }
    }
  }
  h5 {
    font-size: 14px;
    margin: 0px 20px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    padding: 36px 0px;
    position: relative;
    text-transform: uppercase;
    &:after {
      position: absolute;
      width: 100%;
      top: -4px;
      display: block;
      content: "";
      transform: scaleX(0);
      border-bottom: 4px solid #d09900;
      -webkit-transition: -webkit-transform 250ms ease-in-out;
      transition: -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
  .active-link {
    h5 {
      color: #d09900;
      font-weight: 600;
      &:after {
        transform: scaleX(1);
      }
    }
  }
  .sticky-header {
    background: #070707;
    animation: animate 0.8s ease;
  }
  @keyframes animate {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  .hamburger {
    display: none;
    margin-right: 2em;
    margin-top: 2px;
    z-index: 25;
    &:hover {
      &:after {
        transform: scaleX(0) !important;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .nav-link {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .header-wrapper {
      padding: 0px 10px;
      justify-content: space-between;
    }
    .logo {
      margin-right: 20px;
    }
  }
`;
const Header = ({ headerBg }) => {
  useEffect(() => {
    window.onscroll = function() {
      myFunction();
    };
    var header = document.querySelector(".header-wrapper");
    function myFunction() {
      if (window.pageYOffset > 20) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    }
  });
  const [SideBarIsActive, toggleSideBar] = useState(false);
  return (
    <Container headerBg={headerBg}>
      <div className="header-wrapper">
        <div className="nav-item">
          <Link to="/">
            <h5 className="logo">Studio Logo</h5>
          </Link>
        </div>
        <div className="nav-item">
          <Link activeClassName="active-link" to="/">
            <h5 className="nav-link"> Home</h5>
          </Link>
          <Link activeClassName="active-link" to="/portfolio">
            <h5 className="nav-link">Portfolio</h5>
          </Link>
          <Link activeClassName="active-link" to="/about">
            <h5 className="nav-link">About Us</h5>
          </Link>
          <Link activeClassName="active-link" to="/contact">
            <h5 className="nav-link">Get In Touch</h5>
          </Link>
          <h5
            className="hamburger"
            onClick={() => toggleSideBar(!SideBarIsActive)}
          >
            <Hamburger />
          </h5>
        </div>
      </div>

      <SideBar SideBarIsActive={SideBarIsActive} />
    </Container>
  );
};

export default Header;
