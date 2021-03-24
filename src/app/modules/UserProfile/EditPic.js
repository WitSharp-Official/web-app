import React from "react";

export const EditPic = ({ register, photoURL }) => {
  return (
    <div className="form-group row">
      <label className="col-xl-3 col-lg-3 col-form-label">Avatar</label>
      <div className="col-lg-9 col-xl-6">
        <div
          className="image-input image-input-outline"
          id="kt_profile_avatar"
          style={{
            backgroundImage: `url(${photoURL}`
          }}
        >
          <div
            className="image-input-wrapper"
            style={{ backgroundImage: `${photoURL}` }}
          />
          <label
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="change"
            data-toggle="tooltip"
            title=""
            data-original-title="Change avatar"
          >
            <i className="fa fa-pen icon-sm text-muted"></i>
            <input
              type="file"
              name="photoURL"
              accept=".png, .jpg, .jpeg"
              ref={register()}
            />
            <input type="hidden" name="profile_avatar_remove" />
          </label>
          <span
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="cancel"
            data-toggle="tooltip"
            title=""
            data-original-title="Cancel avatar"
          >
            <i className="ki ki-bold-close icon-xs text-muted"></i>
          </span>
          <span
            // onClick={removePic}
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="remove"
            data-toggle="tooltip"
            title=""
            data-original-title="Remove avatar"
          >
            <i className="ki ki-bold-close icon-xs text-muted"></i>
          </span>
        </div>
        <span className="form-text text-muted">
          Allowed file types: png, jpg, jpeg.
        </span>
      </div>
    </div>
  );
};
