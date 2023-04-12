import { lazy } from "react";

// обязателен экспорт по дефолту
export const LoginFormAsync = lazy(() => import("./LoginForm"));
