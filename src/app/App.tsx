// import React, { Suspense, useContext, useState } from "react";
import { Suspense, useEffect } from "react";
// import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

// import { AboutPage } from "pages/AboutPage";

// import { MainPage } from "pages/MainPage";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
// import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Sidebar } from "widgets/Sidebar/ui";
// import { useTranslation } from "react-i18next";

export const App = () => {
  const { theme } = useTheme();

  //   useEffect(() => {
  //     if (Math.random() < 0.5) {
  //       throw new Error();
  //     }
  //   }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
