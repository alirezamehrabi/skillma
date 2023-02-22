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
    const courses = <svg id="Group_16529" data-name="Group 16529" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect id="Rectangle_1231" data-name="Rectangle 1231" width="24" height="24" fill="none"/>
    <path id="video" d="M18.519,7.326a.656.656,0,0,0-.846,0L14.687,9.331C14.637,7.471,13.516,6,12.15,6H4.537C3.136,6,2,7.548,2,9.458v6.916c0,1.91,1.136,3.458,2.537,3.458H12.15c1.366,0,2.487-1.471,2.537-3.331L17.7,18.553a.674.674,0,0,0,.372.127.689.689,0,0,0,.448-.173,1.293,1.293,0,0,0,.4-.98V8.305A1.293,1.293,0,0,0,18.519,7.326ZM13,16.374c0,.637-.379,1.153-.846,1.153H4.537c-.467,0-.846-.516-.846-1.153V9.458c0-.637.379-1.153.846-1.153H12.15c.467,0,.846.516.846,1.153Zm4.229-.715L14.687,13.93V11.9l2.537-1.729Z" transform="translate(1.735 -1.014)" fill="#7a7d7c"/>
  </svg>
  const trans = <svg id="Group_21749" data-name="Group 21749" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect id="Rectangle_16966" data-name="Rectangle 16966" width="24" height="24" transform="translate(0 0)" fill="#7a7d7c" opacity="0"/>
  <path id="Path_83086" data-name="Path 83086" d="M7.5,14.25h2.7a.9.9,0,1,0,0-1.8H7.5a.9.9,0,1,0,0,1.8Zm10.8-9H5.7A2.7,2.7,0,0,0,3,7.95v8.1a2.7,2.7,0,0,0,2.7,2.7H18.3a2.7,2.7,0,0,0,2.7-2.7V7.95A2.7,2.7,0,0,0,18.3,5.25Zm.9,10.8a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9v-5.4H19.2Zm0-7.2H4.8v-.9a.9.9,0,0,1,.9-.9H18.3a.9.9,0,0,1,.9.9Z" fill="#7a7d7c"/>
</svg>
const task = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M21,7.47a.9.9,0,0,0-.26-.64L16.92,3a.92.92,0,0,0-1.28,0L13.1,5.56h0L3.26,15.39A.9.9,0,0,0,3,16v3.82a.9.9,0,0,0,.9.9H7.72a.91.91,0,0,0,.68-.26l9.78-9.84h0l2.56-2.5a1.21,1.21,0,0,0,.2-.3V7.51ZM7.35,19H4.8V16.4l8.94-8.93L16.28,10ZM17.55,8.74,15,6.2l1.27-1.27,2.54,2.54Z" /></g></svg>
    const cart = <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <clipPath id="clipPath">
        <rect id="Rectangle_2205" data-name="Rectangle 2205" width="24" height="24" fill="#7a7d7c"/>
      </clipPath>
    </defs>
    <g id="Group_16665" data-name="Group 16665" transform="translate(-1181 -33)">
      <g id="Group_16663" data-name="Group 16663" transform="translate(1181 33)">
        <g id="Group_16662" data-name="Group 16662" clipPath="url(#clipPath)">
          <g id="Group_16661" data-name="Group 16661">
            <g id="Group_16664" data-name="Group 16664">
              <g id="Group_16659" data-name="Group 16659" opacity="0">
                <g id="Group_16658" data-name="Group 16658">
                  <g id="Group_16657" data-name="Group 16657" clipPath="url(#clipPath)">
                    <rect id="Rectangle_2202" data-name="Rectangle 2202" width="24" height="24" fill="#7a7d7c"/>
                  </g>
                </g>
              </g>
              <path id="Path_9239" data-name="Path 9239" d="M18.3,7.5H15.6V6.6a3.6,3.6,0,0,0-7.2,0v.9H5.7a.9.9,0,0,0-.9.9v9.9A2.7,2.7,0,0,0,7.5,21h9a2.7,2.7,0,0,0,2.7-2.7V8.4a.9.9,0,0,0-.9-.9m-8.1-.9a1.8,1.8,0,0,1,3.6,0v.9H10.2Zm7.2,11.7a.9.9,0,0,1-.9.9h-9a.9.9,0,0,1-.9-.9v-9H8.4v.9a.9.9,0,1,0,1.8,0V9.3h3.6v.9a.9.9,0,1,0,1.8,0V9.3h1.8Z" transform="translate(0 0)" fill="#7a7d7c"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  const message = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M18.3,4.8H5.7A2.7,2.7,0,0,0,3,7.5v9a2.7,2.7,0,0,0,2.7,2.7H18.3A2.7,2.7,0,0,0,21,16.5v-9A2.7,2.7,0,0,0,18.3,4.8Zm-.37,1.8-5.29,5.29a.9.9,0,0,1-1.27,0h0L6.07,6.6Zm1.27,9.9a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V7.87l5.29,5.29a2.71,2.71,0,0,0,3.82,0L19.2,7.87Z" /></g></svg>
    const connection = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M12.26,12.18a4.1,4.1,0,1,0-5.41,0,6.55,6.55,0,0,0-3.85,6,.82.82,0,0,0,1.64,0,4.92,4.92,0,0,1,9.83,0,.82.82,0,0,0,1.64,0A6.55,6.55,0,0,0,12.26,12.18Zm-2.71-.59A2.46,2.46,0,1,1,12,9.13,2.46,2.46,0,0,1,9.55,11.59Zm8,.26A4.09,4.09,0,0,0,14.47,5a.82.82,0,1,0,0,1.63,2.46,2.46,0,0,1,2.46,2.46,2.43,2.43,0,0,1-1.23,2.12.84.84,0,0,0-.41.69.81.81,0,0,0,.37.71l.32.21.1.06a5.71,5.71,0,0,1,3.28,5.22.82.82,0,0,0,1.64,0A7.39,7.39,0,0,0,17.53,11.85Z" /></g></g></svg>
    const help = <svg id="Group_21748" data-name="Group 21748" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect id="Rectangle_16965" data-name="Rectangle 16965" width="24" height="24" transform="translate(0 0)" fill="#7a7d7c" opacity="0"/>
    <path id="Path_83085" data-name="Path 83085" d="M12,3A10,10,0,0,0,2,13v7a1,1,0,0,0,1,1H6a3,3,0,0,0,3-3V16a3,3,0,0,0-3-3H4a8,8,0,0,1,16,0H18a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h3a1,1,0,0,0,1-1V13A10,10,0,0,0,12,3ZM6,15a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H4V15Zm14,4H18a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1h2Z" fill="#7a7d7c"/>
  </svg>
  const profile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M14.52,12.25A3.37,3.37,0,1,0,8.64,10a3.34,3.34,0,0,0,.9,2.24,5.32,5.32,0,0,0-2.91,4.13.9.9,0,0,0,1.79.19,3.58,3.58,0,0,1,7.11,0,.9.9,0,0,0,1,.8h.09a.9.9,0,0,0,.79-1A5.33,5.33,0,0,0,14.52,12.25ZM12,11.61A1.6,1.6,0,1,1,13.59,10h0A1.6,1.6,0,0,1,12,11.61Zm6.27-8.56H5.73A2.68,2.68,0,0,0,3.05,5.73V18.27A2.68,2.68,0,0,0,5.73,21H18.27A2.68,2.68,0,0,0,21,18.27V5.73A2.68,2.68,0,0,0,18.27,3.05Zm.89,15.22a.89.89,0,0,1-.89.89H5.73a.89.89,0,0,1-.89-.89V5.73a.89.89,0,0,1,.89-.89H18.27a.89.89,0,0,1,.89.89Z" /></g></svg>
    const calender = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M18.3,4.8H16.5V3.9a.9.9,0,0,0-1.8,0v.9H9.3V3.9a.9.9,0,0,0-1.8,0v.9H5.7A2.7,2.7,0,0,0,3,7.5V18.3A2.7,2.7,0,0,0,5.7,21H18.3A2.7,2.7,0,0,0,21,18.3V7.5A2.7,2.7,0,0,0,18.3,4.8Zm.9,13.5a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V12H19.2Zm0-8.1H4.8V7.5a.9.9,0,0,1,.9-.9H7.5v.9a.9.9,0,0,0,1.8,0V6.6h5.4v.9a.9.9,0,0,0,1.8,0V6.6h1.8a.9.9,0,0,1,.9.9Z" /></g></svg>
    const signout = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M4.84,12a.9.9,0,0,0,.89.9h6.8l-2.06,2a.91.91,0,0,0,0,1.27h0a.9.9,0,0,0,1.27,0h0l3.58-3.58a1,1,0,0,0,.19-.3.89.89,0,0,0,0-.68,1,1,0,0,0-.19-.3L11.74,7.78a.9.9,0,0,0-1.27,0,.91.91,0,0,0,0,1.28l2.06,2H5.73A.9.9,0,0,0,4.84,12ZM16.48,3.05h-9A2.68,2.68,0,0,0,4.84,5.73V8.42a.9.9,0,0,0,1.79,0V5.73a.89.89,0,0,1,.89-.89h9a.89.89,0,0,1,.89.89V18.27a.89.89,0,0,1-.89.89h-9a.89.89,0,0,1-.89-.89V15.58a.9.9,0,0,0-1.79,0v2.69A2.68,2.68,0,0,0,7.52,21h9a2.68,2.68,0,0,0,2.68-2.68V5.73A2.68,2.68,0,0,0,16.48,3.05Z" /></g></svg>

    let router = useRouter();
    const currentRoute = router.pathname;


    return (
        <SSRProvider>
            <div className={`row ${men.container}`}>
            <div className={`col-sm-4 col-lg-12`}>
                <h6 className={`${men.menugroup}`}>Menu</h6>
                <Link passHref href="/panel/student">
                    <h6 className={currentRoute === "/panel/student" ? `${men.menuitem2}` : `${men.menuitem}`}>{home}<span className={`${men.menuitemtxt}`}>Dashboard</span></h6>
                </Link>
                <Link passHref href="/panel/mycourse">
                    <h6 className={currentRoute === "/panel/mycourse" ? `${men.menuitem2}` : `${men.menuitem}`}>{courses}<span className={`${men.menuitemtxt}`}>My Courses</span></h6>
                </Link>
                <Link passHref href="/panel/task">
                    <h6 className={currentRoute === "/panel/task" ? `${men.menuitem2}` : `${men.menuitem}`}>{task}<span className={`${men.menuitemtxt}`}>Task</span></h6>
                </Link>
                <Link passHref href="/panel/cart">
                    <h6 className={currentRoute === "/panel/cart" ? `${men.menuitem2}` : `${men.menuitem}`}>{cart}<span className={`${men.menuitemtxt}`}>Cart</span></h6>
                </Link>
                <Link passHref href="/panel/transaction">
                    <h6 className={currentRoute === "/panel/transaction" ? `${men.menuitem2}` : `${men.menuitem}`}>{trans}<span className={`${men.menuitemtxt}`}>Transaction</span></h6>
                </Link>
            </div><div className={`col-sm-4 col-lg-12`}>

                <h6 className={`${men.menugroup}`}>Social</h6>
                <Link passHref href="/panel/message">
                    <h6 className={currentRoute === "/panel/message" ? `${men.menuitem2}` : `${men.menuitem}`}>{message}<span className={`${men.menuitemtxt}`}>Message</span></h6>
                </Link>
                <Link passHref href="/panel/connection">
                    <h6 className={currentRoute === "/panel/connection" ? `${men.menuitem2}` : `${men.menuitem}`}>{connection}<span className={`${men.menuitemtxt}`}>Connection</span></h6>
                </Link>
                </div><div className={`col-sm-4 col-lg-12`}>

                <h6 className={`${men.menugroup}`}>General</h6>
                <Link passHref href="/panel/profile">
                    <h6 className={currentRoute === "/panel/profile" ? `${men.menuitem2}` : `${men.menuitem}`}>{profile}<span className={`${men.menuitemtxt}`}>Profile</span></h6>
                </Link>
                <Link passHref href="/panel/help">
                    <h6 className={currentRoute === "/panel/help" ? `${men.menuitem2}` : `${men.menuitem}`}>{help}<span className={`${men.menuitemtxt}`}>Help</span></h6>
                </Link>
                <Link passHref href="/panel/signout">
                    <h6 className={currentRoute === "/panel/signout" ? `${men.menuitem2}` : `${men.menuitem}`}>{signout}<span className={`${men.menuitemtxt}`}>Sign Out</span></h6>
                </Link>
            </div></div>
        </SSRProvider>
    )
}
export default Menu;