import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import app_config from "../../config";
import { toast } from "react-hot-toast";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";

const { apiUrl } = app_config;

const BadgeSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  course: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  createdAt: Yup.string().required("Required"),
  icon: Yup.string().required("Required"),
});



const ManageBadges = () => {

  const [selImage, setSelImage] = useState(null);

  const badgeForm = useFormik({
    initialValues: {
      title: "",
      course: "",
      description: "",
      createdAt: "",
      icon: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.icon = selImage.name;
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
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Badge Added Successfully!!",
        });
      }
    },
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setSelImage(file);
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
  };

  return (
    <section
      className="h-100 h-custom"
      style={{
        backgroundImage: "url('/images/pexel1.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className=""
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-6 ">
              <div
                className="card rounded-3 "
                style={{
                  boxShadow:
                    "9px 8px 8px -4px lightblue,-9px -8px 8px -4px lightblue",
                }}
              >
                <img
                  src="/images/bn.jpg"
                  className="w-100"
                  height={160}
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                  }}
                  alt="Sample photo"
                />

                <div className="card-body p-4 p-md-5 ">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Add Badges
                  </h3>
                  <form
                    className="px-md-2 bg-light"
                    onSubmit={badgeForm.handleSubmit}
                  >
                    <div className="mb-4">
                      <TextField
                        label="Title"
                        type="text"
                        className="form-control"
                        id="title"
                        value={badgeForm.values.title}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                      />
                    </div>
                    <div className="mb-4">
                      <TextField
                        label="Course Name"
                        type="text"
                        className="form-control"
                        id="course"
                        value={badgeForm.values.course}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                      />
                    </div>

                    <div className="mb-4">
                      <TextField
                        fullWidth
                        label="Description"
                        id="description"
                        multiline
                        rows={3}
                        value={badgeForm.values.description}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                      />
                    </div>

                    <div className="mb-4 createdAtpicker">
                      <TextField
                        type="date"
                        className="form-control"
                        id="createdAt"
                        value={badgeForm.values.createdAt}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                      />
                    </div>

                    <input type="file" onChange={uploadImage} />

                    <button
                      type="submit"
                      className="btn btn-success btn-lg mb-1"
                    >
                      ADD BADGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBadges;
