/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { profileRoutes } from "./AsideRoutes";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {profileRoutes.map(route => (
          <li
            key={route.route}
            className={`menu-item ${getMenuItemActive(route.route, false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to={route.route}>
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl(route.icon)} />
              </span>
              <span className="menu-text">{route.displayName}</span>
            </NavLink>
          </li>
        ))}

        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}

// <li
//           className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
//           aria-haspopup="true"
//         >
//           <NavLink className="menu-link" to="/dashboard">
//             <span className="svg-icon menu-icon">
//               <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
//             </span>
//             <span className="menu-text">Dashboard</span>
//           </NavLink>
//         </li>

//         {/*end::1 Level*/}

//         {/*begin::1 Level*/}
//         {/* <li
//           className={`menu-item ${getMenuItemActive("/builder", false)}`}
//           aria-haspopup="true"
//         >
//           <NavLink className="menu-link" to="/builder">
//             <span className="svg-icon menu-icon">
//               <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
//             </span>
//             <span className="menu-text">Layout Builder</span>
//           </NavLink>
//         </li> */}
//         {/*end::1 Level*/}

//         {/* Components */}
//         {/* begin::section */}

//         {/* end:: section */}

//         {/* Material-UI */}

//         {/* Bootstrap */}

//         {/* Applications */}
//         {/* begin::section */}
//         <li className="menu-section ">
//           <h4 className="menu-text">Profile</h4>
//           <i className="menu-icon flaticon-more-v2"></i>
//         </li>
//         <li
//           className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
//           aria-haspopup="true"
//         >
//           <NavLink className="menu-link" to="/user-profile">
//             <span className="svg-icon menu-icon">
//               <SVG
//                 src={toAbsoluteUrl(
//                   "/media/svg/icons/Communication/Add-user.svg"
//                 )}
//               />
//             </span>
//             <span className="menu-text">User Profile</span>
//           </NavLink>
//         </li>
//         {/* end:: section */}

//         {/* eCommerce */}

//         {/*begin::1 Level*/}

//         {/*end::1 Level*/}

//         {/* Custom */}
//         {/* begin::section */}
//         <li className="menu-section ">
//           <h4 className="menu-text">Custom</h4>
//           <i className="menu-icon flaticon-more-v2"></i>
//         </li>
//         {/* end:: section */}

//         {/* Error Pages */}
//         {/*begin::1 Level*/}
//         <li
//           className={`menu-item menu-item-submenu ${getMenuItemActive(
//             "/error",
//             true
//           )}`}
//           aria-haspopup="true"
//           data-menu-toggle="hover"
//         >
//           <NavLink className="menu-link menu-toggle" to="/error">
//             <span className="svg-icon menu-icon">
//               <SVG
//                 src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
//               />
//             </span>
//             <span className="menu-text">Error Pages</span>
//             <i className="menu-arrow" />
//           </NavLink>
//           <div className="menu-submenu ">
//             <i className="menu-arrow" />
//             <ul className="menu-subnav">
//               <li className="menu-item  menu-item-parent" aria-haspopup="true">
//                 <span className="menu-link">
//                   <span className="menu-text">Error Pages</span>
//                 </span>
//               </li>

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v1")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v1">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page - 1</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v2")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v2">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page -2</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v3")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v3">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page - 3</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v4")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v4">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page - 4</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v5")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v5">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page - 5</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}

//               {/*begin::2 Level*/}
//               <li
//                 className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
//                 aria-haspopup="true"
//               >
//                 <NavLink className="menu-link" to="/error/error-v6">
//                   <i className="menu-bullet menu-bullet-dot">
//                     <span />
//                   </i>
//                   <span className="menu-text">Error Page - 6</span>
//                 </NavLink>
//               </li>
//               {/*end::2 Level*/}
//             </ul>
//           </div>
//         </li>
