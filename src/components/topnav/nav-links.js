import { FaBars, FaBell, FaEnvelope } from "react-icons/fa6";
const styles = {
  Icons: {
    lineHeight: "10px",
    color: "#212529",
    paddingRight: "20px",
    opacity:'.8'
  },
};
const Navlinks = (props) => {
  return (
    <>
      <div class="navbar">
        <a href="#" style={styles.Icons} className="nav-link topnav-icon">
          <FaEnvelope size={20} />
        </a>
        <a href="#" style={styles.Icons} className="nav-link topnav-icon">
          <FaBell size={20} />
        </a>
        <a href="#" style={styles.Icons} className="nav-link d-block d-lg-none topnav-icon">
          <FaBars size={20} />
        </a>
        <button class="profile-btn">
          <img src="https://avatars.githubusercontent.com/u/50767502?v=4" />
          <span className="d-none d-md-block">&nbsp;Zhack D.</span>
        </button>
      </div>
    </>
  );
};

export default Navlinks;
