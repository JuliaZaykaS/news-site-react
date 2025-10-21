import { Meta, StoryFn } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleSortField } from '@/entities/Article';

export default {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleSortSelector>;

const Template: StoryFn<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc'
};
NewDesignNormal.decorators = [NewDesignDecorator,
    (Story) => (
        <div style={{ padding: '200px' }}>
            <Story />
        </div>
    )
];
