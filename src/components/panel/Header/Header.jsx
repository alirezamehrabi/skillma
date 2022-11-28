import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dash from "../../../../styles/panel/Dashboard.module.css"
import header from "../../../../styles/panel/Header.module.css"
import { SSRProvider  } from "react-bootstrap";

const Header = ()=>{
    const down = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.49,7.16a1.7,1.7,0,0,0-2.4,0L12,13.21,5.91,7.16A1.71,1.71,0,0,0,3.5,9.58h0l7.23,7.24a1.72,1.72,0,0,0,2.42,0h0l7.32-7.24a1.71,1.71,0,0,0,0-2.42Z"/></g></svg>
    const bell = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M17.44,13.09V10.21a5.43,5.43,0,0,0-4.53-5.36v-1a.91.91,0,0,0-1.82,0v1a5.43,5.43,0,0,0-4.53,5.36v2.88a2.74,2.74,0,0,0-1.82,2.56v1.81a.91.91,0,0,0,.91.91H8.5a3.63,3.63,0,0,0,7,0h2.85a.91.91,0,0,0,.91-.91V15.65A2.74,2.74,0,0,0,17.44,13.09ZM8.37,10.21a3.63,3.63,0,0,1,7.26,0v2.72H8.37ZM12,19.28a1.83,1.83,0,0,1-1.56-.91h3.12A1.83,1.83,0,0,1,12,19.28Zm5.44-2.72H6.56v-.91a.9.9,0,0,1,.9-.91h9.08a.9.9,0,0,1,.9.91Z"/></g></svg>
    const bellcount = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}.cls-2{fill:#0092e4;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path className="cls-2" d="M17.44,13.09V11.94a3.38,3.38,0,0,1-1.81-.15v1.14H8.37V10.21A3.63,3.63,0,0,1,12,6.58a3.45,3.45,0,0,1,1,.15,4.06,4.06,0,0,1,.93-1.61,5.57,5.57,0,0,0-1-.27v-1a.91.91,0,0,0-1.82,0v1a5.43,5.43,0,0,0-4.53,5.36v2.88a2.74,2.74,0,0,0-1.82,2.56v1.81a.91.91,0,0,0,.91.91H8.5a3.63,3.63,0,0,0,7,0h2.85a.91.91,0,0,0,.91-.91V15.65A2.74,2.74,0,0,0,17.44,13.09ZM12,19.28a1.83,1.83,0,0,1-1.56-.91h3.12A1.83,1.83,0,0,1,12,19.28Zm5.44-2.72H6.56v-.91a.9.9,0,0,1,.9-.91h9.08a.9.9,0,0,1,.9.91Z"/></g></svg>
    const message = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M18.3,4.8H5.7A2.7,2.7,0,0,0,3,7.5v9a2.7,2.7,0,0,0,2.7,2.7H18.3A2.7,2.7,0,0,0,21,16.5v-9A2.7,2.7,0,0,0,18.3,4.8Zm-.37,1.8-5.29,5.29a.9.9,0,0,1-1.27,0h0L6.07,6.6Zm1.27,9.9a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V7.87l5.29,5.29a2.71,2.71,0,0,0,3.82,0L19.2,7.87Z" /></g></svg>
    const messagecount= <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}.cls-2{fill:#0092e4;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path className="cls-2" d="M19.53,13a.87.87,0,0,0-.87.87v3.48a.87.87,0,0,1-.87.87H5.61a.87.87,0,0,1-.87-.87V9l5.12,5.13a2.6,2.6,0,0,0,3.7,0l.78-.76a.89.89,0,0,0-.21-1.22.87.87,0,0,0-1,0l-.81.79a.88.88,0,0,1-1.22,0L6,7.77h4A.87.87,0,1,0,10,6H5.61A2.61,2.61,0,0,0,3,8.64v8.7A2.61,2.61,0,0,0,5.61,20H17.79a2.61,2.61,0,0,0,2.61-2.61V13.86A.87.87,0,0,0,19.53,13Z"/></g></svg>
    return(
        <SSRProvider>
            <div className={`row justify-content-end ${header.itholder}`}>
                <div className={`col-auto ${header.bell}`}>{bellcount}<span className={`${header.dot}`}></span></div>
                <div className={`col-auto ${header.message}`}>{messagecount}<span className={`${header.dot}`}></span></div>
                <div className={`col-auto ${header.account}`}>
                    <Image src={require(`../../../assets/panel/dash/per.png`)} alt="" width="" height=""/>
                    <h6 className={`${header.pername}`}>Dani Beaumont</h6>
                    {down}
                </div>
            </div>
        </SSRProvider>
    )
}
export default Header;