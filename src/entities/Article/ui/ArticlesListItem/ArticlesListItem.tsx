import { typedMemo } from '@/shared/const/memo';
import type { ArticlesListItemProps } from './ArticlesListItem.types';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';

export const ArticlesListItem = typedMemo((props: ArticlesListItemProps) => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    )
});
