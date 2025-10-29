import { Meta, StoryFn } from '@storybook/react';
import { DetailsContainer } from './DetailsContainer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/shared/__mocks__/article';

export default {
    title: 'pages/ArticleDetailsPage/DetailsContainer',
    component: DetailsContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as Meta<typeof DetailsContainer>;

const Template: StoryFn<typeof DetailsContainer> = (
    args,
) => <DetailsContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = { mockedId: '1' };
Normal.decorators = [
    StoreDecorator({ articleDetails: { data: article } }),
];
