import type { Meta, StoryFn } from '@storybook/react';
import { ArticlesList } from './ArticlesList';
import {
    ArticleDetailsType,
    ArticleDetailsBlockType,
    ArticleViewType,
} from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticlesList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesList>;

const Template: StoryFn<typeof ArticlesList> = (args) => (
    <ArticlesList {...args} />
);

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleDetailsType.IT],
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
    blocks: [
        {
            id: '1',
            type: ArticleDetailsBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleDetailsBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
};

export const Grid = Template.bind({});
Grid.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.GRID,
};
export const List = Template.bind({});
List.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleViewType.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.GRID,
};
export const LoadingList = Template.bind({});
LoadingList.args = {
    isLoading: true,
    articles: [],
    view: ArticleViewType.LIST,
};
