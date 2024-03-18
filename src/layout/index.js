import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
const Styles = {
  sidenav: {
    top: "0px",
    left: "0px",
    width: "260px",
    height: "100vh",
    backgroundColor: "#F8F9FA",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    position: "fixed",
  },
};

const Layout = (props) => {
  return (
    <>
      <div style={Styles.sidenav}>
        {/* <p>Hi!</p> */}
      </div>
    </>
  );
};

export default Layout;
