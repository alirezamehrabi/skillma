import axios from "axios";
import { setItem } from "../../src/core/services/storage/storage";
import { toast } from "react-toastify";

const ContactUs = async (obj) => {
  try {
    const result = await axios.post(
      `${process.env.webURL}/ContactUs/InsertContactUs`,
      obj
    );
    const isSucces = result.data.isSucces;
    if (result.data.isSucces === true) {
      return (
        result.data,
        toast.success("Message Send!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
    }
  } catch (error) {
    return null;
  }
};
export { ContactUs };
