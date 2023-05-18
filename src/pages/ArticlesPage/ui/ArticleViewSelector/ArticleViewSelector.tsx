import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import GridIcon from "shared/assets/icons/grid.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { ArticleViewType } from "entities/Article";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Icon } from "shared/ui/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewType;
  onViewClick: (view: ArticleViewType) => void;
}

const viewTypes = [
  {
    view: ArticleViewType.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleViewType.LIST,
    icon: ListIcon,
  },
];

// eslint-disable-next-line react/display-name
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleViewType) => {
    return () => {
      onViewClick(newView);
    };
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => {
        return (
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
            key={viewType.view}
            className={cls.selectorBtn}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames("", {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          </Button>
        );
      })}
    </div>
  );
});
