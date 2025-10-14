import { ArticleDetailsBlockType } from "../../model/consts/articleConsts";
import { ArticleDetailsBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from './ArticleDetails.module.scss'

export const renderBlocks = (block: ArticleDetailsBlock) => {
    switch (block.type) {
        case ArticleDetailsBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
            break;
        case ArticleDetailsBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
            break;
        case ArticleDetailsBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
            break;

        default:
            return null;
            break;
    }
};