import { MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { scrollPositionSaveActions } from "../model/slices/ScrollPositionSaveSlice";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getScrollPositionByPath } from "../model/selectors/scrollPositionSaveSelectors";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types/test";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname)
  );

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScrollPage = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log("scroll");
    dispatch(
      scrollPositionSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <main
      className={classNames(cls.page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScrollPage}
      data-testid={props["data-testid"] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? (
        <div className={cls.trigger} ref={triggerRef}></div>
      ) : null}
    </main>
  );
};
