import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

import { EditableProfileCard } from "features/editableProfileCard";


import { Text } from "shared/ui/Text";



interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const { id } = useParams<{ id: string }>();



  if (!id) {
    return <Text text={t("Профиль не найден") } />
  }

  return (

      <Page className={classNames(cls.profilePage, {}, [className])}>

        <EditableProfileCard id= {id} />

      </Page>

  );
};

export default ProfilePage;
