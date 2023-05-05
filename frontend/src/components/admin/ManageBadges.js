import React from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";
import app_config from "../../config";
import { toast } from "react-hot-toast";

const {apiUrl} = app_config;

const BadgeSchema = Yup.object().shape({
  title: Yup.string()
  .required("Required"),
  course: Yup.string()
  .required("Required"),
  description: Yup.string()
  .required("Required"),
  createdAt: Yup.string()
  .required("Required"),
  icon: Yup.string()
  .required("Required"),
});

const uploadImage = async (e) => {
  const file = e.target.files[0];

  const fd = new FormData();
  fd.append("myfile", file);
  fetch(apiUrl + "/util/uploadfile", {
    method: "POST",
    
    body: fd,
  }).then((res) => {
    if (res.status === 200) {
      console.log("file uploaded");
      toast.success("File Uploaded!!");
    }
  });
}

const ManageBadges = () => {
  const badgeForm = useFormik({
    initialValues: {
      title: "",
      course: "",
      description: "",
      createdAt: "",
      icon: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      const response = await fetch("http://localhost:5000/badge/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
        validationSchema: BadgeSchema,
      });

      console.log(response.status);
    }
  });
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                }}
                alt="Sample photo"
              />

              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Manage Badges
                </h3>
                <form className="px-md-2"
                onSubmit={badgeForm.handleSubmit}
                >
                  <div className="mb-4">
                    <MDBInput
                      label="Title"
                      type="text"
                      className="form-control"
                      id="title"
                      value={badgeForm.values.title}
                      onChange={badgeForm.handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <MDBInput
                      label="Course Name"
                      type="text"
                      className="form-control"
                      id="course"
                      value={badgeForm.values.course}
                      onChange={badgeForm.handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <MDBTextArea
                      label="Description"
                      id="description"
                      rows={2}
                        value={badgeForm.values.description}
                      onChange={badgeForm.handleChange}
                    />
                  </div>

                  <div className="mb-4 createdAtpicker">
                    <MDBInput
                      label="Created At"
                      type="date"
                      className="form-control"
                      id="createdAt"
                      value={badgeForm.values.createdAt}
                      onChange={badgeForm.handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <MDBInput
                      label="Icon"
                      type="text"
                      className="form-control"
                      id="icon"
                      value={badgeForm.values.icon}
                      onChange={badgeForm.handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    ADD BADGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBadges;
