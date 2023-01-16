import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about from "../../../styles/About.module.css";
import styles from "../../../styles/Home.module.css";
import { RiShareForwardLine } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const ShortSlider = ({data}) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
      };
      // console.log(data)
  return (
        
    <Slider {...settings}>
      {data.map((i)=>{
        return(
<div key={i.id}>
      <Image src={i.pictureName} className={`${about.imgSlide}`} alt="" width="80" height="80"/>
      <h5 className={`text-center fw-bold`}>{i.fullName}</h5>
      <h6 className={`text-center`}>{i.position}</h6>
      <div className={`col-12 `}>
              <Link href={i.twiter}>
                <FaTwitter />
              </Link>
              <Link href={i.faceBook}>
                <FaFacebook />
              </Link>
              <Link href={i.instagram}>
                <FaInstagram />
              </Link>
            </div>
      </div>
        )
      })}
      
    </Slider>
  );
};

export default ShortSlider;
