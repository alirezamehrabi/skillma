import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main from "../../../styles/MainCourse.module.css";
import { SSRProvider } from "react-bootstrap";

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
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = ({value: number, index: number}) => console.log(value, index)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
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
    <SSRProvider>
      <Slider {...settings}>
        {data.map((i)=>{
          return(
            <div className={`col-12`} key={i.id}>
          <div className={`col-11 ${main.itemWrap}`}>
            <div className={`row`}>
              <div className={`col-4`}>
              <figure className={`col-12 ${main.popularIMG}`}>
                <Image
                  src={i.teacherPic}
                  alt="logo"
                  width="300"
                  height="400"
                />
              </figure>
              </div>
              <div className={`col-8`}>
                <h5 className={`text-truncate ${main.popularName}`}>{i.teacherName}</h5>
                <h6 className={`text-truncate ${main.popularDes}`}>{i.field}</h6>
                <figure className={`${main.popularPic}`}>
                <Image
                  src={require(`../../../src/assets/maincourse/star.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
            <span className={`${main.bold}`}>{i.rate}</span>
            <span className={`${main.normal}`}>/ 5.0</span>
              </figure>
              <figure className={`${main.popularPic}`}>
                <Image
                  src={require(`../../../src/assets/maincourse/student.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
            <span className={`${main.bold}`}>{i.studentCount}</span>
            <span className={`${main.normal}`}>Students</span>
              </figure>
              <figure className={`${main.popularPic}`}>
                <Image
                  src={require(`../../../src/assets/maincourse/courses.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
            <span className={`${main.bold}`}>{i.courseCount}</span>
            <span className={`${main.normal}`}>Courses</span>
              </figure>
              </div>
            </div>
          </div>
        </div>
          )
        })}
      </Slider>
    </SSRProvider>
  );
};

export default ShortSlider;
