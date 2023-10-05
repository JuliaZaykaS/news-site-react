import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
// import withMock from "storybook-addon-mock";


export default {
   title: 'pages/ArticlesPage/ArticleInfiniteList',
   component: ArticleInfiniteList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;


// const article: Article = {
//    id: '1',
//    img: '',
//    createdAt: '',
//    views: 123,
//    user: { id: '1', username: '123' },
//    blocks: [],
//    type: [],
//    title: '123',
//    subtitle: 'asfsa',
// }

export const Normal = Template.bind({});
Normal.args = {

};
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

