import Link from "next/link";

const P = () => {
    return ( 
        <div className="col-3 mx-auto my-5">
            <h6 className=""><Link href="/">index</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/about">about</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/cart">cart</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/category">category(nead api to run)</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/detailcourse">course detail</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/forgetpass">forget password</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/help">help</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/helpcat">help category</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/helpdetail">help detail</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/helpsearch">help search</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/maincourse">main course</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/onlinecourse">online course</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/pdfproduct">pdf product</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/register">register</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/resetpass">reset password</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/search">search</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/sounddetail">sound detail</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/studentprofile">student profile</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/teacherprofile">teacher profile</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/textdetail">text detail</Link></h6>
            <hr className=""/>
            <h6 className=""><Link href="/videodetail">video detail</Link></h6>
            <hr className=""/>
        </div>
     );
}
 
export default P;