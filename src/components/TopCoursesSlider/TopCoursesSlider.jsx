import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
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
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10 ${styles.coursePicHolder}`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                <div className={` ${styles.introHolder}`}>
                <video
                  src={require("../../video/intro.mp4")}
                  autoPlay
                  controls
                />
              </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="row">
                  <div className={`col-6`}></div>
                  <div className={`col-6`}></div>
                  </div>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
        <div className={`col-12 ${styles.courseSlidePic}`}>
          <Link href="#">
            <>
              <figure className={`col-10`}>
                <Image
                  src={require(`../../../src/assets/home/topCourseImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
              <figure className={`col-2 ${styles.certificate}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/certificate.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>

              <figure className={`col-10 ${styles.courseContent}`}>
                <Image
                  onClick={handleShow}
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={``} onClick={handleShow}>
                  Lorem Ipsum is simply dummy text of the
                </h6>

                <div className={`col-12 mx-auto`}>
                  <div className={`row ${styles.courseBotton}`}>
                    <div className={`col-4`}>
                      <figure className={`${styles.studentBadge}`}>
                        <Image
                          src={require(`../../../src/assets/home/teacherMini.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
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
                      32
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      teacher: <span>Lorem Ipsum</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      price: <span>124$</span>
                    </h6>
                    <h6 className={`text-truncate ${styles.courseKey}`}>
                      duration: <span>128h</span>
                    </h6>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-warning ${styles.logBut} ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                    <Link href="#">
                      <button
                        type="button"
                        className={`btn btn-outline-warning mb-4 ${styles.courseBut}`}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </figure>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default ShortSlider;
