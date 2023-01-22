import React, { useState } from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../../styles/Home.module.css";
const Subscribe = ({count}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return ( 
        <section className={`row container mx-auto mb-5 ${styles.subscribe}`}>
        <div className={`col-sm-12 ${styles.subscribeTitle}`}>Subscribe For Get Update Every<br/>New Courses</div>
        <div className={`col-sm-12 ${styles.subscribeDes}`}>{count} Students daily learn with SKillMA. Subscribe for new courses.</div>
        <div className={`col-xl-6 col-sm-11 mx-auto text-center `}>
        <div className={`input-group ${styles.inputWraper}`}>
  <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2"/>
  <button className="btn btn-warning" type="button" id="button-addon2" onClick={handleShow}>Subscribe</button>
  <Modal show={show} className={`text-center mx-auto`} onHide={handleClose}>
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
      </Modal>
</div>

        </div>

        </section>
     );
}
 
export default Subscribe;