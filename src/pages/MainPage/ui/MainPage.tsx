// import React from "react";

import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { StarRating } from "@/shared/ui/StarRating";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation("main");

  return <Page>
    {t("Главная страница")}
   <RatingCard hasFeedback/>

  </Page>;
};

export default MainPage;
