import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stu from "../../../../styles/panel/Student.module.css";
import co from "../../../../styles/panel/Courses.module.css"

const StuSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const online =<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
  <g id="Group_21765" data-name="Group 21765" transform="translate(2 2)">
    <g id="Group_21764" data-name="Group 21764">
      <g id="Group_21763" data-name="Group 21763">
        <g id="Group_21762" data-name="Group 21762">
          <path id="Oval" d="M27,0A27.188,27.188,0,0,1,38.951,2.782,27.011,27.011,0,1,1,27,0Z" fill="none" stroke="#2d3ddf" stroke-width="4" opacity="0.3"/>
          <path id="Oval-2" data-name="Oval" d="M27,0A27.019,27.019,0,1,1,0,27,27,27,0,0,1,27,0Z" fill="none" stroke="#2d3ddf" stroke-width="4" stroke-dasharray="70 600"/>
        </g>
        <path id="Path_83077" data-name="Path 83077" d="M21.446,0A21.28,21.28,0,0,1,42.892,21.109,21.28,21.28,0,0,1,21.446,42.218,21.28,21.28,0,0,1,0,21.109,21.28,21.28,0,0,1,21.446,0Z" transform="translate(5.097 6.219)" fill="#d6ebff"/>
      </g>
      <g id="Group_21761" data-name="Group 21761" transform="translate(14.395 15.181)">
        <rect id="Rectangle_1231" data-name="Rectangle 1231" width="24.331" height="24.331" transform="translate(0)" fill="none"/>
        <path id="video" d="M18.747,7.344a.665.665,0,0,0-.857,0L14.862,9.377C14.812,7.491,13.675,6,12.29,6H4.572C3.152,6,2,7.57,2,9.506v7.012c0,1.936,1.152,3.506,2.572,3.506H12.29c1.385,0,2.522-1.491,2.573-3.377l3.053,2.08a.683.683,0,0,0,.377.129.7.7,0,0,0,.454-.175,1.311,1.311,0,0,0,.4-.993V8.337A1.311,1.311,0,0,0,18.747,7.344Zm-5.6,9.174c0,.645-.384,1.169-.857,1.169H4.572c-.474,0-.857-.523-.857-1.169V9.506c0-.645.384-1.169.857-1.169H12.29c.474,0,.857.523.857,1.169Zm4.287-.725L14.862,14.04V11.983l2.572-1.753Z" transform="translate(1.787 -0.945)" fill="#2d3ddf"/>
      </g>
    </g>
  </g>
</svg>
const offline = <svg id="Group_21792" data-name="Group 21792" xmlns="http://www.w3.org/2000/svg" width="54" height="57" viewBox="0 0 54 57">
<rect id="Rectangle_16975" data-name="Rectangle 16975" width="54" height="57" rx="8" fill="#d6ebff"/>
<g id="Group_21775" data-name="Group 21775" transform="translate(12.5 14)">
  <rect id="Rectangle_1231" data-name="Rectangle 1231" width="29" height="29" fill="none"/>
  <path id="video" d="M21.616,7.574a.779.779,0,0,0-1,0L17.066,9.956C17.007,7.747,15.675,6,14.053,6H5.013C3.349,6,2,7.839,2,10.106v8.213c0,2.268,1.349,4.106,3.013,4.106h9.04c1.622,0,2.954-1.747,3.013-3.956l3.576,2.436a.8.8,0,0,0,.442.151.818.818,0,0,0,.532-.205,1.535,1.535,0,0,0,.472-1.163V8.738A1.535,1.535,0,0,0,21.616,7.574ZM15.057,18.319c0,.756-.45,1.369-1,1.369H5.013c-.555,0-1-.613-1-1.369V10.106c0-.756.45-1.369,1-1.369h9.04c.555,0,1,.613,1,1.369Zm5.022-.849-3.013-2.053V13.008l3.013-2.053Z" transform="translate(2.686 0.171)" fill="#2d3ddf"/>
</g>
</svg>

  return (
    <div>
      <Slider {...settings}>
        <div className="row">
          <div className={`col-11 ${stu.slide2}`}>
            {online}
            <h6 className={``}>UI/UX design <span>(online course)</span></h6>
            <div className={`${stu.per2}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName2}`}>Dani Beaumont</h6> <br />
              <div className={`my-4 pb-4`}>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/1.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/2.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/3.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/4.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/panel/dash/1.png`)} alt="1" height="" width="" />
                    </div>
                    </div>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide2}`}>
            {offline}
            <h6 className={``}>UI/UX design</h6>
            <div className={`${stu.per2}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName2}`}>Dani Beaumont</h6> <br />
              <div className={`my-4 pb-4`}>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/1.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/2.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/3.png`)} alt="1" height="" width="" />
                      </div>
                    </div>
            </div>
          </div>
        </div>
        <div>
        <div className={`col-11 ${stu.slide2}`}>
            {offline}
            <h6 className={``}>UI/UX design</h6>
            <div className={`${stu.per2}`}>
              <Image
                src={require(`../../../assets/panel/profile/per1.png`)}
                alt=""
              />
              <h6 className={`${stu.perName2}`}>Dani Beaumont</h6> <br />
              <div className={`my-4 pb-4`}>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/1.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/2.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/3.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/student/4.png`)} alt="1" height="" width="" />
                      </div>
                      <div className={`${co.conpicholder}`}>
                        <Image src={require(`../../../assets/panel/dash/1.png`)} alt="1" height="" width="" />
                    </div>
                    </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default StuSlider;
