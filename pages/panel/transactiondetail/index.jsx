import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider, Modal } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/MenuStu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import st from "../../../styles/panel/Student.module.css";
import co from "../../../styles/panel/Courses.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TransactionList = () => {
const date = <svg id="Group_20895" data-name="Group 20895" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<rect id="Rectangle_6134" data-name="Rectangle 6134" width="32" height="32" fill="#2d3ddf" opacity="0"/>
<path id="Path_82764" data-name="Path 82764" d="M23.4,5.4H21V4.2a1.2,1.2,0,1,0-2.4,0V5.4H11.4V4.2A1.2,1.2,0,1,0,9,4.2V5.4H6.6A3.6,3.6,0,0,0,3,9V23.4A3.6,3.6,0,0,0,6.6,27H23.4A3.6,3.6,0,0,0,27,23.4V9A3.6,3.6,0,0,0,23.4,5.4Zm1.2,18a1.2,1.2,0,0,1-1.2,1.2H6.6a1.2,1.2,0,0,1-1.2-1.2V15H24.6Zm0-10.8H5.4V9A1.2,1.2,0,0,1,6.6,7.8H9V9a1.2,1.2,0,0,0,2.4,0V7.8h7.2V9A1.2,1.2,0,1,0,21,9V7.8h2.4A1.2,1.2,0,0,1,24.6,9Z" transform="translate(1 1)" fill="#2d3ddf"/>
</svg>
const cart = <svg xmlns="http://www.w3.org/2000/svg" xmln="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_2205" data-name="Rectangle 2205" width="32" height="32" fill="#2d3ddf"/>
  </clipPath>
</defs>
<g id="Group_21938" data-name="Group 21938" transform="translate(-1181 -33)">
  <g id="Group_16663" data-name="Group 16663" transform="translate(1181 33)">
    <g id="Group_16662" data-name="Group 16662" clip-path="url(#clip-path)">
      <g id="Group_16661" data-name="Group 16661">
        <g id="Group_16664" data-name="Group 16664">
          <path id="Path_9239" data-name="Path 9239" d="M22.8,9H19.2V7.8a4.8,4.8,0,0,0-9.6,0V9H6a1.2,1.2,0,0,0-1.2,1.2V23.4A3.6,3.6,0,0,0,8.4,27h12A3.6,3.6,0,0,0,24,23.4V10.2A1.2,1.2,0,0,0,22.8,9M12,7.8a2.4,2.4,0,0,1,4.8,0V9H12Zm9.6,15.6a1.2,1.2,0,0,1-1.2,1.2H8.4a1.2,1.2,0,0,1-1.2-1.2v-12H9.6v1.2a1.2,1.2,0,1,0,2.4,0V11.4h4.8v1.2a1.2,1.2,0,1,0,2.4,0V11.4h2.4Z" transform="translate(1.6 1)" fill="#2d3ddf"/>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>
const amount = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<g id="Group_16433" data-name="Group 16433" transform="translate(-1474 -585)">
  <rect id="Rectangle_1221" data-name="Rectangle 1221" width="32" height="32" transform="translate(1474 585)" fill="none"/>
  <path id="money-stack" d="M20.346,15.739H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842Zm0,3.685H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842ZM5.606,6.527a.921.921,0,1,0,.921.921A.921.921,0,0,0,5.606,6.527ZM18.5,1H3.764A2.764,2.764,0,0,0,1,3.764v7.37A2.764,2.764,0,0,0,3.764,13.9H18.5a2.764,2.764,0,0,0,2.764-2.764V3.764A2.764,2.764,0,0,0,18.5,1Zm.921,10.133a.921.921,0,0,1-.921.921H3.764a.921.921,0,0,1-.921-.921V3.764a.921.921,0,0,1,.921-.921H18.5a.921.921,0,0,1,.921.921ZM11.133,4.685A2.764,2.764,0,1,0,13.9,7.449,2.764,2.764,0,0,0,11.133,4.685Zm0,3.685a.921.921,0,1,1,.921-.921A.921.921,0,0,1,11.133,8.37Zm5.527-1.842a.921.921,0,1,0,.921.921A.921.921,0,0,0,16.661,6.527Z" transform="translate(1478.866 589.866)" fill="#2d3ddf"/>
</g>
</svg>
const state = <svg id="Group_21936" data-name="Group 21936" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<rect id="Rectangle_16966" data-name="Rectangle 16966" width="32" height="32" fill="#2d3ddf" opacity="0"/>
<path id="Path_83086" data-name="Path 83086" d="M8.938,17.125H12.5a1.188,1.188,0,1,0,0-2.375H8.938a1.188,1.188,0,1,0,0,2.375ZM23.188,5.25H6.563A3.563,3.563,0,0,0,3,8.813V19.5a3.563,3.563,0,0,0,3.563,3.563H23.188A3.563,3.563,0,0,0,26.75,19.5V8.813A3.563,3.563,0,0,0,23.188,5.25ZM24.375,19.5a1.188,1.188,0,0,1-1.188,1.188H6.563A1.188,1.188,0,0,1,5.375,19.5V12.375h19Zm0-9.5h-19V8.813A1.188,1.188,0,0,1,6.563,7.625H23.188a1.188,1.188,0,0,1,1.188,1.188Z" transform="translate(0.958 1.677)" fill="#2d3ddf"/>
</svg>
const pay = <svg id="Group_21944" data-name="Group 21944" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<rect id="Rectangle_17008" data-name="Rectangle 17008" width="32" height="32" fill="#2d3ddf" opacity="0"/>
<path id="Path_83098" data-name="Path 83098" d="M23.874,4.979a1.268,1.268,0,0,0-1.041-.24,10.184,10.184,0,0,1-7.711-1.524,1.267,1.267,0,0,0-1.412,0A10.184,10.184,0,0,1,6,4.739a1.268,1.268,0,0,0-1.041.24,1.188,1.188,0,0,0-.459.936v8.943a10.7,10.7,0,0,0,4.673,8.8L13.7,26.777a1.272,1.272,0,0,0,1.439,0l4.525-3.121a10.7,10.7,0,0,0,4.673-8.8V5.915A1.188,1.188,0,0,0,23.874,4.979Zm-2.02,9.879A8.326,8.326,0,0,1,18.222,21.7l-3.805,2.629L10.611,21.7a8.326,8.326,0,0,1-3.632-6.843V7.3a12.729,12.729,0,0,0,7.437-1.669A12.729,12.729,0,0,0,21.854,7.3Zm-5.528-2.748-3.335,3.24-1.1-1.08a1.275,1.275,0,0,0-1.761,0,1.181,1.181,0,0,0,0,1.705l1.983,1.92a1.269,1.269,0,0,0,1.753.007l.008-.007L18.135,13.8a1.177,1.177,0,0,0,0-1.7,1.273,1.273,0,0,0-1.76,0Z" transform="translate(1.75 1.167)" fill="#2d3ddf"/>
</svg>
const transaction = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<g id="Group_21943" data-name="Group 21943" transform="translate(-0.333)">
  <rect id="Rectangle_17007" data-name="Rectangle 17007" width="32" height="32" transform="translate(0.333)" fill="#2d3ddf" opacity="0"/>
  <path id="Path_83097" data-name="Path 83097" d="M26.431,2.956H13.6A3.857,3.857,0,0,0,9.751,6.819v9.015A3.857,3.857,0,0,0,13.6,19.7H26.431a3.857,3.857,0,0,0,3.851-3.863V6.819A3.857,3.857,0,0,0,26.431,2.956Zm1.284,12.877a1.286,1.286,0,0,1-1.284,1.287H13.6a1.285,1.285,0,0,1-1.283-1.287V6.819A1.285,1.285,0,0,1,13.6,5.532H26.431a1.286,1.286,0,0,1,1.284,1.287Zm-4.492-5.152a1.9,1.9,0,0,0-1.283.5,1.929,1.929,0,1,0,0,2.859,1.929,1.929,0,1,0,1.283-3.362ZM21.3,22.272a1.286,1.286,0,0,0-1.284,1.287v1.289a1.285,1.285,0,0,1-1.283,1.287H5.9a1.286,1.286,0,0,1-1.284-1.287V19.7H5.9a1.288,1.288,0,0,0,0-2.576H4.618V15.833A1.286,1.286,0,0,1,5.9,14.546a1.288,1.288,0,0,0,0-2.576,3.857,3.857,0,0,0-3.851,3.863v9.015A3.857,3.857,0,0,0,5.9,28.711H18.733a3.857,3.857,0,0,0,3.849-3.863V23.559A1.285,1.285,0,0,0,21.3,22.272ZM8.468,23.559H9.751a1.287,1.287,0,0,0,0-2.574H8.468a1.287,1.287,0,0,0,0,2.574Z" transform="translate(0 0)" fill="#2d3ddf"/>
</g>
</svg>

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${dash.container}`}>
        <div className={`row d-flex justify-content-between`}>
          <div className={`col-2 ${men.menucontainer}`}>
            <Link href="/panel/dashboard">
              <div className={`${men.logo}`}></div>
            </Link>

            <Menu />
          </div>
          <div
            className={`col-lg-10 ${dash.maincontainer} ${st.maincontainer}`}
          >
            <Header />
            <div className={`row ${st.transContainer}`}>
                <h6 className={`fw-bold`}>Order detail</h6>
                <h6 className={`${st.Orderid}`}>Order id: <span className={`fw-bold`}>304966</span></h6>
                <div className={`row`}>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{date} <h6 className={`${st.OrderDet}`}>Date: <span className={`fw-bold`}>sep , 10, 2022</span></h6></div>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{cart}<h6 className={`${st.OrderDet}`}>Type order: <span className={`fw-bold`}>course</span></h6></div>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{amount}<h6 className={`${st.OrderDet}`}>Total amount: <span className={`fw-bold`}>56$</span></h6></div>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{state}<h6 className={`${st.OrderDet}`}>State: <span className={`fw-bold ${st.stateColor}`}>Success</span></h6></div>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{pay}<h6 className={`${st.OrderDet}`}>Payment Method: <span className={`fw-bold`}>credit card</span></h6></div>
                    <div className={`col-sm-6 col-lg-4 mb-4`}>{transaction}<h6 className={`${st.OrderDet}`}>transaction ID: <span className={`fw-bold`}>123456789</span></h6></div>
                </div>
                <div className={`row ${st.orderList}`}>
                <h6 className={`fw-bold mb-4`}>Order List</h6>
                <div className={`col-11 mx-auto ${st.listItems}`}>
                    <div className={`d-flex ${st.orderHolder}`}>
                        <div className={`${st.orderSmall} ${st.orderNum}`} >1</div>
                        <div className={`${st.orderBig}`} >Course name</div>
                        <div className={`${st.orderBig} ${st.orderPic}`} ><Image src={require(`../../../src/assets/panel/dash/per.png`)} alt=""/>
                        <h6 className={`${st.orderPerName}`}>Teacher name</h6></div>
                        <div className={`${st.orderSmall}`} >18$</div>
                    </div>
                </div>
                <div className={`col-11 mx-auto ${st.listItems}`}>
                    <div className={`d-flex ${st.orderHolder}`}>
                        <div className={`${st.orderSmall} ${st.orderNum}`} >2</div>
                        <div className={`${st.orderBig}`} >Course name</div>
                        <div className={`${st.orderBig} ${st.orderPic}`} ><Image src={require(`../../../src/assets/panel/dash/per.png`)} alt=""/>
                        <h6 className={`${st.orderPerName}`}>Teacher name</h6></div>
                        <div className={`${st.orderSmall}`} >38$</div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default TransactionList;