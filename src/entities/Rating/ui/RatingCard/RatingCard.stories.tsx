import { Meta, StoryFn } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof RatingCard>;

const Template: StoryFn<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const OldDesignNoRating = Template.bind({});
OldDesignNoRating.args = {};

export const OldDesignWithRating = Template.bind({});
OldDesignWithRating.args = {
    rate: 3,
};

export const NewDesignNoRating = Template.bind({});
NewDesignNoRating.args = {};
NewDesignNoRating.decorators = [NewDesignDecorator];

export const NewDesignWithRating = Template.bind({});
NewDesignWithRating.args = {
    rate: 3,
};
NewDesignWithRating.decorators = [NewDesignDecorator];
