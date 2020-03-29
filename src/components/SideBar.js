import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const Container = styled.div`
  nav {
    width: 0em;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: width 0.8s ease;
    background: #000;
    white-space: nowrap;
    overflow: hidden;
    z-index: 5;
    color: #fff;
    max-width: 375px;
  }
  .sidebar-content {
    width: 80%;
    height: 100%;
    margin: 100px auto;
    font-size: 1.2em;
    letter-spacing: 2px;
  }
  .SideBar-active {
    width: 100vw;
  }
  p {
    font-size: 14px;
    margin: 0px 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 35px 0px;
    transition: all 0.5s;
    &:hover {
      color: #d09900;
    }
  }
`;

const SideBar = ({ SideBarIsActive }) => {
  return (
    <Container>
      <nav className={SideBarIsActive ? `SideBar-active` : ``}>
        <div className="sidebar-content">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Get In Touch</p>
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default SideBar;
