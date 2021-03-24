import React from "react";
import { useSelector, shallowEqual } from "react-redux";

export const GetInputField = ({
  name,
  errorMsg,
  placeholder,
  label,
  registerOptions,
  methods,
  isSelect,
  selectOptions
}) => {
  const { register, errors } = methods;
  const { user } = useSelector(state => state.auth, shallowEqual);
  return (
    <div className="form-group row">
      <label className="col-xl-3 col-lg-3 col-form-label">{label}</label>
      <div className="col-lg-9 col-xl-6">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className={`form-control form-control-lg form-control-solid ${errors[
            name
          ] && "is-invalid"}`}
          ref={register(registerOptions ? registerOptions : null)}
          defaultValue={user[name]}
        />
        {errors[name] && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{errorMsg}*</div>
          </div>
        )}
      </div>
    </div>
  );
};
