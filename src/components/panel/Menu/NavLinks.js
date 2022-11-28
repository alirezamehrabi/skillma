import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SSRProvider } from "react-bootstrap";
import men from "../../../../styles/panel/Menu.module.css"
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Menu = () => {
    const home = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M19.2,8.41h0L13.8,3.68a2.69,2.69,0,0,0-3.6,0L4.8,8.41a2.69,2.69,0,0,0-.9,2v7.87A2.7,2.7,0,0,0,6.6,21H17.4a2.7,2.7,0,0,0,2.7-2.7V10.44A2.71,2.71,0,0,0,19.2,8.41Zm-5.4,10.8H10.2v-4.5a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9Zm4.5-.9a.9.9,0,0,1-.9.9H15.6v-4.5A2.7,2.7,0,0,0,12.9,12H11.1a2.7,2.7,0,0,0-2.7,2.7v4.5H6.6a.9.9,0,0,1-.9-.9V10.44A.89.89,0,0,1,6,9.76L11.41,5a.91.91,0,0,1,1.18,0L18,9.76a.89.89,0,0,1,.31.68Z" /></g></svg>
    const courses = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M19,6.48H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.53l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8a3,3,0,0,0-2.95-3Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7A1,1,0,0,0,8,7.8l.54-1.64a1,1,0,0,1,1-.68h5.12a1,1,0,0,1,1,.68L16.1,7.8a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.48Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.48Z" /></g></g></svg>
    const short = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M20.38,2.93a11.94,11.94,0,0,0-2-.17A11.72,11.72,0,0,0,12,4.63,12,12,0,0,0,3.62,3a.91.91,0,0,0-.76.92v11a.92.92,0,0,0,.9.93l.17,0a9.94,9.94,0,0,1,7.54,1.75l.11.06h.1a.79.79,0,0,0,.64,0h.1l.11-.06a10,10,0,0,1,7.54-1.85.92.92,0,0,0,1.06-.74,1,1,0,0,0,0-.17v-11A.91.91,0,0,0,20.38,2.93ZM11.09,15.08A11.7,11.7,0,0,0,5.6,13.73H4.69V4.58H5.6a9.94,9.94,0,0,1,5.49,1.65Zm8.22-1.32H18.4a12,12,0,0,0-5.49,1.35V6.23A9.94,9.94,0,0,1,18.4,4.58h.91Zm1.07,3.8a11,11,0,0,0-2-.18A11.81,11.81,0,0,0,12,19.26a11.81,11.81,0,0,0-6.4-1.88,11,11,0,0,0-2,.18.9.9,0,0,0-.76,1h0a.92.92,0,0,0,1.07.72,9.94,9.94,0,0,1,7.54,1.75.93.93,0,0,0,1.06,0,9.94,9.94,0,0,1,7.54-1.75.92.92,0,0,0,1.07-.72.91.91,0,0,0-.75-1.05Z" /></g></svg>
    const task = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M21,7.47a.9.9,0,0,0-.26-.64L16.92,3a.92.92,0,0,0-1.28,0L13.1,5.56h0L3.26,15.39A.9.9,0,0,0,3,16v3.82a.9.9,0,0,0,.9.9H7.72a.91.91,0,0,0,.68-.26l9.78-9.84h0l2.56-2.5a1.21,1.21,0,0,0,.2-.3V7.51ZM7.35,19H4.8V16.4l8.94-8.93L16.28,10ZM17.55,8.74,15,6.2l1.27-1.27,2.54,2.54Z" /></g></svg>
    const report = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M12.42,6.6a.9.9,0,0,0-.9.9v9a.9.9,0,0,0,1.8,0v-9A.9.9,0,0,0,12.42,6.6ZM7.92,12a.9.9,0,0,0-.9.9v3.6a.9.9,0,0,0,1.8,0V12.9A.9.9,0,0,0,7.92,12Zm9-1.8a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,0,1.8,0V11.1A.9.9,0,0,0,16.92,10.2ZM18.72,3H6.12a2.7,2.7,0,0,0-2.7,2.7V18.3A2.7,2.7,0,0,0,6.12,21h12.6a2.7,2.7,0,0,0,2.7-2.7V5.7A2.7,2.7,0,0,0,18.72,3Zm.9,15.3a.9.9,0,0,1-.9.9H6.12a.9.9,0,0,1-.9-.9V5.7a.9.9,0,0,1,.9-.9h12.6a.9.9,0,0,1,.9.9Z" /></g></g></svg>
    const message = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M18.3,4.8H5.7A2.7,2.7,0,0,0,3,7.5v9a2.7,2.7,0,0,0,2.7,2.7H18.3A2.7,2.7,0,0,0,21,16.5v-9A2.7,2.7,0,0,0,18.3,4.8Zm-.37,1.8-5.29,5.29a.9.9,0,0,1-1.27,0h0L6.07,6.6Zm1.27,9.9a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V7.87l5.29,5.29a2.71,2.71,0,0,0,3.82,0L19.2,7.87Z" /></g></svg>
    const connection = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M12.26,12.18a4.1,4.1,0,1,0-5.41,0,6.55,6.55,0,0,0-3.85,6,.82.82,0,0,0,1.64,0,4.92,4.92,0,0,1,9.83,0,.82.82,0,0,0,1.64,0A6.55,6.55,0,0,0,12.26,12.18Zm-2.71-.59A2.46,2.46,0,1,1,12,9.13,2.46,2.46,0,0,1,9.55,11.59Zm8,.26A4.09,4.09,0,0,0,14.47,5a.82.82,0,1,0,0,1.63,2.46,2.46,0,0,1,2.46,2.46,2.43,2.43,0,0,1-1.23,2.12.84.84,0,0,0-.41.69.81.81,0,0,0,.37.71l.32.21.1.06a5.71,5.71,0,0,1,3.28,5.22.82.82,0,0,0,1.64,0A7.39,7.39,0,0,0,17.53,11.85Z" /></g></g></svg>
    const trend = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M20.93,7.12a.91.91,0,0,0-.49-.49,1,1,0,0,0-.34-.07H15.6a.9.9,0,0,0,0,1.8h2.33l-5,5-3-3a.9.9,0,0,0-1.27,0h0l-5.39,5.4a.89.89,0,0,0,0,1.27h0a.9.9,0,0,0,1.27,0h0L9.3,12.33l3,3a.91.91,0,0,0,1.28,0h0L19.2,9.63V12A.9.9,0,0,0,21,12V7.46A1,1,0,0,0,20.93,7.12Z" /></g></svg>
    const profile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M14.52,12.25A3.37,3.37,0,1,0,8.64,10a3.34,3.34,0,0,0,.9,2.24,5.32,5.32,0,0,0-2.91,4.13.9.9,0,0,0,1.79.19,3.58,3.58,0,0,1,7.11,0,.9.9,0,0,0,1,.8h.09a.9.9,0,0,0,.79-1A5.33,5.33,0,0,0,14.52,12.25ZM12,11.61A1.6,1.6,0,1,1,13.59,10h0A1.6,1.6,0,0,1,12,11.61Zm6.27-8.56H5.73A2.68,2.68,0,0,0,3.05,5.73V18.27A2.68,2.68,0,0,0,5.73,21H18.27A2.68,2.68,0,0,0,21,18.27V5.73A2.68,2.68,0,0,0,18.27,3.05Zm.89,15.22a.89.89,0,0,1-.89.89H5.73a.89.89,0,0,1-.89-.89V5.73a.89.89,0,0,1,.89-.89H18.27a.89.89,0,0,1,.89.89Z" /></g></svg>
    const calender = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M18.3,4.8H16.5V3.9a.9.9,0,0,0-1.8,0v.9H9.3V3.9a.9.9,0,0,0-1.8,0v.9H5.7A2.7,2.7,0,0,0,3,7.5V18.3A2.7,2.7,0,0,0,5.7,21H18.3A2.7,2.7,0,0,0,21,18.3V7.5A2.7,2.7,0,0,0,18.3,4.8Zm.9,13.5a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V12H19.2Zm0-8.1H4.8V7.5a.9.9,0,0,1,.9-.9H7.5v.9a.9.9,0,0,0,1.8,0V6.6h5.4v.9a.9.9,0,0,0,1.8,0V6.6h1.8a.9.9,0,0,1,.9.9Z" /></g></svg>
    const signout = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M4.84,12a.9.9,0,0,0,.89.9h6.8l-2.06,2a.91.91,0,0,0,0,1.27h0a.9.9,0,0,0,1.27,0h0l3.58-3.58a1,1,0,0,0,.19-.3.89.89,0,0,0,0-.68,1,1,0,0,0-.19-.3L11.74,7.78a.9.9,0,0,0-1.27,0,.91.91,0,0,0,0,1.28l2.06,2H5.73A.9.9,0,0,0,4.84,12ZM16.48,3.05h-9A2.68,2.68,0,0,0,4.84,5.73V8.42a.9.9,0,0,0,1.79,0V5.73a.89.89,0,0,1,.89-.89h9a.89.89,0,0,1,.89.89V18.27a.89.89,0,0,1-.89.89h-9a.89.89,0,0,1-.89-.89V15.58a.9.9,0,0,0-1.79,0v2.69A2.68,2.68,0,0,0,7.52,21h9a2.68,2.68,0,0,0,2.68-2.68V5.73A2.68,2.68,0,0,0,16.48,3.05Z" /></g></svg>
    const income = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g id="Group_16433" data-name="Group 16433" transform="translate(-1474 -585)"><rect id="Rectangle_1221" data-name="Rectangle 1221" width="32" height="32" transform="translate(1474 585)" fill="#fff" /><path id="money-stack" d="M20.346,15.739H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842Zm0,3.685H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842ZM5.606,6.527a.921.921,0,1,0,.921.921A.921.921,0,0,0,5.606,6.527ZM18.5,1H3.764A2.764,2.764,0,0,0,1,3.764v7.37A2.764,2.764,0,0,0,3.764,13.9H18.5a2.764,2.764,0,0,0,2.764-2.764V3.764A2.764,2.764,0,0,0,18.5,1Zm.921,10.133a.921.921,0,0,1-.921.921H3.764a.921.921,0,0,1-.921-.921V3.764a.921.921,0,0,1,.921-.921H18.5a.921.921,0,0,1,.921.921ZM11.133,4.685A2.764,2.764,0,1,0,13.9,7.449,2.764,2.764,0,0,0,11.133,4.685Zm0,3.685a.921.921,0,1,1,.921-.921A.921.921,0,0,1,11.133,8.37Zm5.527-1.842a.921.921,0,1,0,.921.921A.921.921,0,0,0,16.661,6.527Z" transform="translate(1478.866 589.866)" fill="#2d3ddf" /></g></svg>

    let router = useRouter();
    const currentRoute = router.pathname;


    return (
        <SSRProvider>
            <div className={`row ${men.container}`}>
            <div className={`col-sm-4 col-lg-12`}>
                <h6 className={`${men.menugroup}`}>Menu</h6>
                <Link passHref href="/panel/dashboard">
                    <h6 className={currentRoute === "/panel/dashboard" ? `${men.menuitem2}` : `${men.menuitem}`}>{home}<span className={`${men.menuitemtxt}`}>Dashboard</span></h6>
                </Link>
                <Link passHref href="/panel/courses">
                    <h6 className={currentRoute === "/panel/courses" ? `${men.menuitem2}` : `${men.menuitem}`}>{courses}<span className={`${men.menuitemtxt}`}>Courses</span></h6>
                </Link>
                <Link passHref href="/panel/short">
                    <h6 className={currentRoute === "/panel/short" ? `${men.menuitem2}` : `${men.menuitem}`}>{short}<span className={`${men.menuitemtxt}`}>Short Content</span></h6>
                </Link>
                <Link passHref href="/panel/task">
                    <h6 className={currentRoute === "/panel/task" ? `${men.menuitem2}` : `${men.menuitem}`}>{task}<span className={`${men.menuitemtxt}`}>Task</span></h6>
                </Link>
                <Link passHref href="/panel/report">
                    <h6 className={currentRoute === "/panel/report" ? `${men.menuitem2}` : `${men.menuitem}`}>{report}<span className={`${men.menuitemtxt}`}>Report</span></h6>
                </Link>
            </div><div className={`col-sm-4 col-lg-12`}>

                <h6 className={`${men.menugroup}`}>Social</h6>
                <Link passHref href="/panel/message">
                    <h6 className={currentRoute === "/panel/message" ? `${men.menuitem2}` : `${men.menuitem}`}>{message}<span className={`${men.menuitemtxt}`}>Message</span></h6>
                </Link>
                <Link passHref href="/panel/connection">
                    <h6 className={currentRoute === "/panel/connection" ? `${men.menuitem2}` : `${men.menuitem}`}>{connection}<span className={`${men.menuitemtxt}`}>Connection</span></h6>
                </Link>
                <Link passHref href="/panel/trend">
                    <h6 className={currentRoute === "/panel/trend" ? `${men.menuitem2}` : `${men.menuitem}`}>{trend}<span className={`${men.menuitemtxt}`}>Trend Title</span></h6>
                </Link>
                </div><div className={`col-sm-4 col-lg-12`}>

                <h6 className={`${men.menugroup}`}>General</h6>
                <Link passHref href="/panel/profile">
                    <h6 className={currentRoute === "/panel/profile" ? `${men.menuitem2}` : `${men.menuitem}`}>{profile}<span className={`${men.menuitemtxt}`}>Profile</span></h6>
                </Link>
                <Link passHref href="/panel/calender">
                    <h6 className={currentRoute === "/panel/calender" ? `${men.menuitem2}` : `${men.menuitem}`}>{calender}<span className={`${men.menuitemtxt}`}>Calender</span></h6>
                </Link>
                <Link passHref href="/panel/signout">
                    <h6 className={currentRoute === "/panel/signout" ? `${men.menuitem2}` : `${men.menuitem}`}>{signout}<span className={`${men.menuitemtxt}`}>Sign Out</span></h6>
                </Link>
            </div></div>
        </SSRProvider>
    )
}
export default Menu;