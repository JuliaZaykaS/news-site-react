import type { Meta, StoryFn } from '@storybook/react';

import ArticlePageGreeting from './ArticlePageGreeting';

export default {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlePageGreeting>;

const Template: StoryFn<typeof ArticlePageGreeting> = () => <ArticlePageGreeting />;

export const Normal = Template.bind({});
