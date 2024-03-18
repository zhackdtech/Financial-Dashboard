import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";

const defProps = {
  image: "https://avatars.githubusercontent.com/u/50767502?v=4",
  username: "Zhack DTech",
  email: "wil.marx@gmail.com",
};
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
  emailText: {
    color: "#1E2A37",
    fontSize: "12px",
    fontFamily: "Manrope",
    fontWeight: "500",
    lineHeight: "10px",
    padding: "3px 0 0 0",
  },
  imageContainer: {
    top: "32px",
    left: "24px",
    width: "45px",
    height: "45px",
    borderRadius: "100000px",
    border: "1px solid #e5e5e5",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    backgroundImage: "url(./image.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${defProps.image})`,
    cursor: "pointer",
  },
  userText: {
    color: "#1E2A37",
    fontSize: "14px",
    fontFamily: "Manrope",
    fontWeight: 700,
    padding: "3px 0 0 0",
    // lineHeight: '18px',
  },
  userCard: {
    top: "24px",
    left: "12px",
    width: "220px",
    height: "65px",
    backgroundColor: "#F8F9FA",
    borderRadius: "12px",
    border: "1px solid #F8F9FA",
    boxSizing: "border-box",
    overflow: "hidden",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    cursor:'pointer'
  },
};
const ClassNames = {
  userCardContainer: "d-flex justify-content-center py-3",
  userCard:'userCard',
  userCardRow: "row g-0",
  userCardImageCol: "col-4",
  userCardImageContainer: "d-flex p-2 justify-content-center userImage",
  userCardTextsCol: "col-8 px-0 mh-100",
  userCardTextsContainer: "d-flex flex-column h-100 py-2",
};
const Layout = (props) => {
  return (
    <>
    {/* start sidenav */}
      <div style={Styles.sidenav}>
        {/* usercard container */}
        <div className={ClassNames.userCardContainer}>
          {/* start user card */}
          <div style={Styles.userCard} className={ClassNames.userCard}>
            {/* start user card row */}
            <div className={ClassNames.userCardRow}>
              {/* user card image column */}
              <div className={ClassNames.userCardImageCol}>
                <div className={ClassNames.userCardImageContainer}>
                  <div style={Styles.imageContainer}></div>
                </div>
              </div>
              {/* end user card image column */}
              {/* start user card text column */}
              <div className={ClassNames.userCardTextsCol}>
                <div className={ClassNames.userCardTextsContainer}>
                  <div style={Styles.userText}>{defProps.username}</div>
                  <div style={Styles.emailText}>{defProps.email}</div>
                </div>
              </div>
              {/* end user card text column */}
            </div>
            {/* end user card row */}
          </div>
          {/* end usercard */}
        </div>
        {/* end usercard container */}

        {/* start sidenav links */}
        {/* end sidenav links */}
      </div>
      {/* end sidenav */}
    </>
  );
};

export default Layout;
