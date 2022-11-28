import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={`col-12 ${styles.footskill}`}>
              <h5 className={`${styles.footerTitle}`}>ABOUT SKILLMA</h5>
              <h6 className={`${styles.footerDes}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard. Lorem
                Ipsum is simply
              </h6>
            </div>
            <div className={`col-12 ${styles.Follow}`}>
              Follow Us:
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
              <Link href="#">
                <><FaYoutube /></>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <h5 className={`${styles.footerTitle}`}>Features</h5>
            <ul className={styles.links}>
              <li>
                <Link href="#">Call us</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Help and FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4">
            <h5 className={`${styles.footerTitle}`}>Links</h5>
            <ul className={styles.links}>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Courses</Link>
              </li>
              <li>
                <Link href="#">Short Videos</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4">
            <h5 className={`${styles.footerTitle}`}>Explore</h5>
            <ul className={styles.links}>
              <li>
                <Link href="#">Tools</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
            </ul>
          </div>
          <div className={`col-12 text-center mx-auto ${styles.Copyright}`}>
            Copyright @2022 . All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
