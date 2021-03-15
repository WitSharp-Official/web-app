import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { authActions } from "../../../store/actions/authActions";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Registration(props) {
  const { intl } = props;
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const { loading, error, user } = useSelector(
    state => state.auth,
    shallowEqual
  );

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(authActions.createUserWithEmail({ email, password }));
  };

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.REGISTER.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your details to create your account
        </p>
      </div>

      <form
        id="kt_login_signin_form"
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* begin: Alert */}
        {error && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{error}</div>
          </div>
        )}
        {/* end: Alert */}

        {/* begin: Email */}
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
        {/* end: Email */}

        {/* begin: Password */}
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
        {/* end: Password */}

        {/* begin: Terms and Conditions */}
        <div className="form-group">
          <label className="checkbox">
            <input
              type="checkbox"
              name="terms"
              className="m-1"
              ref={register({ required: true })}
            />
            <Link
              to="/terms"
              target="_blank"
              className="mr-1"
              rel="noopener noreferrer"
            >
              I agree the Terms & Conditions
            </Link>
            <span />
          </label>
          {errors.terms && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">Please select the terms*</div>
            </div>
          )}
        </div>
        {/* end: Terms and Conditions */}
        <div className="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            disabled={loading || user}
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
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));
