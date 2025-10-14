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
import { useSelector } from 'react-redux';
// import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { getUserInited, initAuthData } from '@/entities/User';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

// import { useTranslation } from "react-i18next";

export const App = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const inited = useSelector(getUserInited);


    useEffect(() => {
        // dispatch(userActions.initAuthData());
        dispatch(initAuthData());
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

    if (!inited) {
        return <PageLoader />
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<div id={'app'} className={classNames('app_redesigned', {}, [theme])}>
                <Suspense fallback={''}>
                    <MainLayout
                        header={<Navbar />}
                        content={<AppRouter />}
                        sidebar={<Sidebar />}
                        toolbar={<div>toolbar</div>}
                    />

                </Suspense>
            </div>}
            off={<div className={classNames('app', {}, [theme])}
                id={'app'}>
                <Suspense fallback={''}>
                    <Navbar />
                    {/* <button onClick={toggleModal}>toggle modal</button> */}
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>}
        />
    )
};
