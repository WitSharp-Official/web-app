import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
// import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";
import { useForm } from "react-hook-form";
import { EditPic } from "./EditPic";
import { GetInputField } from "./GetInputField";

function PersonaInformation(props) {
  // Fields
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(
    state => state.auth,
    shallowEqual
  );
  useEffect(() => {
    if (user.pic) {
      setPic(user.pic);
    }
  }, [user]);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    const updatedUser = Object.assign(user, values);
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setSubmitting(false);
      // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    pic: user.pic,
    firstname: user.firstname,
    lastname: user.lastname,
    companyName: user.companyName,
    phone: user.phone,
    email: user.email,
    website: user.website
  };
  const Schema = Yup.object().shape({
    pic: Yup.string(),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    companyName: Yup.string(),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    website: Yup.string()
  });
  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    }
  });
  const getUserPic = () => {
    if (!pic) {
      return "none";
    }

    return `url(${pic})`;
  };
  const removePic = () => {
    setPic("");
  };

  const onSubmit = data => {
    // const { email, phoneNumber } = data;
    console.log(data);
    // dispatch(authActions.loginWithEmail({ email, password }));
  };

  const methods = useForm();
  const { handleSubmit, register } = methods;
  const inputFields = [
    {
      fieldName: "displayName",
      label: "Display Name",
      placeholder: "Full Name",
      errorMsg: "Display Name is required",
      methods: methods
    },
    {
      fieldName: "email",
      label: "Your Email Address",
      placeholder: "Email",
      errorMsg: "Email Name is required",
      methods: methods
    }
  ];

  return (
    <form
      className="card card-custom card-stretch"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Personal Information
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Update your personal informaiton
          </span>
        </div>
        <div className="card-toolbar">
          <button
            type="submit"
            className="btn btn-success mr-2"
            disabled={loading}
          >
            Save Changes
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
          <Link
            to="/user-profile/profile-overview"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        {/* begin::Body */}
        <div className="card-body">
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">Info</h5>
            </div>
          </div>
          <EditPic register={register} photoURL={user.photoURL} />
          {inputFields.map(field => (
            <GetInputField
              key={field.fieldName}
              name={field.fieldName}
              error={field.error}
              label={field.label}
              placeholder={field.placeholder}
              errorMsg={field.errorMsg}
              registerOptions={field.registerOptions}
              methods={field.methods}
            />
          ))}
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
            </div>
          </div>
        </div>
        {/* end::Body */}
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(PersonaInformation);
