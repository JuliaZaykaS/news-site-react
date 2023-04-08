// import React, { Suspense, useContext, useState } from "react";
import { Suspense, useEffect, useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import "./styles/index.scss";

// import { AboutPage } from "pages/AboutPage";

// import { MainPage } from "pages/MainPage";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
// import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Sidebar } from "widgets/Sidebar/ui";
import { Modal } from "shared/ui/Modal";
import { useDispatch } from "react-redux";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { userActions } from "entities/User";
// import { useTranslation } from "react-i18next";

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen((isOpen) => !isOpen);
  // };

  // const onCloseModal = () => {
  //   setIsOpen(false);
  // };

  //   useEffect(() => {
  //     if (Math.random() < 0.5) {
  //       throw new Error();
  //     }
  //   }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <Navbar />
        {/* <button onClick={toggleModal}>toggle modal</button> */}

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
