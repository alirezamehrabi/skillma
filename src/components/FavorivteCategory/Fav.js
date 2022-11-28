import FavItems from "./FavItems"
import styles from "../../../styles/Home.module.css";

const Navigation = () => {
    return ( 
        <nav className={`${styles.Navigation} ${styles.Navigation2}`}>
            <FavItems />
        </nav>
    );
}
 
export default Navigation;