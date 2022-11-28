import { useState, useEffect } from "react";

import FavItems from "./FavItems"
import styles from "../../../styles/Home.module.css";
import {CgMenu} from "react-icons/cg"
import {ImCross} from "react-icons/im"
const MobileNavigation = () => {
    const[open,setOpen] = useState(false)
    const HamOpen = <h6 className={`text-truncate ${styles.Hambur}`} color='#ffcf00' onClick={()=>setOpen(!open)} >Favorite Categories</h6>
    const HamClose = <h6 className={`text-truncate ${styles.Hambur}`}  color='#ffcf00' onClick={()=>setOpen(!open)} >Favorite Categories</h6>
    const Close = ()=>setOpen(false)
    return ( 
        <nav className={styles.MobileFav}>
            {open ? HamClose : HamOpen}
            {open && <FavItems isMobile={true} Close={Close} />}
        </nav>
     );
}
 
export default MobileNavigation;