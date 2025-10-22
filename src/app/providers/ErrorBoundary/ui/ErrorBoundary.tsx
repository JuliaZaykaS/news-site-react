import React, { ErrorInfo, Suspense } from 'react';
// import { withTranslation } from "react-i18next"; // для переводов в классовых компонентах
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(
            '🚀 ~ ErrorBoundary ~ getDerivedStateFromError ~ error:',
            error,
        );
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo); //или любой другой сервис для логгирования
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                // Suspense для подгрузки переводов
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

// export default withTranslation()(ErrorBoundary); // для переводов в классовых компонентах
export default ErrorBoundary;
