import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx"
import Menu from "../../../src/components/panel/Menu/Menu.jsx"
import Menu from "../../../src/components/panel/Menu/Menu.jsx"
import dash from "../../../styles/panel/Dashboard.module.css"
import co from "../../../styles/panel/Courses.module.css"
import men from "../../../styles/panel/Menu.module.css"

const Courses = () => {
    return (
        <SSRProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={`${dash.container}`}>
                <div className={`row d-flex justify-content-between`}>
                    <div className={`col-2 ${men.menucontainer}`}>
                        <Link href="/panel/dashboard"><div className={`${men.logo}`}></div></Link>

                        <Menu /></div>
                    <div className={`col-lg-10 ${dash.maincontainer}`}>
                        <Header />
                        <div className={`col-12 ${co.coursetitle}`}><span className={``}>Course</span>
                        <div className={``}><button type="button" className={`${co.coursebtn}`}>Create New</button></div></div>
                        <div className={`col-12`}>


                        <div className={`col-12 ${styles.searchBox}`}>
                <div className={`row `}>
              <div className={`col-6 g-3 my-3`}>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Topic,Course,Teacher"
                aria-label="Search by Topic,Course,Teacher"
                aria-describedby="basic-addon2"
              />
                </div>
              <div className={`col-2 g-3 my-3`}>
              <div className={styles.box2}>
                <ul className={styles.boxList2} onClick={dropdown}>
                  <Link passHref  href="#" className={styles.listHeader2}>
                    <span onClick={funcHandler}>
                      {title}
                    </span>
                  </Link>

                      <li className={styles.listItem21}>Free</li>
                      <li className={styles.listItem21}>Price</li>
                </ul>
              </div>
                </div>
                <div className={`col-2 g-3 my-3`}>
              <div className={styles.box2}>
                <ul className={styles.boxList2} onClick={dropdown2}>
                  <Link passHref  href="#" className={styles.listHeader2}>
                    <span onClick={funcHandler}>
                      {title2}
                    </span>
                  </Link>

                      <li className={styles.listItem21}>All Levels</li>
                      <li className={styles.listItem21}>Beginner</li>
                      <li className={styles.listItem21}>Intermediate</li>
                      <li className={styles.listItem21}>Expert</li>
                </ul>
              </div>
                </div>
                <div className={`col-2 g-3 my-3`}>
                <button
                  type="button"
                  className={`btn btn-warning ${styles.logBut}`}
                >
                  Search
                </button>
                </div>
                </div>
              
              
            
          </div>
                        </div>
                        <div className={`col-12`}>1</div>
                    </div>
                </div>
            </div>
        </SSRProvider>
    )
}
export default Courses;