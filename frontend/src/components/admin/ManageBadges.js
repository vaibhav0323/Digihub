import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import app_config from "../../config";
import { toast } from "react-hot-toast";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import { lightGreen } from "@mui/material/colors";

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
  const [selSkills, setSelSkills] = useState(new Set());

  const skillOptions = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "Material UI",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "Java",
    "MySQL",
    "EXpress",
    "Django",
    "C++",
    "C",
    "C#",
    "PHP",
    "Angular",
    "Flask",


  ];

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
          icon: "warning",
          title: "warning",
          text: "Badge Added warningfully!!",
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
        toast.warning("File Uploaded!!");
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
              <div className="card  ">
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

                <div className="card-body p-4 p-md-5 mngbdg">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 ">
                    Add Badges
                  </h3>
                  <form className="px-md-2 " onSubmit={badgeForm.handleSubmit}>
                    <div className="mb-4">
                      <TextField
                        label="Title"
                        type="text"
                        className="form-control"
                        id="title"
                        value={badgeForm.values.title}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                        color="warning"
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
                        color="warning"
                      />
                    </div>

                    <div className="mb-4">
                      <TextField
                        fullWidth
                        label="Description"
                        id="description"
                        multiline
                        rows={3}
                        className="form-control"
                        value={badgeForm.values.description}
                        onChange={badgeForm.handleChange}
                        variant="outlined"
                        color="warning"
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
                        color="warning"
                      />
                    </div>

                    <div>
                      <FormGroup>
                        <div className="d-flex align-item-center justify-content-between">
                          {skillOptions.map((skill) => (
                            <FormControlLabel
                              control={
                                <Checkbox checked={selSkills.has(skill)} onChange={(e, v) => {
                                  if(v){
                                    const temp = selSkills;
                                    temp.add(skill);
                                    setSelSkills(temp);
                                  }else{
                                    const temp = selSkills;
                                    temp.delete(skill);
                                    setSelSkills(temp);
                                  }
                                }} />
                              }
                              label={skill}
                            />
                          ))}
                        </div>
                      </FormGroup>
                    </div>

                    <div className="my-4">
                      <input type="file" onChange={uploadImage} />
                    </div>

                    <button
                      type="submit"
                      className="btn  btn-lg mb-1 addbdgbtn"
                      style={{
                        backgroundColor: "lightGreen",
                        fontWeight: "bold",
                        color: "black",
                      }}
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
