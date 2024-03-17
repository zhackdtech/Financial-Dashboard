import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const styles = {
  Input: {
    borderBottom: "1px solid #000",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
  },
};
const SearchXL = (props) => {
  return (
    <>
      <div className="search-wrapper d-none d-lg-flex">
        <input className="search-input" type="text" placeholder="Search" />
        <FaMagnifyingGlass/>
      </div>
      <div className="d-block d-lg-none">
        
      </div>
    </>
  );
};

export default SearchXL;
