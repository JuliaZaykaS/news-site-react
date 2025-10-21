import type { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line juliaz/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Modal',
    component: Modal,
    decorators: NewDesignDecorator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam nam odit veniam eius quod ratione, corporis dolor minus consequuntur velit, repellat aliquam deleniti quaerat ullam? Vel consectetur iusto mollitia.',
    isOpen: true,
};
export const Dark = Template.bind({});

Dark.args = {
    children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam nam odit veniam eius quod ratione, corporis dolor minus consequuntur velit, repellat aliquam deleniti quaerat ullam? Vel consectetur iusto mollitia.',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Orange = Template.bind({});

Orange.args = {
    children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam nam odit veniam eius quod ratione, corporis dolor minus consequuntur velit, repellat aliquam deleniti quaerat ullam? Vel consectetur iusto mollitia.',
    isOpen: true,
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
