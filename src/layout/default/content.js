import Topnav from '../../components/topnav';

const styles = {
    mainContent:{
        backgroundColor: '#F8F9FA',
        height: '100vh',
    }
}
const SideNav = (props) => {
    return(
        <div style={styles.mainContent} className="mainContent">
            <div className="container pt-3">
                <Topnav/>
            </div>
        </div>
    )
}

export default SideNav;