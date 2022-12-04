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

const Courses = () => {
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
  const attach = <svg xmlns="http://www.w3.org/2000/svg" width="15.739" height="18" viewBox="0 0 15.739 18"><path id="Path_83044" data-name="Path 83044" d="M18.122,12.527,12.46,18.2a3.894,3.894,0,0,1-5.5-5.5l7.33-7.33a2.355,2.355,0,0,1,3.243,0,2.307,2.307,0,0,1,0,3.243l-6.321,6.313a.7.7,0,0,1-1.027-.953l4.7-4.691a.92.92,0,0,0-1.3-1.3l-4.7,4.709a2.511,2.511,0,0,0-.013,3.551l.013.013a2.583,2.583,0,0,0,3.564,0l6.313-6.321a4.123,4.123,0,0,0-5.827-5.827l-7.33,7.329a5.726,5.726,0,0,0,8.145,8.035l5.672-5.662a.92.92,0,0,0-1.3-1.3h0Z" transform="translate(-4.13 -3)" fill="#7a7d7c"/></svg>
  const sen = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g id="Group_21600" data-name="Group 21600" transform="translate(-1058 -701)"><rect id="Rectangle_6269" data-name="Rectangle 6269" width="32" height="32" rx="8" transform="translate(1058 701)" fill="#2d3ddf"/><g id="Group_21169" data-name="Group 21169" transform="translate(1062 705)"><rect id="Rectangle_6268" data-name="Rectangle 6268" width="24" height="24" transform="translate(0)" fill="#fff" opacity="0"/><path id="Path_83043" data-name="Path 83043" d="M19.5,9.586l-12.6-6.3A2.7,2.7,0,0,0,3.234,6.8l2.16,4.833h0a.954.954,0,0,1,0,.738L3.234,17.2A2.7,2.7,0,0,0,5.7,21a2.846,2.846,0,0,0,1.215-.288l12.6-6.3a2.7,2.7,0,0,0,0-4.823ZM18.7,12.8l-12.6,6.3a.9.9,0,0,1-1.215-1.17L7.041,13.1q.04-.1.072-.2h6.2a.9.9,0,1,0,0-1.8h-6.2q-.031-.1-.072-.2L4.89,6.067A.9.9,0,0,1,6.105,4.9l12.6,6.3a.9.9,0,0,1,0,1.6Z" transform="translate(0)" fill="#fff"/></g></g></svg>

  
  const handleKeyDown =(e) =>{
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; 
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }
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
                  <button type="button" className={`${ch.chatbtn}`}>
                    Live Now
                  </button>
                </div>
              </div>

              <div className={`row mx-auto my-5`}>
                <div className={`col-lg-3 gx-3`}>
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
                    <div className={`row ${ch.peritem} ${ch.selected}`}>
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
                <div className={`col-lg-9 gx-3 ${ch.chat}`}>
                  <div className={`row`}>
                    <h6 className={`text-center ${ch.date}`}>sep 10 , 2022</h6>
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
                    <textarea type="text" onKeyDown={handleKeyDown} className={`${ch.send}`} placeholder="Enter your message here"/>
                    <div className={`${ch.attach}`}>{attach}</div>
                    <div className={`${ch.sen}`}>{sen}</div>
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
export default Courses;
