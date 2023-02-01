import React from "react";
import { Formik } from "formik";
import yup from "yup";
import { getItem } from "../../../../src/core/services/storage/storage";

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}

const App =()=> {

    return (
      <div className="container">
        <Formik
          initialValues={{ file: null }}
          onSubmit={async (values) => {
            let formData = new FormData();

            const token = getItem("token");
            formData.append("File", values.file);

            fetch(
              "https://skillma-api.shinypi.net/Course/UploadFile",
              {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: "bearer " + token,
                  accept: "application/json"
                },
              }
            ).then(async(r)=>{
              const resD = await r.json();
              const resDt = resD.uploadMessage
              return resDt

            })
          }}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="file">File upload</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="form-control"
                  />
                  <Thumb file={values.file} />
                </div>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
            );
          }}
        />
      </div>
    );
  
}
export default App;
