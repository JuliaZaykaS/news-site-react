import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { AboutPage } from "pages/AboutPage";

import { MainPage } from "pages/MainPage";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* <button onClick={toggleTheme}>Toggle</button> */}
      <ThemeSwitcher />
      <Navbar />
      <AppRouter />
    </div>
  );
};
