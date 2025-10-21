import type { Meta, StoryFn } from '@storybook/react';

import ArticlePageGreeting from './ArticlePageGreeting';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), NewDesignDecorator]
} as Meta<typeof ArticlePageGreeting>;

const Template: StoryFn<typeof ArticlePageGreeting> = () => <ArticlePageGreeting />;

export const Normal = Template.bind({});
