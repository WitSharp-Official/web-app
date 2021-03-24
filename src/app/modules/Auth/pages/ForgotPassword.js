import React from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { injectIntl } from "react-intl";
import { authActions } from "../../../store/actions/authActions";
import { useForm } from "react-hook-form";

function ForgotPassword(props) {
  const { register, handleSubmit, errors } = useForm();
  const { loading, error, user } = useSelector(
    state => state.auth,
    shallowEqual
  );
  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email } = data;
    dispatch(authActions.forgotPassword({ email }));
  };

  return (
    <>
      <div className="login-form login-forgot" style={{ display: "block" }}>
        <div className="text-center mb-10 mb-lg-20">
          <h3 className="font-size-h1">Forgotten Password ?</h3>
          <div className="text-muted font-weight-bold">
            Enter your email to reset your password
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        >
          {error && (
            <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
              <div className="alert-text font-weight-bold">{error}</div>
            </div>
          )}
          <div className="form-group fv-plugins-icon-container">
            <input
              placeholder="Email"
              type="email"
              className={`form-control form-control-solid h-auto py-5 px-6 ${errors.email &&
                "is-invalid"}`}
              name="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Email should be at least 3 character long*
                </div>
              </div>
            )}
          </div>
          <div className="form-group d-flex flex-wrap flex-center">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
            >
              <span>Submit</span>
              {loading && <span className="ml-3 spinner spinner-white"></span>}
            </button>

            <Link to="/auth/login">
              <button
                type="button"
                className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default injectIntl(ForgotPassword);
