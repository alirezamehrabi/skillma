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
const ShortSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
      };
  return (
        
    <Slider {...settings}>
      <div>
      <Image src={require(`../../../src/assets/about/a.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12 `}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/b.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/c.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/d.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/e.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/f.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
      <div>
      <Image src={require(`../../../src/assets/about/g.png`)} className={`${about.imgSlide}`} alt="" width="" height=""/>
      <h5 className={`text-center fw-bold`}>Dani Beaumont</h5>
      <h6 className={`text-center`}>General Manager</h6>
      <div className={`col-12`}>
              <Link href="#">
                <><FaTwitter /></>
              </Link>
              <Link href="#">
                <><FaFacebook /></>
              </Link>
              <Link href="#">
                <><FaInstagram /></>
              </Link>
            </div>
      </div>
    </Slider>
  );
};

export default ShortSlider;
