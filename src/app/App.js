/**
 * Entry application component used to compose providers and render Routes.
 * */

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";
import { authActions } from "./store/actions/authActions";
import Alerts from "./modules/Alert/list";

export default function App({ store, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
      <React.Suspense fallback={<LayoutSplashScreen />}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <BrowserRouter basename={basename}>
          {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
          <MaterialThemeProvider>
            {/* Provide `react-intl` context synchronized with Redux state.  */}
            <I18nProvider>
              <Alerts />
              {/* Render routes with provided `Layout`. */}
              <Routes />
            </I18nProvider>
          </MaterialThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    </Provider>
  );
}
