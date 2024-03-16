import React from "react";
import PImage from "./Image.js";
import Username from "./Username.js";
import UserEmail from "./Email.js";
import HorizontalDivider from "../HorizontalDivider.js";
const styles = {
  Card: {
    top: "24px",
    left: "12px",
    width: "220px",
    height: "65px",
    backgroundColor: "#1e2a37",
    borderRadius: "12px",
    // border: "1px solid #e5e5e5",
    boxSizing: "border-box",
    overflow: "hidden",
  },
};

const PersonDetails = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
      <div className="row g-0">
        <div className="col-4">
          <div className="d-flex p-2 justify-content-center">
            <PImage />
          </div>
        </div>
        <div className="col-8 px-0 mh-100">
          <div className="d-flex flex-column h-100 py-2">
            <Username />
            <UserEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
