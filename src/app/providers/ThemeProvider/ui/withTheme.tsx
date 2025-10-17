import { useJsonSettings } from "@/entities/User";
import ThemeProvider from "./ThemeProvider";

// HOC
// export const withTheme = (Component: React.ComponentType) => {
//     return () => {
//         const { theme: defaultTheme } = useJsonSettings();
//         return (
//             <ThemeProvider initialTheme={defaultTheme}>
//                 <Component />
//             </ThemeProvider>)
//     }
// }

export const withTheme = (Component: React.ComponentType) => {
    const WrappedWithTheme = () => {
        const { theme: defaultTheme } = useJsonSettings();

        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        );
    };

    // Назначаем displayName для удобства отладки
    WrappedWithTheme.displayName = `withTheme(${Component.displayName || Component.name || 'Component'})`;

    return WrappedWithTheme;
};