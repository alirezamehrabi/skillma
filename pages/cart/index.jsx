import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import cart from "../../styles/Cart.module.css";
import detail from "../../styles/DetailCourse.module.css";
import about from "../../styles/About.module.css";
import online from "../../styles/Onlinecourse.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";

const Cart = () => {
  const del = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cart.delsvg}
    >
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z" />
      </g>
    </svg>
  );

  return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Cart</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto ${cart.cart}`}>
            <div className={`col-12 ${cart.cartTitle}`}>Cart</div>
            <div className={`col-12`}>
              <div className={`row`}>
                <div className={`col-md-6`}>
                  <div className={`col-sm-11 mx-auto ${cart.items}`}>
                    <div className={`mb-3 ${cart.item}`}>
                      <div className={`row`}>
                        <div className={`col-5 ${cart.imgHolder}`}>
                          <Image
                            src={require(`./../../src/assets/cart/img.png`)}
                            alt=""
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className={`col-6`}>
                          <h6 className={`${cart.name}`}>
                            download of Adobe XD training book in PDF format
                          </h6>
                        </div>
                        <div className={`col-1 position-relative`}>
                          <div className={`col-12 ${cart.price}`}>18$</div>
                          <div className={`col-12 ${cart.del}`}>{del}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`mb-3 ${cart.item}`}>
                      <div className={`row`}>
                        <div className={`col-5 ${cart.imgHolder}`}>
                          <Image
                            src={require(`./../../src/assets/cart/img.png`)}
                            alt=""
                            width="300"
                            height="300"
                          />
                        </div>
                        <div className={`col-6`}>
                          <h6 className={`${cart.name}`}>
                            download of Adobe XD training book in PDF format
                          </h6>
                        </div>
                        <div className={`col-1 position-relative`}>
                          <div className={`col-12 ${cart.price}`}>18$</div>
                          <div className={`col-12 ${cart.del}`}>{del}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`mb-3 ${cart.item}`}>
                      <div className={`row`}>
                        <div className={`col-5 ${cart.imgHolder}`}>
                          <Image
                            src={require(`./../../src/assets/cart/img.png`)}
                            alt=""
                            width="400"
                            height="400"
                          />
                        </div>
                        <div className={`col-6`}>
                          <h6 className={`${cart.name}`}>
                            download of Adobe XD training book in PDF format
                          </h6>
                        </div>
                        <div className={`col-1 position-relative`}>
                          <div className={`col-12 ${cart.price}`}>18$</div>
                          <div className={`col-12 ${cart.del}`}>{del}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-6`}>
                  <div className={`col-sm-11 mx-auto ${cart.count}`}>
                    <h6 className={``}>Have a discount code?</h6>
                    <div
                      className={`col-12 position-relative ${cart.discount}`}
                    >
                      <input
                        type="text"
                        name="r"
                        placeholder="Discount Code"
                        className={`${cart.input}`}
                      />
                      <button type="button" name="r" className={`${cart.btn}`}>
                        Apply
                      </button>
                      <br />
                      <span className={`${cart.left}`}>Subtotal:</span>
                      <span className={`${cart.right}`}>18$</span>
                      <br />
                      <span className={`${cart.left}`}>Discount:</span>
                      <span className={`${cart.right}`}>8$</span>
                      <br />
                      <span className={`fw-bold ${cart.left}`}>Total:</span>
                      <span className={`${cart.right}`}>10$</span>
                    </div>
                    <button type="button" className={`${cart.paybtn}`}>
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`row container mx-auto ${cart.other}`}>
            <div className={`col-12 ${cart.otherTitle}`}>Other also Bought</div>
            <div className={`col-12 mb-5`}>
              <div className={`row`}>
                <div className={`col-sm-4`}>
                  <div className={`col-11 ${cart.otheritem}`}>
                    <div className={`col-12 ${cart.otherimg}`}>
                      <Image
                        src={require(`./../../src/assets/cart/img.png`)}
                        alt=""
                        width=""
                        height=""
                      />
                    </div>
                    <div className={`col-12 text-justify ${cart.otherdes}`}>
                      download of Adobe XD training book in PDF format
                    </div>
                    <div className={`col-12 d-inline-block`}>
                      <button type="button" className={`${cart.otherbtn}`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`col-sm-4`}>
                  <div className={`col-11 ${cart.otheritem}`}>
                    <div className={`col-12 ${cart.otherimg}`}>
                      <Image
                        src={require(`./../../src/assets/cart/img.png`)}
                        alt=""
                        width=""
                        height=""
                      />
                    </div>
                    <div className={`col-12 text-justify ${cart.otherdes}`}>
                      download of Adobe XD training book in PDF format
                    </div>
                    <div className={`col-12 d-inline-block`}>
                      <button type="button" className={`${cart.otherbtn}`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`col-sm-4`}>
                  <div className={`col-11 ${cart.otheritem}`}>
                    <div className={`col-12 ${cart.otherimg}`}>
                      <Image
                        src={require(`./../../src/assets/cart/img.png`)}
                        alt=""
                        width=""
                        height=""
                      />
                    </div>
                    <div className={`col-12 text-justify ${cart.otherdes}`}>
                      download of Adobe XD training book in PDF format
                    </div>
                    <div className={`col-12 d-inline-block`}>
                      <button type="button" className={`${cart.otherbtn}`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  );
};

export default Cart;
