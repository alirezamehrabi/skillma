import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import main from "../../../styles/MainCourse.module.css";
import search from "../../../styles/Search.module.css";
import ShortVideoSlider from "../ShortVideoSlider/ShortVideoSlider"
import TopCoursesSlider from "../TopCoursesSlider/TopCoursesSlider"
import { Tab, Tabs, SSRProvider } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
const Sound = () => {
  const [txt, setTxt] = useState([
    {
      id: "1",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "2",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "3",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "4",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "5",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "6",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "7",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "8",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "9",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "10",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "11",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "12",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "13",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "14",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "15",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "16",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "17",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "18",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "19",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "20",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "21",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "22",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "23",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "24",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "25",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "26",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "27",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "28",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "29",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "30",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "31",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
    {
      id: "32",
      perPic: "teacherMini.png",
      img: "soundIMG.png",
      name: "Dani Bimount",
      year: "2 years ago",
      title: "Lorem Ipsum is simply dummy text",
      show: "5",
      forward: "3",
      comment: "120",
    },
  ]);
  const [pageNum, setPageNum] = useState(0);
  const itemPerPage = 12;
  const pageVisited = itemPerPage * pageNum;
  const pageCount = Math.ceil(txt.length / itemPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
  const displayItems = txt
    .slice(pageVisited, pageVisited + itemPerPage)
    .map((i) => {
      return (
          <div className={`row ${search.sound}`}  key={i.id}>
        <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
            <figure className={`${search.soundImgHolder}`}>
                <Image src={require(`../../../src/assets/home/${i.img}`)} height="" width="" alt="background" className={`${search.soundImg}`}/>
                <figure className={`${styles.teacherBadge}`}  >
                <Image
                  src={require(`../../../src/assets/home/${i.perPic}`)}
                  alt="person picture"
                  width=""
                  height=""
                />
                <h5 className={``}>{i.name}</h5>
                <h6 className={``}>{i.year}</h6>
              </figure>
              <figure className={`${search.soundContent}`} >
                <Image
                  src={require(`../../../src/assets/home/sound2.png`)}
                  alt="sound"
                  width=""
                  height=""
                />
                <h6 className={``}>{i.title}</h6>
              </figure>
            </figure>
            <div className={`col-9 mx-auto`}>
                  <div className={`row ${styles.bot} ${search.bot}`}>
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
                      1
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
                      2
                    </div>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />3
                    </div>
                  </div>
                  </div>
        </div>
        </div>
      );
    });
  return (
    <SSRProvider>
      <Tabs
        defaultActiveKey="pop"
        id="uncontrolled-tab-example"
        className="mb-4"
      >
        <Tab eventKey="pop" title="Most Popular">
          {displayItems}
          <ReactPaginate
            perviousLabel={"Pervious"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={search.paginationBttns}
            previousLinkClassName={search.previousBttn}
            nextLinkClassName={search.nextBttn}
            disabledClassName={search.paginationDisabled}
            activeClassName={search.paginationActive}
          />
        </Tab>
        <Tab eventKey="new" title="Newest">
          <div className={`col-12`}>
            {displayItems}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
        <Tab eventKey="trend" title="Trending">
          <div className={`col-12`}>
            {displayItems}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
        <Tab eventKey="rate" title="Highest Rate">
          <div className={`col-12`}>
            {displayItems}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
      </Tabs>
    </SSRProvider>
  );
};

export default Sound;
