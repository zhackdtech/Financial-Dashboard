import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchXL from "./Search-xl.js";
const styles = {
  Card: {
    top: "12px",
    // left: '253px',
    width: "100%",
    backgroundColor: "#F8F9FA",
    borderRadius: "26px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    overflow: "hidden",
  },
  SearchIcon: {
    backgroundColor: "#1059CA",
    lineHeight: "1.5px",
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card} className="navbar navbar-expand">
      {/* {props.children} */}
      <div className="container-fluid p-2">
        <SearchXL/>
        <div className="navbar"></div>
      </div>
    </div>
  );
};

export default Card;
