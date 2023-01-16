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
import Moment from "react-moment";
import {Modal} from 'react-bootstrap';
const ShortSlider = ({data}) => {
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
    slidesToShow: 3.2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((i,index)=>{
          return(
            <div className={`col-11 ${styles.shortSlidePic}`} key={index}>
          <Link href="#" >
            <>
              <figure className={``} >
                <Image
                  src={i.shortContentPic}
                  alt="logo"
                  width="270"
                  height="270"
                />
              </figure>
              <figure className={`${styles.teacherBadge}`}  >
                <Image
                  src={i.teacherPic}
                  alt="logo"
                  width="40"
                  height="40"
                />
                <h5 className={``}>{i.teacherName}</h5>
                <h6 className={``}>
                  <Moment fromNow>{i.creationAgo}</Moment>
                  </h6>
              </figure>
              <figure className={`${styles.shortContent}`} >
                <Image  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate`} style={{width: "180px"}} onClick={handleShow}>{i.title}</h6>
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  // onPointerEnter={onPointerEnter}
                  // onPointerLeave={onPointerLeave}
                  initialValue={i.rate}
                  className={styles.rating}
                />

                <div className={`col-11 mx-auto ${styles.botHolder}`}>
                  <div className={`row ${styles.botton}`}>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      {i.views}
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      {i.commentCount}
                    </div>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />{i.shareCount}
                    </div>
                  </div>
                </div>
              </figure>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <div className={` ${styles.introHolder}`}>
                 <video
                  src={i.videoPath}
                  autoPlay
                  controls
                /> 
              </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className={`row ${styles.conHolder}`}>
                  <div className={`col-6`}>
                  <figure className={`${styles.teacherBadgeModal}`}  >
                <Image
                  src={i.teacherPic}
                  alt="logo"
                  width="40"
                  height="40"
                />
                <h5 className={``}>{i.teacherName}</h5>
                <h6 className={``}><Moment fromNow>{i.creationAgo}</Moment></h6>
              </figure>
                  </div>
                  <div className={`col-6 mx-auto`}>
                  <div className={`row ${styles.bot}`}>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      {i.views}
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      {i.commentCount}
                    </div>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />3
                    </div>
                  </div>
                  </div>
                  </div>
                </Modal.Footer>
              </Modal>

            </>
          </Link>
        </div>
          )
        })}
        
      </Slider>
    </div>
  );
};

export default ShortSlider;
