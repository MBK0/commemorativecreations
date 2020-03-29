import React from "react";
import Header from "../components/Header";
import "../styles/app.scss";
import Footer from "../components/Footer";

const DefaultLayout = ({ children, headerBg }) => {
  return (
    <div>
      <Header headerBg={headerBg} />
      <main className="site-main">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

export default DefaultLayout;
