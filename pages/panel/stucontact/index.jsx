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
import { Button } from "react-bootstrap";

const Courses = () => {
  const [key, setKey] = useState("home");
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
            <div className={`row ${ch.chatlivehold}`}>
              <div className={`col-lg-5`}>
                <div className={`col-lg-11`}>
                  <h6 className={`fw-bold ${ch.conreqtitle}`}>
                    Connection Request
                  </h6>
                  <div className={`col-12 ${ch.searchperson}`}>
                    <input
                      type="text"
                      placeholder="Search People"
                      className={`${ch.search}`}
                    />
                    {searc}
                  </div>
                  <div className={`${ch.conreqSec}`}>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                    <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Delete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-lg-7`}>
                <div className={`row ${ch.conholder}`}>
                <div className={`row p-3`}>
                  <div className={`col-6`}>
                    <h6 className={`fw-bold ${ch.conList}`}>Connection List</h6>
                  </div>
                  <div className={`col-6`}>
                    <div className={`col-12 ${ch.searchperson}`}>
                      <input
                        type="text"
                        placeholder="Search People"
                        className={`${ch.search}`}
                      />
                      {searc}
                    </div>
                  </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                <div className={`col-12 p-3`}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={require(`../../../src/assets/panel/chat/2.png`)}
                          alt=""
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          User Name
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          User Expeience Design User Interface
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
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
