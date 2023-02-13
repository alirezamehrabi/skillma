import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import {motion} from "framer-motion"
const NavLinks = (props) => {
    let router = useRouter();
    const currentRoute = router.pathname;

    const animateFrom = {opacity:0, y:-40}
    const animateTo = {opacity:1, y:0}

    return ( 
        <ul className={`row ${styles.menuWrapper}`}>
                  <Link passHref href="/">
                    <motion.a initial={animateFrom} animate={animateTo} transition={{delay:0.05}} onClick={()=>props.isMobile && props.Close()}
                      className={currentRoute === "/" ? `${styles.active}` : ``}
                    >
                      Home
                    </motion.a>
                  </Link>

                  <Link passHref href="/topcourses">
                    <motion.a initial={animateFrom} animate={animateTo} transition={{delay:0.10}} onClick={()=>props.isMobile && props.Close()}
                      className={
                        currentRoute === "/topcourses" ? `${styles.active}` : ``
                      }
                    >
                      Courses
                    </motion.a>
                  </Link>
                  <Link passHref href="/shortvideo">
                    <motion.a initial={animateFrom} animate={animateTo} transition={{delay:0.20}} onClick={()=>props.isMobile && props.Close()}
                      className={
                        currentRoute === "/shortvideo" ? `${styles.active}` : ``
                      }
                    >
                      Short Video
                    </motion.a>
                  </Link>
                  <Link passHref href="/about">
                    <motion.a initial={animateFrom} animate={animateTo} transition={{delay:0.30}} onClick={()=>props.isMobile && props.Close()}
                      className={
                        currentRoute === "/about" ? `${styles.active}` : ``
                      }
                    >
                      About Us
                    </motion.a>
                  </Link>
                </ul>
     );
}
 
export default NavLinks;