import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './app/App';

import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';
import App from './app/App';

const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript
if (!container) {
    throw new Error('Root not found');
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
