import { Meta, StoryFn } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleViewSelector>;

const Template: StoryFn<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
