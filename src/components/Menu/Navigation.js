import NavLinks from "./NavLinks"
import styles from "../../../styles/Home.module.css";

const Navigation = () => {
    return ( 
        <nav className={styles.Navigation}>
            <NavLinks />
        </nav>
    );
}
 
export default Navigation;