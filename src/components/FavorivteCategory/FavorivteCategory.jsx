import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Fav from "./Fav";
import MobileFav from "./MobileFav";

const FavCat = () => {
  return (<>
    <section className={`container-fluid ${styles.menuHolder}`}>
        
          <Fav />
          <MobileFav />
        
    </section>
    </>
  );
};

export default FavCat;
