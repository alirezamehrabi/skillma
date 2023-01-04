import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cat from "../../styles/Category.module.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";

export async function getStaticProps() {
  const res = await fetch(`https://skillma-api.shinypi.net/Category/GetMainCategories`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

const Category = (props) => {
  const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);
  const [v, setV] = useState([]);
  function handleChk(e) {
    setTotalSelectedCheckboxes(
      document.querySelectorAll("input[type=checkbox]:checked").length
      );
      
      setV((prevState) => [...prevState]);

      if(e.target.checked){
        
        
        setV((prevState) => [...prevState,e.target.value]);
      }else{
        // v= v.filter((item) => item !== e.target.value)
        // setV(v.filter((item) => item !== e.target.value))
        setV((prevState) => [
          prevState.filter((item) => item !== e.target.value) 
        ]);
      }
  console.log(v)
    }


 const a =()=>{
  const check = document.querySelectorAll("input[type=checkbox]:checked")
  const c = [check].map((item)=> {return item.value})
 }
    
    
    // console.log(val)
  useEffect(() => {
    console.log(totalSelectedCheckboxes);
  }, [totalSelectedCheckboxes]);
  const tost = () => {
    toast.error("Select at least 4 category", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const cate = props.posts.data;
  console.log(cate.data);

  const { loading } = useContext(DataContext);
  return !loading ? (
    <div className="container text-center mx-auto">
      <div className="col-12">
        <h3 className={`${cat.title}`}>Select at least 4 category</h3>
      </div>
      <div className="col-12">
        <div className={`row g-1`}>
          {cate.map((item) => {
            return (
              <div className="col-xl-3 col-md-4 col-sm-6" key={item.id}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${cat.input}`}
                    type="checkbox"
                    value={item.categoryName}
                    id={item.id}
                    onChange={handleChk}
                  />
                  <label className="form-check-label" htmlFor={item.id}>
                    <figure className={`${cat.catImg}`}>
                      <Image
                        // src={require(`../../src/assets/category/${item.pictureName}`)}
                        src={require(`../../src/assets/category/1.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                      <h5 className={`${cat.catName}`}>{item.categoryName}</h5>
                    </figure>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12">
        {/* <Button variant="warning" className={`${cat.btn}`}>Save & Continue</Button> */}
        {totalSelectedCheckboxes < 4 ? (
          <>
            <Button variant="secondary" onClick={tost} className={`${cat.btn}`}>
              Save & Continue
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </>
        ) : (
          <Link href={`#`}>
            <Button variant="warning" className={`${cat.btn}`} onClick={a}>
              Save & Continue
            </Button>
          </Link>
        )}
      </div>
    </div>
  ):(<Loader />)
};

export default Category;
