import { Meta, StoryFn } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof ArticleInfiniteList>;

const Template: StoryFn<typeof ArticleInfiniteList> = (
    args,
) => <ArticleInfiniteList {...args} />;

export const OldDesignNormal = Template.bind({});
OldDesignNormal.args = {};

export const NewDesignNormal = Template.bind({});
NewDesignNormal.args = {};
NewDesignNormal.decorators = [NewDesignDecorator];
// Normal.decorators = [StoreDecorator({
//    articlesPage: {
//       ids: ["1"],
//       entities: {
//          ["1"]: article,
//       }
//    }
//    // articlesPage:  [
//    //    {
//    //       ...article, id: "1"
//    //    },
//    //    {
//    //       ...article, id: "2"
//    //    },
//    //    {
//    //       ...article, id: "3"
//    //    },
//    // ]
// })];
