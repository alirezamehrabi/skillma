import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stu from "../../../../styles/panel/Student.module.css";
const StuSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
          initialSlide: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="row">
          <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i1.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i2.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i3.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per2.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i4.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i1.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i2.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per2.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i3.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per2.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide}`}>
            <Image
              src={require(`../../../assets/panel/profile/i4.png`)}
              alt=""
            />
            <div className={`${stu.per}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName}`}>Name</h6>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default StuSlider;
