import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { authActions } from "../../../store/actions/authActions";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers/AssetsHelpers";
import { useForm } from "react-hook-form";

function Login(props) {
  const { intl } = props;
  const { loading, error, user } = useSelector(
    state => state.auth,
    shallowEqual
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    console.log(email, "  ", password);
    dispatch(authActions.loginWithEmail({ email, password }));
  };

  const dispatch = useDispatch();

  const loginWithGoogle = () => {
    dispatch(authActions.loginWithGoogle());
  };
  const loginWithFacebook = () => {
    dispatch(authActions.loginWithFacebook());
  };

  return (
    <div className="login-form login-signin card p-5" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Login with your preferred method
        </p>
      </div>
      {/* end::Head */}
      <div className="row center mt-5 mb-3">
        <div className="login-icon col shadow" onClick={loginWithGoogle}>
          <span className="svg-icon svg-icon-lg svg-icon-white">
            <SVG
              className="svg"
              src={toAbsoluteUrl("/media/svg/Logos/google-icon.svg")}
            />
          </span>
        </div>
        <div className="login-icon col shadow" onClick={loginWithFacebook}>
          <span className="svg-icon svg-icon-lg svg-icon-white">
            <SVG
              className="svg"
              src={toAbsoluteUrl("/media/svg/Logos/facebook-2.svg")}
            />
          </span>
        </div>
      </div>
      {error && (
        <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
          <div className="alert-text font-weight-bold">{error}</div>
        </div>
      )}

      {/*begin::Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
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
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${errors.password &&
              "is-invalid"}`}
            name="password"
            ref={register({ required: true, minLength: 8, maxLength: 50 })}
          />
          {errors.password && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                Password should be at least 8 character long*
              </div>
            </div>
          )}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
          <button
            disabled={loading || user}
            id="kt_login_signin_submit"
            type="submit"
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(Login);
