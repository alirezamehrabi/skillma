import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MasterSlider from "../MasterSlider/MasterSlider"
import { Rating } from "react-simple-star-rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Master = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (number) => {
    setRating(number);
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    
  };
    return ( 
        <section className={`container-fluid mx-auto mb-5 ${styles.master}`}>
            <div className={`row container mx-auto`}>
                <div className={`col-lg-6 ${styles.slidePic}`}>
                
              <figure className={`${styles.slidePic1}`} >
                <Image
                  src={require(`../../../src/assets/home/master1.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic2}`} >
                <Image
                  src={require(`../../../src/assets/home/master2.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic3}`} >
                <Image
                  src={require(`../../../src/assets/home/master3.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic4}`} >
                <Image
                  src={require(`../../../src/assets/home/master4.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic5}`} >
                <Image
                  src={require(`../../../src/assets/home/master5.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic6}`} >
                <Image
                  src={require(`../../../src/assets/home/master6.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`${styles.slidePic7}`} >
                <Image
                  src={require(`../../../src/assets/home/master7.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
                </div>
                <div className={`col-lg-6 ${styles.slideHolder}`}>
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
                </div>
            </div>
        </section>
     );
}
 
export default Master;