import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { Brand } from "../brand/Brand";

export function HeaderMobile() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      headerMobileCssClasses: uiService.getClasses("header_mobile", true),
      headerMobileAttributes: uiService.getAttributes("header_mobile")
    };
  }, [uiService]);

  return (
    <>
      {/*begin::Header Mobile*/}
      <div
        style={{ background: "#F6f6f6" }}
        id="kt_header_mobile"
        className={`header-mobile shadow ${layoutProps.headerMobileCssClasses}`}
        {...layoutProps.headerMobileAttributes}
      >
        {/* begin::Logo */}
        <div>
          <Brand />
          {/* end::Logo */}
        </div>
        {/* begin::Toolbar */}
        <div className="d-flex align-items-center">
          {layoutProps.asideDisplay && (
            <button
              className="btn p-0 burger-icon burger-icon-left"
              id="kt_aside_mobile_toggle"
            >
              <span />
            </button>
          )}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header Mobile */}
    </>
  );
}
