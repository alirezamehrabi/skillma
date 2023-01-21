import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import {motion} from "framer-motion"
import { useEffect,useState } from 'react';
import { UserCat } from "../../../pages/api/user-selected-cats";
import Loader from "../Loader/Loader";
const FavItems = (props) => {
    let router = useRouter();
    const currentRoute = router.query;
    
    const animateFrom = {opacity:0, y:-40}
    const animateTo = {opacity:1, y:0}

    const [data, setData] = useState()
   
    useEffect( () =>{
    UserCat().then( function(result){
         setData(result)
     })
    },[])
    return ( 
        <ul className={styles.favItem}>
            {data !== undefined  ? data.map((i)=>{
                return(<li key={i.id}>{i.categoryName}</li>)
            }):null}
    </ul>
     );
}
 
export default FavItems;