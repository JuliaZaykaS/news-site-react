// eslint-disable-next-line juliaz/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator =
    // eslint-disable-next-line react/display-name
    (theme: Theme) => (StoryComponent: StoryFn) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
