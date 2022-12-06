import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import ch from "../../../styles/panel/Chats.module.css";
import men from "../../../styles/panel/Menu.module.css";
import { Tab, Tabs } from "react-bootstrap";

const Courses = () => {
  const [key, setKey] = useState("home");

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
              <div className={`col-lg-8`}>
                <div className={`col-lg-11 ${ch.videoChat}`}>
                <Image
                            src={require(`../../../src/assets/panel/chat/vid.png`)}
                            alt=""
                          />
                </div>
              </div>
              <div className={`col-lg-4 ${ch.tab}`}>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className={`mb-3 ${ch.tabstyle}`}
                >
                  <Tab eventKey="home" title="Chat" className={`${ch.tabstyle}`}>
                    <div className={`row ${ch.chatcontent}`}>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/1.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        <div className={`row ${ch.item}`}>
                        <div className={`col-3`}>
                        <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                          </div>
                          <div className={`col-9 ${ch.itdes}`}>
                          <h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6></div>
                        </div>
                        <h6 className={`${ch.ittime}`}>09:12</h6>
                        
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="People">
                    <div className={`row ${ch.people}`}>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 mb-2`}>
                            <div className={`row`}>
                                <div className={`col-4 ${ch.peoplepic}`}>
                                <Image
                            src={require(`../../../src/assets/panel/chat/2.png`)}
                            alt=""
                          />
                                </div>
                                <div className={`col-4 fw-bold ${ch.peoplename}`}>User Name</div>
                                <div className={`col-4`}>
                                    <button className={`btn btn-warning ${ch.peoplebtn}`}>Invite</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
