/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import { Alert, Button } from "react-bootstrap";

export function AuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              {/* start:: Aside header */}

              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <div className="max-w-150px pb-3">
                  <Link to="/">
                    <img
                      alt="Logo"
                      className="max-h-150px"
                      src={toAbsoluteUrl("/media/logos/logo.svg")}
                    />
                  </Link>
                </div>
                <h3 className="font-size-h3 mb-5 text-white">
                  Find upto date pathways for your career goals with an on call
                  instructor. Never feel lost again over the internet.
                  <br />
                  Join WitSharp
                  {/* Welcome to the most interactive platform, that helps you learn
                  anything by yourself. We use Co-herent learning system with
                  MOOCs to make sure you reach goals and be happy while doing
                  it. */}
                </h3>
                <p className="font-weight-lighter text-white opacity-80">
                  #fast-track-career #learn-new-skills #self-paced-courses
                  #instructor-support #international-community
                </p>
              </div>
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2021 WitSharp
                </div>
                <div className="d-flex">
                  <Link to="/terms" className="text-white">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Legal
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Contact
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            {/*begin::Content header*/}
            <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                Don't have an account yet?
              </span>
              <Link
                to="/auth/registration"
                className="font-weight-bold ml-2"
                id="kt_login_signup"
              >
                Sign Up!
              </Link>
            </div>
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 WitSharp
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}

const getIcon = type => {
  switch (type) {
    case "error":
      return `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEKklEQVRIiZ2WzW5TRxTHf2dMEtckbYwi0tIgpVI3SJFYVO4uq+67ZUeRuuIVeAsCyBKlUrup2PIEfQCQWNBFpGYBsnBTtZZdnMSkxHO6mI87M/dahE40yvjcmfP/n88Z4f8PWbBuGtq0zg4dffP1NvArsH1uTRpkiu58xb/Xrn9/+fbtn98HDKgp9N76UGCNf24stVo//vHgwS2cYQIYKiMzY0vwc48KmGwCtJeWHg3v3/8uAQ4zJSAfBB6Uq+Zyq26m4o+Wlx+9vnfvZgGeETg3eGmhRbGQTMUuLWVnOisrPwz29hZ54P3gqTujTN20CtZW7kdBVdHENavt9sPB3t7NBgKL3Z6CBrA4UayHtKgjYuFs/zfs8dSfqUisttsPX929+y1Fwl1oAk0tdDK3sAWxMgRy/A+nT35BREBBBARBgAtqrwNPPAGtgduEWla/KVhweQBO1pGY1YSAAhKIB2ABtGZ5dHMKqqml6sHUW+0hNQLgcNXrMsiC/peCyyJgG4C8eVar71WJqTdJEZXoQo2G5vaV4FiLGKEGHADs2ifYy1uwvhHPGMCO/8b+OYDpBFXBCpiEgLMqEohpFcCTL9oArMy3vkQ3txrdZ7obmO4G88MBdnDglPlYB5cbicAx4dJSE4uNtDLgz7YjcOvSpRp4kLU+vUrryhdOv4pv7DGFU8sVf7FkASkTzC630SvbAHR6PTbv3KHT68X9pcx8vg0rK67MgtsFjHNFmAL1UpNWRkBdjP24uLsLwPqNG1EW1hd3dzl5+tSBbV5FB7876yWzLq3IenvNsl2Bzmr8Nur3eTccRtAA/G44ZNTvx33SWXU1HlNeMM4NWbfOYt5Ib2298sxsxqjfZz4eR9l8PGbU72Nns0rR2jppqvsQlDVXe0yk37z2s0za3tmh1e3G361ul/bOTn709K2Lt5RXUlTc7PbazjeTuO70epmr0xCkSagnR7VL3GQWuZGCFw87H7HJX3FDSLgQ4zQHwjf8mUxHA0YJ7ranXQlgdAinb92y3+fk2bMY45ADQQa4vaPDTMei3m6KHxr4iriuZBDswQuYn2FnMyaPH2fJlcnmZ9iDFxgEExLNUzCF1QE8E+ZvHd+lZsfY/efodFKej0OnE+z+c8zsODubvZuS7ZA3GTWeiwiICiZkqwKegF1bR9a6yMeuBPXNBJ2OkekEI4LBe0wqDzorTQQNo3afp89LgdAcQN0DwR5N0OkEHVZnHJjE/UbqT9amogvgCogxqLv6nPVGBYv6G8nJDZK1KYGkhVbAhqq1CoKYvHc1Wo7fbNB4LyvuOaSIa79S7icHIlwmDcXWYHlkJOJ6eiCg4XHhSahotZk0TFKQqID9cy6zGuql9hPwsqr1KmNDErVEMAgtPw3iZDHJ6sDAS6+75rGmIQ3r8n85yphqw7ds/AdwGih6rYATKAAAAABJRU5ErkJggg==') no-repeat`;
    case "info":
      return `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADeUlEQVRIiaWXv28cRRTHPzOz9yPGiEuVLkpBhQQk/4AjUtBZAruhQBC3lPRRhOjzLwSnoiAxIR0SWL6WhkAbgUVDikg+O9h33tuZR7Eze7Ozu87ZftLT3s3NvM/3vdl9c6u4oMkzbgK7/utHap3fzxtDXRI88kOTiwjQ5+SqfIdbIuyKMBIB7yMRdvMdbp0rmHdZYh75Djczw68sMk5tUlju9D+tKnBm3Fa4L+toXnCoFCMF76D4RCm+rOZEK1Rz87bF8aPAIUBmEGCSbkuAVyrlGQ9FuEs8GMHkjFyCiOra/O07tc5WJ9z9tKhCDA6OahcQgsQCUhFKgVpfaMq6spAUGsacH+sAqyBAFmNec0N0CldtYAGcq4+HeWFRBZZF1kpA67qAoCPAazdco9Qe7AJUK3pvGXSmyPoaZwVXCPOZw55aFB7owc4tBKSWJQl0gp1AbyVjsGoWq0draEBPxmQDjbOG6WSOtYKJwNIglAk3yt4F7q9m9FdMffYHP5fX8RAAbRQrV/ucHOQ4KxVYfG3T7EOHqw1Xe+uvOtNNcIcpDYO3M6zz90l8j0id1Wiv8R0pVbmXAwfL+hrT06V46gISnSUnFRB7b3jeIwBMXzcf1URAHDVuODXVF7Gsr1ofyxR+wfBvtg5w955Tns2XtnnemlMtdgPuhHE6ls9cO2E8rB6z1IpT1+jtPnalKoYLINaxFxaEtnl6bNvha7PSE5ufOorcNQ6XELsNDsCrI55Wvdm7zR2z/zoEJCYOTg4LdBID4PWUp2fCr2+xbx2PoFykvU+PCqavEwF/fFy6N1sIR69yxMrioPFxRHh07XP2Y5218z74Pw+5cW3Ei7i9OgfWAVoxXDVkPUVvoLGFUMzLgyU/sWhdijWa6rPW8PKAd69v8TfR2ZXCKxHHP3A/M9xLBThp71ihSsrDjKY64Zzj2yubfMOifTTgcfYAevaEX5RiLYa2wcOe6ggYriKMhxvcScHQ/pxXE/7cZxPheVw+4z0zYIKH7/63MBfh+V8v2aCjkbW9NNTK/9sDrr5/g8dasVb7h9O2IL67hb0X/7L53lccpEktA6/FnT7mvtHcW+YPZGFre9wK7oJ3Cph8z4crAx4oxe2OdXvHM74efdb60tCQ/KZ3tTYRTJ9w22juasUXfmh7btm+slF1sBS09J5fZl5qZ56Y/wP3DczlGSWQRAAAAABJRU5ErkJggg==') no-repeat`;
    case "success":
      return `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD9UlEQVRIiZ2WzWucRRzHPzO7efYlu8HmxfRiaMMWxByECnpaPAmezH9QC/0ThJ4LXmx79VRb0IMnT/4FBWuo8WBAaVEJ0q5IqzEbNLubZrN5xsO87Mw88ySpA5M8efLMfH7f39uM4P8PUfKcGir1HC66/+UF4D5w4eStVPLd+/PLvNdeuPZR560vTgMDSkZbXH1psFLehEq1eu/2L99fRQsTgGQqMhAbw19uRGArbKZWu3v7580PPbCdvgHi5eApdzsj8sCpM/X63VuPv7sSwQMDzg4PVCrIczOV+10XYQplzcZnNx89LPPAGeAWlvyf+aFw3yilUN73tdnmnZuPHl5JGHCC20+EGrX2txnf7P5Jf3xYMKI227zzyU8bHxAlXDW5cdk7D+SSTOEM6R+/4ONffwTf/VKAlHA0eRP42higivA8Dxf6HrAgm1XuXe49K7O33UfEHrRgAaii8hSUqKRc0pksd970jBSAUFp1iUd9+FRyDM6jTE9NCw92MspjbybdbpeVgDv1JmvtOeZnMrdgnOf0RgO29vYYTI50TitMbgtvhmAfHqkOwRnQPbfISqNZcF0mJZ3WHCvNFpu7O2zv7+skU2i32zBr9d6LsM6FKx9fcZ7TfWUhCY6N6C4tc75RNzBPOYCQNhvc9Jv+1CleLDvN2VPB/uguncf1Eetg4cTiP4RNJs9DQ3LF2uzcqcCVRptP197lxqW3aVWrdFptAvUIHYrwSE21V79mFfNZxuutc6wvr7KY1ZPg66uXaVaqLGYNABaymtldesqd6oLyoOHHJbS+fJH15YvcuPQOK412Ejw6nnDrtx8AmM8yDQxKUMSFXrhMJMe3/WcANCtVrq9eZqXRToJ7B/uALj8HDpuLDX6yzgtjnOds7Gn4tdfecAZYY2IwQP9oHNX4mWMejt5oCMDG3jPu/f7YQcvAAE9HQ6/EghxOwoNE8C3e+mdPuzEyoAzcGw3pj8eAV+Mll9uE24XODVMig+NjNvt/01181RkwOp6we/SiAO6PD3mw+5d2ccyVsnCyhHD7gW0KUhuwPRwwmEzoLi7Rqs6w9e9OweTecMCD3R3Gep9iXw/RLuFsv51aqkyC5MaQiuT5+JCv/ujRabZZyDLma7qWnx8c8HQ0pD8Z64uRNGvdYSKsMAdNKVfB2WsXS6kvGRJQku3RgO1R7EFzW7HwWHXxSA3gU/XCxFwJDcyNAbbpiKh+bfv0DxJXWt7fKj70iwkXxtwaoJiGwAc74V5Zxf28RHUMD0sNvEQRUPFuN37r9L9NeSElzoywyUj5OfBkqiKKm5A6BFInIRWbYCbeohT8xOwdjDKfiMTzyR1jqqoQW+JCM+M/oQ0MxVFidYQAAAAASUVORK5CYII=') no-repeat`;
  }
};

const contentWrapperStyle = {
  padding: "10px 60px 10px 10px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};

const iconPlaceholderStyle = {
  display: "flex",
  justifyContent: "center",
  width: "50px"
};

const messageStyle = {
  flex: 3,
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%"
};

const closeButtonStyle = {
  minWidth: "50px",
  height: "100%",
  position: "absolute",
  borderRadius: "0 2px 2px 0",
  cursor: "pointer",
  top: 0,
  right: 0,
  backgroundColor: "#444",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
