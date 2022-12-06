import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Courses.module.css";
import ch from "../../../styles/panel/Chats.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";

const Courses = () => {
  const [state, setState] = useState(true);
  const [fstate, setFstate] = useState(false);
  const searc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 19.802 19.785"
    >
      <path
        id="search"
        d="M21.5,20.1l-3.671-3.641a8.906,8.906,0,1,0-1.375,1.375L20.1,21.471A.983.983,0,1,0,21.5,20.1Zm-10.6-2.266A6.926,6.926,0,1,1,17.832,10.9a6.926,6.926,0,0,1-6.927,6.926Z"
        transform="translate(-1.979 -1.979)"
        fill="#7a7d7c"
      />
    </svg>
  );
  const attach = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.739"
      height="18"
      viewBox="0 0 15.739 18"
    >
      <path
        id="Path_83044"
        data-name="Path 83044"
        d="M18.122,12.527,12.46,18.2a3.894,3.894,0,0,1-5.5-5.5l7.33-7.33a2.355,2.355,0,0,1,3.243,0,2.307,2.307,0,0,1,0,3.243l-6.321,6.313a.7.7,0,0,1-1.027-.953l4.7-4.691a.92.92,0,0,0-1.3-1.3l-4.7,4.709a2.511,2.511,0,0,0-.013,3.551l.013.013a2.583,2.583,0,0,0,3.564,0l6.313-6.321a4.123,4.123,0,0,0-5.827-5.827l-7.33,7.329a5.726,5.726,0,0,0,8.145,8.035l5.672-5.662a.92.92,0,0,0-1.3-1.3h0Z"
        transform="translate(-4.13 -3)"
        fill="#7a7d7c"
      />
    </svg>
  );
  const paper = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="Group_21603" data-name="Group 21603" transform="translate(-0.317)">
        <rect
          id="Rectangle_3582"
          data-name="Rectangle 3582"
          width="24"
          height="24"
          transform="translate(0.317)"
          fill="#2d3ddf"
          opacity="0"
        />
        <path
          id="Path_9893"
          data-name="Path 9893"
          d="M18.9,9.024a1.052,1.052,0,0,0-.054-.234V8.711a.908.908,0,0,0-.171-.243h0L13.285,3.26h0a.943.943,0,0,0-.252-.165h-.081L12.665,3H7.22a2.651,2.651,0,0,0-2.7,2.6V17.755a2.651,2.651,0,0,0,2.7,2.6H16.2a2.651,2.651,0,0,0,2.7-2.6V9.024ZM13.509,5.96l2.327,2.248H13.509Zm3.594,11.8a.884.884,0,0,1-.9.868H7.22a.884.884,0,0,1-.9-.868V5.6a.884.884,0,0,1,.9-.868h4.492v4.34a.884.884,0,0,0,.9.868H17.1Z"
          transform="translate(0.105 0.32)"
          fill="#2d3ddf"
        />
      </g>
    </svg>
  );
  const sen = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g
        id="Group_21600"
        data-name="Group 21600"
        transform="translate(-1058 -701)"
      >
        <rect
          id="Rectangle_6269"
          data-name="Rectangle 6269"
          width="32"
          height="32"
          rx="8"
          transform="translate(1058 701)"
          fill="#2d3ddf"
        />
        <g
          id="Group_21169"
          data-name="Group 21169"
          transform="translate(1062 705)"
        >
          <rect
            id="Rectangle_6268"
            data-name="Rectangle 6268"
            width="24"
            height="24"
            transform="translate(0)"
            fill="#fff"
            opacity="0"
          />
          <path
            id="Path_83043"
            data-name="Path 83043"
            d="M19.5,9.586l-12.6-6.3A2.7,2.7,0,0,0,3.234,6.8l2.16,4.833h0a.954.954,0,0,1,0,.738L3.234,17.2A2.7,2.7,0,0,0,5.7,21a2.846,2.846,0,0,0,1.215-.288l12.6-6.3a2.7,2.7,0,0,0,0-4.823ZM18.7,12.8l-12.6,6.3a.9.9,0,0,1-1.215-1.17L7.041,13.1q.04-.1.072-.2h6.2a.9.9,0,1,0,0-1.8h-6.2q-.031-.1-.072-.2L4.89,6.067A.9.9,0,0,1,6.105,4.9l12.6,6.3a.9.9,0,0,1,0,1.6Z"
            transform="translate(0)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
  const del = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g
        id="Group_21198"
        data-name="Group 21198"
        transform="translate(-1037 -638)"
      >
        <rect
          id="Rectangle_6197"
          data-name="Rectangle 6197"
          width="32"
          height="32"
          transform="translate(1037 638)"
          fill="#ff4d4d"
          opacity="0"
        />
        <path
          id="Path_82778"
          data-name="Path 82778"
          d="M24.087,7.75h-4.75V6.562A3.563,3.563,0,0,0,15.775,3H13.4A3.563,3.563,0,0,0,9.837,6.562V7.75H5.087a1.187,1.187,0,0,0,0,2.375H6.275V23.187A3.563,3.563,0,0,0,9.837,26.75h9.5A3.563,3.563,0,0,0,22.9,23.187V10.125h1.187a1.187,1.187,0,1,0,0-2.375ZM12.212,6.562A1.188,1.188,0,0,1,13.4,5.375h2.375a1.188,1.188,0,0,1,1.187,1.187V7.75h-4.75Zm8.312,16.625a1.188,1.188,0,0,1-1.187,1.187h-9.5A1.188,1.188,0,0,1,8.65,23.187V10.125H20.525Z"
          transform="translate(1038.246 638.958)"
          fill="#ff4d4d"
        />
      </g>
    </svg>
  );
  const file = (
    <svg
      id="Group_21369"
      data-name="Group 21369"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_16896"
        data-name="Rectangle 16896"
        width="24"
        height="24"
        fill="#3a8944"
        opacity="0"
      />
      <path
        id="Path_83065"
        data-name="Path 83065"
        d="M18.89,5.834H12.851L12.543,4.9a2.881,2.881,0,0,0-2.73-1.879H5.428A2.852,2.852,0,0,0,2.543,5.834v12.21a2.852,2.852,0,0,0,2.885,2.818H18.89a2.852,2.852,0,0,0,2.885-2.818V8.651A2.852,2.852,0,0,0,18.89,5.834Zm.961,12.21a.95.95,0,0,1-.961.939H5.428a.95.95,0,0,1-.961-.939V5.834A.95.95,0,0,1,5.428,4.9H9.813a.959.959,0,0,1,.913.639l.52,1.539a.959.959,0,0,0,.913.64H18.89a.95.95,0,0,1,.961.939Z"
        transform="translate(-0.159 -0.188)"
        fill="#3a8944"
      />
    </svg>
  );
  const share = (
    <svg
      id="Group_21602"
      data-name="Group 21602"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_16926"
        data-name="Rectangle 16926"
        width="24"
        height="24"
        transform="translate(0 0)"
        fill="#2d3ddf"
        opacity="0"
      />
      <path
        id="Path_83080"
        data-name="Path 83080"
        d="M10.141,17.085l-1.6,1.558a2.242,2.242,0,1,1-3.171-3.171h0L9.479,11.35a2.228,2.228,0,0,1,3.072-.082l.108.091a.907.907,0,1,0,1.269-1.3,2.471,2.471,0,0,0-.163-.19,4.04,4.04,0,0,0-5.518.2L4.079,14.195A4.059,4.059,0,0,0,9.814,19.93L11.382,18.4a.906.906,0,0,0-1.241-1.314Zm9.685-12.9a4.067,4.067,0,0,0-5.735,0L12.524,5.714a.906.906,0,0,0,1.241,1.314l1.567-1.559A2.243,2.243,0,1,1,18.5,8.64L14.39,12.763a2.23,2.23,0,0,1-3.072.082l-.108-.091a.907.907,0,0,0-1.269,1.3,2.691,2.691,0,0,0,.209.19,4.05,4.05,0,0,0,5.518-.2L19.79,9.918A4.067,4.067,0,0,0,19.826,4.183Z"
        fill="#2d3ddf"
      />
    </svg>
  );
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
    >
      <g
        id="Layer_2"
        data-name="Layer 2"
        transform="translate(0 12.8) rotate(-90)"
      >
        <rect
          id="Rectangle_2649"
          data-name="Rectangle 2649"
          width="13"
          height="13"
          transform="translate(-0.2)"
          opacity="0"
        />
        <path
          id="Path_9425"
          data-name="Path 9425"
          d="M12.355,6.929a.907.907,0,0,0-1.28,0L7.827,10.155,4.579,6.929A.912.912,0,0,0,3.294,8.219h0L7.15,12.081a.917.917,0,0,0,1.291,0h0l3.9-3.861a.912.912,0,0,0,0-1.291Z"
          transform="translate(-1.427 -3.11)"
        />
      </g>
    </svg>
  );
  const [open, setOpen] = useState(false);
  const HamOpen = (
    <CgMenu
      className={`${styles.Hamburger} ${ch.ham}`}
      size="30px"
      color="#ffcf00"
      onClick={() => setOpen(!open)}
    />
  );
  const HamClose = (
    <ImCross
      className={`${styles.Hamburger} ${ch.ham}`}
      size="30px"
      color="#ffcf00"
      onClick={() => setOpen(!open)}
    />
  );
  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  };
  const changeStyle = () => {
    setState(!state);
  };
  const change = () => {
    setFstate(!fstate);
    console.log(fstate)
  };
  const changestate = () => {
    setFstate(false);
  };

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
            <div className={`row ${ch.content}`}>
              <div className={`col-12 ${ch.chattitle}`}>
                <span className={``}>Receive Message</span>
                <div className={``}>
                  <Link href="/panel/live">
                    <button type="button" className={`${ch.chatbtn}`}>
                      Live Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className={`row mx-auto my-5 position-relative`}>
                {!fstate ? null : <div className={state ?`${ch.statebtn}` : `${ch.chat3}`} onClick={changestate}>{HamClose}</div>}
                {state ? (
                  <div className={fstate ? `col-md-4 col-lg-3 gx-3 ${ch.fperson1}`: `col-md-4 col-lg-3 gx-3 ${ch.fperson2}`}>
                    <div className={`col-12 ${ch.searchperson}`}>
                      <input
                        type="text"
                        placeholder="Search People"
                        className={`${ch.search}`}
                      />
                      {searc}
                    </div>
                    <div className={`col-12 ${ch.showperson}`}>
                      <h6 className={`${ch.massege}`}>Messages</h6>
                      <div
                        className={`row ${ch.peritem} ${ch.selected}`}
                        onClick={change}
                      >
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.unread}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.unread}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/3.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/4.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.unread}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.unread}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.unread}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.unread}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/3.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.unread}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.unread}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-3 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/4.png`)}
                            alt=""
                          />
                        </div>
                        <div className={`col-9 ${ch.perdetail}`}>
                          <h5
                            className={`text-truncate ${ch.pertitle} ${ch.read}`}
                          >
                            User Name{" "}
                          </h5>
                          <h6
                            className={`text-truncate ${ch.permessage} ${ch.read}`}
                          >
                            person Message person Message person Message
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`col-xxl-1 gx-3`}>
                    <div
                      className={`col-12 ${ch.showperson} ${ch.showperson2}`}
                    >
                      <h6 className={`${ch.massegee}`}>Messages</h6>
                      <div className={`row ${ch.peritem} ${ch.selected}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/3.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/4.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/3.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`row ${ch.peritem}`}>
                        <div className={`col-12 ${ch.perpic}`}>
                          <Image
                            src={require(`../../../src/assets/panel/chat/4.png`)}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {state ? null : (
                  <div className={`${ch.showhideBTN}`}>
                    {open ? HamOpen : HamClose}
                  </div>
                )}
                {state ? (
                  <div className={fstate ? `col-md-8 col-lg-9 gx-3 ${ch.chat} ${ch.fchat2}`:`col-md-8 col-lg-9 gx-3 ${ch.chat} ${ch.fchat1}` }>
                    <div className={`row`}>
                      <h6 className={`text-center ${ch.date}`}>
                        sep 10 , 2022
                      </h6>
                      <div className={`col-lg-11 ${ch.post}`}>
                        <div className={`row`}>
                          <div
                            className={`col-auto ${ch.chatpic}`}
                            onClick={changeStyle}
                          >
                            <Image
                              src={require(`../../../src/assets/panel/chat/1.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.posttxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <h6 className={`${ch.clock}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-11 ${ch.reply}`}>
                        <div className={`row d-flex flex-row-reverse`}>
                          <div className={`col-auto ${ch.chatreplypic}`}>
                            <Image
                              src={require(`../../../src/assets/panel/chat/2.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.postreplytxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <h6 className={`${ch.clockreply}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-11 ${ch.post}`}>
                        <div className={`row`}>
                          <div className={`col-auto ${ch.chatpic}`}>
                            <Image
                              src={require(`../../../src/assets/panel/chat/1.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.posttxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <div className={`col-12 mt-3 ${ch.posttxt}`}>
                              Lorem ipsum
                            </div>
                            <h6 className={`${ch.clock}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <textarea
                        type="text"
                        onKeyDown={handleKeyDown}
                        className={`${ch.send}`}
                        placeholder="Enter your message here"
                      />
                      <div className={`${ch.attach}`}>{attach}</div>
                      <div className={`${ch.sen}`}>{sen}</div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      open
                        ? `col-7 col-lg-7 col-lg-7 col-xxl-7 gx-3 ${ch.chat3}`
                        : `col-7 col-lg-7 col-lg-7 col-xxl-7 gx-3 ${ch.chat} ${ch.chat2}`
                    }
                  >
                    <div className={`row position-relative ${ch.height}`}>
                      <h6 className={`text-center ${ch.date}`}>
                        sep 10 , 2022
                      </h6>
                      <div className={`col-lg-11 ${ch.post}`}>
                        <div className={`row`}>
                          <div
                            className={`col-auto ${ch.chatpic}`}
                            onClick={changeStyle}
                          >
                            <Image
                              src={require(`../../../src/assets/panel/chat/1.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.posttxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <h6 className={`${ch.clock}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-11 ${ch.reply}`}>
                        <div className={`row d-flex flex-row-reverse`}>
                          <div className={`col-auto ${ch.chatreplypic}`}>
                            <Image
                              src={require(`../../../src/assets/panel/chat/2.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.postreplytxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <h6 className={`${ch.clockreply}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-11 ${ch.post}`}>
                        <div className={`row`}>
                          <div className={`col-auto ${ch.chatpic}`}>
                            <Image
                              src={require(`../../../src/assets/panel/chat/1.png`)}
                              alt=""
                            />
                          </div>
                          <div className={`col-10 ${ch.txtwidth}`}>
                            <div className={`col-12 ${ch.posttxt}`}>
                              Lorem ipsum, or lipsum as it is sometimes known
                            </div>
                            <div className={`col-12 mt-3 ${ch.posttxt}`}>
                              Lorem ipsum
                            </div>
                            <h6 className={`${ch.clock}`}>10:00</h6>
                          </div>
                        </div>
                      </div>
                      <textarea
                        type="text"
                        onKeyDown={handleKeyDown}
                        className={`${ch.send}`}
                        placeholder="Enter your message here"
                      />
                      <div className={`${ch.attach}`}>{attach}</div>
                      <div className={`${ch.sen}`}>{sen}</div>
                    </div>
                  </div>
                )}

                {state ? null : (
                  <div
                    className={
                      open
                        ? `col-4 col-md-5 col-xxl-4 ${ch.personDetail} ${ch.personDetail2}`
                        : `col-4 col-md-5 col-xxl-4 ${ch.personDetail3}`
                    }
                  >
                    <div className={`col-lg-11 ${ch.showper} mx-auto`}>
                      <Image
                        src={require(`../../../src/assets/panel/chat/1big.png`)}
                        alt=""
                      />
                      <h6 className={`${ch.name}`}>User Name</h6>
                      <h6 className={`${ch.work}`}>
                        User Expeience Design User Interface
                      </h6>
                      <div
                        className={`row d-flex justify-content-around mx-auto mt-4 mb-5`}
                      >
                        <div className={`col-xl-5 mb-2 ${ch.file}`}>
                          <h6 className={`${ch.filename}`}>All Files</h6>
                          {file}
                          <h6 className={`${ch.filecount}`}>256</h6>
                        </div>
                        <div className={`col-xl-5 mb-2 ${ch.share}`}>
                          <h6 className={`${ch.sharename}`}>All Links</h6>
                          {share}
                          <h6 className={`${ch.sharecount}`}>256</h6>
                        </div>
                      </div>
                      <div className={`col-12 mt-5`}>
                        <div className={`row`}>
                          <div className={`col-2 ${ch.papersvg}`}>{paper}</div>
                          <div className={`col-9 ${ch.txtholder}`}>
                            <h6 className={`fw-bold`}>Document</h6>
                            <h6 className={``}>124</h6>
                          </div>
                          <div className={`col-1 ${ch.arrow}`}>{arrow}</div>
                        </div>
                      </div>
                      <div className={`col-12 mt-3 mb-5`}>
                        <div className={`row`}>
                          <div className={`col-2 ${ch.papersvg}`}>{paper}</div>
                          <div className={`col-9 ${ch.txtholder}`}>
                            <h6 className={`fw-bold`}>Media</h6>
                            <h6 className={``}>124</h6>
                          </div>
                          <div className={`col-1 ${ch.arrow}`}>{arrow}</div>
                        </div>
                      </div>
                      <div className={`row`}>
                        <div className={`col-12 mt-5`}>
                          {del}
                          <h6 className={`${ch.deldes}`}>Delete Chat</h6>
                        </div>
                        <div className={`col-12 mt-4`}>
                          {del}
                          <h6 className={`${ch.deldes}`}>Remove connection</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
