import React from "react";
import {
  FaHouse,
  FaChalkboardUser,
  FaCircleUser,
  FaUserPlus,
  FaFile ,
  FaTable,
} from "react-icons/fa6";

const styles = {
  Links: {
    top: "120px",
    left: "12px",
    width: "220px",
    height: "50px",
    backgroundColor: "#1059CA",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    lineHeight: "-18px",
    verticalAlign: "baseline",
    color: "#F8F9FA",
    fontSize: "14px",
    fontFamily: "Manrope",
    fontWeight: 600,
    textDecoration: "none",
  },
  Links2: {
    top: "120px",
    left: "12px",
    width: "220px",
    height: "50px",
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    lineHeight: "-18px",
    verticalAlign: "baseline",
    color: "#1E2A37",
    fontSize: "14px",
    fontFamily: "Manrope",
    fontWeight: 600,
    textDecoration: "none",
  },
  Icon: {
    color: "#1e2a37",
  },
};
const defaultText = {
  navText: "Navlink",
};
const Link = (props) => {
  return (
    <div className="nav nav-pills flex-column">
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links}
        >
          <FaHouse />
          &nbsp;&nbsp;Home
        </a>
      </div>
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links2}
        >
          <FaTable />
          &nbsp;&nbsp;Tables
        </a>
      </div>
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links2}
        >
          <FaChalkboardUser />
          &nbsp;&nbsp;Components
        </a>
      </div>
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links2}
        >
          <FaUserPlus />
          &nbsp;&nbsp;Login
        </a>
      </div>
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links2}
        >
          <FaCircleUser />
          &nbsp;&nbsp;Profile
        </a>
      </div>
      <div className="pb-2">
        <a
          href="#"
          className="d-flex align-items-center px-3"
          style={styles.Links2}
        >
          <FaFile  />
          &nbsp;&nbsp;Docs
        </a>
      </div>
    </div>
  );
};

export default Link;
