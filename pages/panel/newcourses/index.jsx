import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import CourseChoice from "../../../src/components/panel/CourseChoice/CourseChoice";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/course.module.css";
import men from "../../../styles/panel/Menu.module.css";

const Courses = () => {
  const cors = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g id="Group_21212" data-name="Group 21212" transform="translate(-0.333)">
        <rect
          id="Rectangle_6291"
          data-name="Rectangle 6291"
          width="48"
          height="48"
          transform="translate(0.333)"
          fill="#1d7dd8"
          opacity="0"
        />
        <g
          id="Group_21211"
          data-name="Group 21211"
          transform="translate(3.956 5.8)"
        >
          <path
            id="Path_83050"
            data-name="Path 83050"
            d="M36.433,3H8.076A6.091,6.091,0,0,0,2,9.107V25.392A6.091,6.091,0,0,0,8.076,31.5H20.229v4.071h-8.1a2.036,2.036,0,0,0,0,4.071H32.382a2.036,2.036,0,0,0,0-4.071h-8.1V31.5H36.433a6.091,6.091,0,0,0,6.076-6.107V9.107A6.091,6.091,0,0,0,36.433,3Zm2.025,22.392a2.031,2.031,0,0,1-2.025,2.036H8.076a2.031,2.031,0,0,1-2.025-2.036V9.107A2.031,2.031,0,0,1,8.076,7.071H36.433a2.031,2.031,0,0,1,2.025,2.036Z"
            transform="translate(-2 -3)"
            fill="#1d7dd8"
          />
          <path
            id="Path_83051"
            data-name="Path 83051"
            d="M20.481,10.992,13.35,6.9A2.525,2.525,0,0,0,9.562,9.117v8.21a2.525,2.525,0,0,0,3.788,2.187l7.131-4.091a2.524,2.524,0,0,0,0-4.37Z"
            transform="translate(6.074 0.916)"
            fill="#1d7dd8"
          />
        </g>
      </g>
    </svg>
  );
  const onlinecorse = (
    <svg
      id="Group_21213"
      data-name="Group 21213"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <rect
        id="Rectangle_3457"
        data-name="Rectangle 3457"
        width="48"
        height="48"
        fill="#ed7208"
        opacity="0"
      />
      <path
        id="Path_9761"
        data-name="Path 9761"
        d="M37,8H33.133a24.954,24.954,0,0,0-12.461,3.636A25.006,25.006,0,0,0,8.211,8a7.3,7.3,0,0,0-3.864.727c-.863,0-1.49.727-1.478,2.182V34.182c-.014,1.455.771,2.182,1.755,2.182h.329c5.153-.727,10.45,0,14.687,4.364H21.7a16.649,16.649,0,0,1,14.687-5.091,1.271,1.271,0,0,0,2.056-.727c.019,0,.027-.727.027-.727V9.455C38.436,8.727,37.821,8.727,37,8Zm-18.1,26.909A18.834,18.834,0,0,0,8.211,32H6.431V11.636h1.78c3.8,0,7.513.727,10.681,3.636ZM34.913,32h-1.78a18.834,18.834,0,0,0-10.681,2.909V15.273c3.168-2.909,6.884-3.636,10.681-3.636h1.78ZM37,40.727a4.379,4.379,0,0,0-3.864-1.455c-4.417,0-8.744,2.182-12.461,4.364-3.718-2.182-8.045-4.364-12.461-4.364a4.379,4.379,0,0,0-3.864,1.455c-.97,0-1.634.727-1.478,1.455h0a2.209,2.209,0,0,0,2.084,2.182c5.153-.727,10.45,0,14.687,3.636H21.7c4.238-3.636,9.534-4.364,14.687-3.636a2.209,2.209,0,0,0,2.084-2.182c.16-.727-.5-1.455-1.468-1.455Z"
        transform="translate(3.008 -4)"
        fill="#ed7208"
      />
    </svg>
  );

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
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
            <CourseChoice/>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
