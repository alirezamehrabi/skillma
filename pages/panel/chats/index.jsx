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
                        <Image src={require(`../../../src/assets/panel/chat/1.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.unread}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.unread}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/2.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/3.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/4.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.unread}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.unread}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/1.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.unread}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.unread}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/2.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/2.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/2.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/3.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.unread}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.unread}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                    <div className={`row ${ch.peritem}`}>
                      <div className={`col-3 ${ch.perpic}`}>
                        <Image src={require(`../../../src/assets/panel/chat/4.png`)} alt=""/>
                      </div>
                      <div className={`col-9 ${ch.perdetail}`}>
                        <h5 className={`text-truncate ${ch.pertitle} ${ch.read}`}>User Name </h5>
                        <h6 className={`text-truncate ${ch.permessage} ${ch.read}`}>person Message person Message person Message</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-9 gx-3 ${ch.chat}`}>
                  <h6 className={`text-center ${ch.date}`}>sep 10 , 2022</h6>
                  <div className={`col-9 ${ch.post}`}>
                    <div className={`row`}>
                    <div className={`col-2 ${ch.chatpic}`}>
                    <Image src={require(`../../../src/assets/panel/chat/1.png`)} alt=""/>
                      
                    </div>
                    <div className={`col-10`}>2</div>

                    </div>
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
