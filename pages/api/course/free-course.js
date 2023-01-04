import axios from "axios";
import { setItem } from "../../../src/core/services/storage/storage";
import {useEffect,useState} from "react"

const FreeCourse = async (obj) => {
    const [datac, setDatac] = useState()
    useEffect(()=>{
      const fetchData = async () => {
        const result = await fetch(
          `${process.env.webURL}/Course/GetFreeCourses`
        );
        const json = await result.json();
        setDatac(json)
      }
      fetchData().catch(console.error);
    })
    return datac
};
export { FreeCourse };
