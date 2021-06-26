import React from "react";
import Navbar from "./Navbar";
import "../../styles/global.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./Footer";
import _JSXStyle from "styled-jsx/style";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Layout;
