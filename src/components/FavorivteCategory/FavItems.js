import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import {motion} from "framer-motion"
const FavItems = (props) => {
    let router = useRouter();
    const currentRoute = router.pathname;

    const animateFrom = {opacity:0, y:-40}
    const animateTo = {opacity:1, y:0}

    return ( 
        <ul className={styles.favItem}>
        <li>Develop</li>
        <li>Design</li>
        <li>Business</li>
        <li>Art</li>
    </ul>
     );
}
 
export default FavItems;