import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import main from "../../../styles/MainCourse.module.css";
import search from "../../../styles/Search.module.css";
import ShortVideoSlider from "../ShortVideoSlider/ShortVideoSlider"
import TopCoursesSlider from "../TopCoursesSlider/TopCoursesSlider"
import { Tab, Tabs, SSRProvider } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import Loader from "../Loader/Loader";

const Sound = ({fetchData0,fetchData1,fetchData2,fetchData3,totalCount,totalPage}) => {
  const { loading } = useContext(DataContext);

  const [mydata1, setMydata1] = useState();
  useEffect(() => {
    const data =async()=>{
    setMydata1(await fetchData1(1))
  }
  data()
  }, [])
  const [pageNum, setPageNum] = useState(0);
  const pageCount = mydata1 !==undefined ? mydata1.totalPage :(<Loader />)
  const changePage = async({ selected }) => {
    setPageNum(selected);
    setMydata1(await fetchData1(selected+1));
  };
  const displayItems = mydata1 !==undefined ? mydata1.pageData.map((i) => {
    return (
      <div className={`row ${search.sound}`}  key={i.id}>
        <Link href={`/sounddetail/${i.id}`}>
    <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
        <figure className={`${search.soundImgHolder}`}>
            <Image src={i.picName} height="100" width="100" alt="background" className={`${search.soundImg}`}/>
            <figure className={`${styles.teacherBadge}`}  >
            <Image
              src={i.teacherPic}
              alt="person picture"
              width="44"
              height="44"
            />
            <h5 className={``}>{i.teacherName}</h5>
            <h6 className={``}>{i.year}</h6>
          </figure>
          <figure className={`${search.soundContent}`} >
            <Image
              src={require(`../../assets/home/sound2.png`)}
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
    </div>
    </Link>
    </div>
  )
    }):(<Loader />);


    const [mydata0, setMydata0] = useState();
    useEffect(() => {
      const data =async()=>{
      setMydata0(await fetchData0(1))
    }
    data()
    }, [])
    const [pageNum0, setPageNum0] = useState(0);
    const pageCount0 = mydata0 !==undefined ? mydata0.totalPage :(<Loader />)
    const changePage0 = async({ selected }) => {
      setPageNum0(selected);
      setMydata0(await fetchData0(selected+1));
    };
    const displayItems0 = mydata0 !==undefined ? mydata0.pageData.map((i) => {
        return (
            <div className={`row ${search.sound}`}  key={i.id}>
              <Link href={`/sounddetail/${i.id}`}>
          <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
              <figure className={`${search.soundImgHolder}`}>
                  <Image src={i.picName} height="100" width="100" alt="background" className={`${search.soundImg}`}/>
                  <figure className={`${styles.teacherBadge}`}  >
                  <Image
                    src={i.teacherPic}
                    alt="person picture"
                    width="44"
                    height="44"
                  />
                  <h5 className={``}>{i.teacherName}</h5>
                  <h6 className={``}>{i.year}</h6>
                </figure>
                <figure className={`${search.soundContent}`} >
                  <Image
                    src={require(`../../assets/home/sound2.png`)}
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
          </div>
          </Link>
          </div>
        )
      }):(<Loader />);


      const [mydata2, setMydata2] = useState();
      useEffect(() => {
        const data =async()=>{
        setMydata2(await fetchData2(1))
      }
      data()
      }, [])
      const [pageNum2, setPageNum2] = useState(0);
      const pageCount2 = mydata2 !==undefined ? mydata2.totalPage :(<Loader />)
      const changePage2 = async({ selected }) => {
        setPageNum2(selected);
        setMydata2(await fetchData2(selected+1));
      };
      const displayItems2 = mydata2 !==undefined ? mydata2.pageData.map((i) => {
          return (
              <div className={`row ${search.sound}`}  key={i.id}>
                <Link href={`/sounddetail/${i.id}`}>
            <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
                <figure className={`${search.soundImgHolder}`}>
                    <Image src={i.picName} height="100" width="100" alt="background" className={`${search.soundImg}`}/>
                    <figure className={`${styles.teacherBadge}`}  >
                    <Image
                      src={i.teacherPic}
                      alt="person picture"
                      width="44"
                      height="44"
                    />
                    <h5 className={``}>{i.teacherName}</h5>
                    <h6 className={``}>{i.year}</h6>
                  </figure>
                  <figure className={`${search.soundContent}`} >
                    <Image
                      src={require(`../../assets/home/sound2.png`)}
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
            </div>
            </Link>
            </div>
          )
        }):(<Loader />);

        const [mydata3, setMydata3] = useState();
      useEffect(() => {
        const data =async()=>{
        setMydata3(await fetchData3(1))
      }
      data()
      }, [])
      const [pageNum3, setPageNum3] = useState(0);
      const pageCount3 = mydata3 !==undefined ? mydata3.totalPage :(<Loader />)
      const changePage3 = async({ selected }) => {
        setPageNum3(selected);
        setMydata3(await fetchData3(selected+1));
      };
      const displayItems3 = mydata3 !==undefined ? mydata3.pageData.map((i) => {
          return (
              <div className={`row ${search.sound}`}  key={i.id}>
                <Link href={`/sounddetail/${i.id}`}>
            <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
                <figure className={`${search.soundImgHolder}`}>
                    <Image src={i.picName} height="100" width="100" alt="background" className={`${search.soundImg}`}/>
                    <figure className={`${styles.teacherBadge}`}  >
                    <Image
                      src={i.teacherPic}
                      alt="person picture"
                      width="44"
                      height="44"
                    />
                    <h5 className={``}>{i.teacherName}</h5>
                    <h6 className={``}>{i.year}</h6>
                  </figure>
                  <figure className={`${search.soundContent}`} >
                    <Image
                      src={require(`../../assets/home/sound2.png`)}
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
            </div>
            </Link>
            </div>
          )
        }):(<Loader />);

  return (
    <SSRProvider>
      <Tabs
        defaultActiveKey="pop"
        id="uncontrolled-tab-example"
        className="mb-4"
      >
        <Tab eventKey="pop" title="Most Popular">
          {displayItems0}
          <ReactPaginate
            perviousLabel={"Pervious"}
            nextLabel={"Next"}
            pageCount={pageCount0}
            onPageChange={changePage0}
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
            {displayItems2}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount2}
              onPageChange={changePage2}
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
            {displayItems3}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount3}
              onPageChange={changePage3}
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
