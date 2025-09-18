// import React, { Suspense, useContext, useState } from "react";
import { Suspense, useEffect } from 'react';
// import { Link, Route, Routes } from "react-router-dom";
// import "./styles/index.scss";

// import { AboutPage } from "pages/AboutPage";

// import { MainPage } from "pages/MainPage";

import { classNames } from '@/shared/lib/classNames/classNames';

import { Navbar } from '@/widgets/Navbar';
// import { ThemeSwitcher } from "widgets/ThemeSwitcher";

// import { Modal } from "@/shared/ui/Modal";
import { useDispatch, useSelector } from 'react-redux';
// import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { getUserInited, userActions } from '@/entities/User';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
// import { useTranslation } from "react-i18next";

export const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const inited = useSelector(getUserInited);
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
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                {/* <button onClick={toggleModal}>toggle modal</button> */}

                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
