import "../../styles/main.css";
import PersonDetails from "../../components/pdetails";
import HorizontalDivider from "../../components/HorizontalDivider";

const styles = {
  Card: {
    top: '0px',
    left: '0px',
    width: '300px',
    height: '100vh',
    backgroundColor: '#1e2a37',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
    position:'fixed'
  },
};

const SideNav = (props) => {
  return (
    <div style={styles.Card} className="SideNav">
      {props.children}
      <div className="d-flex py-5 justify-content-center">
        <PersonDetails />
      </div>
    </div>
  );
};

export default SideNav;
