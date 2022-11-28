import { useState, useEffect } from "react";

import NavLinks from "./NavLinks"
import styles from "../../../styles/Home.module.css";
import {CgMenu} from "react-icons/cg"
import {ImCross} from "react-icons/im"
const MobileNavigation = () => {
    const[open,setOpen] = useState(false)
    const HamOpen = <CgMenu className={styles.Hamburger} size="30px" color='#ffcf00' onClick={()=>setOpen(!open)} />
    const HamClose = <ImCross className={styles.Hamburger} size="30px" color='#ffcf00' onClick={()=>setOpen(!open)} />
    const Close = ()=>setOpen(false)
    return ( 
        <nav className={styles.MobileNavigation}>
            {open ? HamClose : HamOpen}
            {open && <NavLinks isMobile={true} Close={Close} />}
        </nav>
     );
}
 
export default MobileNavigation;