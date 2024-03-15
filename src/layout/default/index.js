import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SideNav from "./sidenav";
import MainContent from "./content"
function wrapContent() {
  return <div className="d-flex flex-nowrap">
    <SideNav/>
    <MainContent/>
  </div>;
}

export default wrapContent;
