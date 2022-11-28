import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
import { RiShareForwardLine } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShortSlider = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (number) => {
    setRating(number);
  };
  // Optinal callback functions
  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = ({value: number, index: number}) => console.log(value, index)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    
  };
  return (
        
      <Slider {...settings}>
        <div className={`col-11 mx-auto `}>
          <Link href="#" >
            <>
              <figure className={``} >
                <Image
                  src={require(`../../../src/assets/home/master1.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h5 className={`${styles.masterName}`}>Dani Beaumont</h5>
                <h6 className={``}>ui/ux designer</h6>
              </figure>
              
              <div className={``} >
                
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={5}
                  className={styles.rate}
                  readonly
                />
                <h6 className={styles.masterDesc}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros book. It usually begins with:
                </h6>
              </div>
            </>
          </Link>
        </div>
        <div className={`col-11 mx-auto `}>
          <Link href="#" >
            <>
              <figure className={``} >
                <Image
                  src={require(`../../../src/assets/home/master1.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h5 className={`${styles.masterName}`}>Dani Beaumont</h5>
                <h6 className={``}>ui/ux designer</h6>
              </figure>
              
              <div className={``} >
                
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={5}
                  className={styles.rate}
                  readonly
                />
                <h6 className={styles.masterDesc}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros book. It usually begins with:
                </h6>
              </div>
            </>
          </Link>
        </div>
        <div className={`col-11 mx-auto `}>
          <Link href="#" >
            <>
              <figure className={``} >
                <Image
                  src={require(`../../../src/assets/home/master1.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h5 className={`${styles.masterName}`}>Dani Beaumont</h5>
                <h6 className={``}>ui/ux designer</h6>
              </figure>
              
              <div className={``} >
                
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={5}
                  className={styles.rate}
                  readonly
                />
                <h6 className={styles.masterDesc}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros book. It usually begins with:
                </h6>
              </div>
            </>
          </Link>
        </div>
        <div className={`col-11 mx-auto `}>
          <Link href="#" >
            <>
              <figure className={``} >
                <Image
                  src={require(`../../../src/assets/home/master1.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h5 className={`${styles.masterName}`}>Dani Beaumont</h5>
                <h6 className={``}>ui/ux designer</h6>
              </figure>
              
              <div className={``} >
                
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={5}
                  className={styles.rate}
                  readonly
                />
                <h6 className={styles.masterDesc}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros book. It usually begins with:
                </h6>
              </div>
            </>
          </Link>
        </div>
      </Slider>
  );
};

export default ShortSlider;
