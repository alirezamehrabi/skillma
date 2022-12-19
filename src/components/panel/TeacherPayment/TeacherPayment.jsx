import Image from "next/image";
import Link from "next/link";
import { useState,createRef } from "react";
import { SSRProvider,Button } from "react-bootstrap";
import st from "../../../../styles/panel/Teacher.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";

const StuProfile = () => {
    const circle = <svg id="Group_22072" data-name="Group 22072" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <rect id="Rectangle_17051" data-name="Rectangle 17051" width="32" height="32" opacity="0"/>
    <path id="Path_83107" data-name="Path 83107" d="M18.931,5.949a8.015,8.015,0,0,0-3.925,1.027,8.068,8.068,0,1,0,0,14.085A8.066,8.066,0,1,0,18.931,5.951ZM12.9,19.361a5.671,5.671,0,1,1,0-10.685,8.022,8.022,0,0,0,0,10.685Zm2.1-1.268a5.632,5.632,0,0,1-.188-7.961q.092-.1.188-.188a5.629,5.629,0,0,1,.188,7.96C15.133,17.969,15.071,18.032,15.005,18.093Zm3.925,1.595a5.647,5.647,0,0,1-1.82-.327,8.022,8.022,0,0,0,0-10.685,5.612,5.612,0,0,1,1.82-.328,5.67,5.67,0,0,1,0,11.34Z" transform="translate(1 1.983)"/>
  </svg>
const bell = <svg id="Group_22073" data-name="Group 22073" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<rect id="Rectangle_17052" data-name="Rectangle 17052" width="32" height="32" opacity="0"/>
<path id="Path_83108" data-name="Path 83108" d="M25.745,9.267a4.879,4.879,0,0,0-.729-.668,6.02,6.02,0,0,0-1.475-4.764c-1.381-1.556-3.735-2.345-7-2.345H8.629A2.411,2.411,0,0,0,6.256,3.518l-3.3,20.9a1.953,1.953,0,0,0,1.605,2.248,2.046,2.046,0,0,0,.325.027H8.28l-.1.663a1.869,1.869,0,0,0,1.553,2.137,1.784,1.784,0,0,0,.292.023h4.12a2.243,2.243,0,0,0,2.231-1.872l.816-5.135.013-.069h.381c5.136,0,8.344-2.54,9.28-7.341A6.558,6.558,0,0,0,25.745,9.267ZM9.7,17.674,8.79,23.451l-.109.693h-3.1L8.752,4.038h7.792c2.467,0,4.227.516,5.087,1.483A3.778,3.778,0,0,1,22.4,9l-.023.143c-.016.1-.031.193-.056.313a7.436,7.436,0,0,1-2.555,4.676A8.5,8.5,0,0,1,14.4,15.642H12.076A2.4,2.4,0,0,0,9.7,17.674ZM24.362,14.61c-.7,3.6-2.857,5.281-6.78,5.281h-.616a2.242,2.242,0,0,0-2.231,1.876l-.828,5.189-3.092.012.609-3.865L12.2,18.2h2.189c.2,0,.377-.029.571-.037.457-.015.913-.033,1.341-.085.261-.033.5-.092.752-.139.348-.064.695-.128,1.021-.219.241-.068.468-.155.7-.236.305-.108.605-.223.889-.356.213-.1.417-.212.619-.327a8.718,8.718,0,0,0,.781-.5c.18-.131.359-.264.528-.408a8.43,8.43,0,0,0,.684-.661c.144-.153.292-.3.424-.468a8.968,8.968,0,0,0,.612-.883c.1-.155.205-.3.295-.463a10.614,10.614,0,0,0,.664-1.469c.011-.031.027-.056.037-.087.005-.015.013-.027.017-.041A5.48,5.48,0,0,1,24.362,14.61Z" transform="translate(0.976 0.497)"/>
</svg>


    return (
      <SSRProvider>
        
       <div className={`row ${st.container}`}>
        <div className={`col-12 ${st.paydetail}`}>
            <h5 className={`fw-bold mb-5`}>Choose your payout method below</h5>
            <form>
                <input type="radio" name="r" id="r1" className={`${st.rinput}`}/>
                <label htmlFor="r1" className={`${st.rsvg}`}>{circle}Credit/ Debit Card</label><br/>
                <input type="radio" name="r" id="r2" className={`${st.rinput}`}/>
                <label htmlFor="r2" className={`${st.rsvg}`}>{bell}Credit/ Debit Card</label>
            </form>
        <div className={`col-12 d-flex justify-content-end mt-4`}>
                <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                  Save
                </button>
              </div>
          </div>
       </div>
      </SSRProvider>
    );
  };
  export default StuProfile;
