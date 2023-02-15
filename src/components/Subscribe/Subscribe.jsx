import React, { useState } from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../../styles/Home.module.css";
import { subscribe } from '../../../pages/api/subscribe';
const Subscribee = ({count}) => {
    const [show, setShow] = useState(false);
const[sub,setSub]= useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[sec,setSec]= useState();
  const handlesubmit = (e) => {
    e.preventDefault()
    subscribe(sub).then((r)=>setSec(r.isSucces))
    
  }
    return ( 
        <section className={`row container mx-auto mb-5 p-4 ${styles.subscribe}`}>
        <div className={`col-sm-12 ${styles.subscribeTitle}`}>Subscribe For Get Update Every<br/>New Courses</div>
        <div className={`col-sm-12 ${styles.subscribeDes}`}>{count} Students daily learn with SKillMA. Subscribe for new courses.</div>
        <div className={`col-xl-6 col-sm-11 mx-auto text-center `}>
        <div className={` ${styles.inputWraper}`}>
          <form onSubmit={handlesubmit}>
  <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" name="sub" value={sub} onChange={(e)=>setSub(e.target.value)}/>
  <button className="btn btn-warning" type="submit" onClick={handleShow}>Subscribe</button>
  </form>
  {sec === true ? <Modal show={show} className={`text-center mx-auto`} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <figure>
                <Image src={require(`../../../src/assets/home/tik.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
            </figure>
            Your Email successfully added to List!<br/> Please Check Your Email</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className={`${styles.subBTN}`} onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>: <Modal show={show} className={`text-center mx-auto`} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            Some thing went wrong!</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className={`${styles.subBTN}`} onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>}
</div>

        </div>

        </section>
     );
}
 
export default Subscribee;