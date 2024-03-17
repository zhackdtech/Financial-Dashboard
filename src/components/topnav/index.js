import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchXL from "./Search-xl.js";
import Navlinks from "./nav-links.js"
const styles = {
  Card: {
    top: "12px",
    // left: '253px',
    width: "100%",
    backgroundColor: "transparent",
    // borderRadius: "26px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
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
      <div className="container-fluid">
        <SearchXL/>
        <Navlinks/>
      </div>
    </div>
  );
};

export default Card;
