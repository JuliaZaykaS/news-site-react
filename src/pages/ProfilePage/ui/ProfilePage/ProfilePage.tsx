import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page";

import { EditableProfileCard } from "@/features/editableProfileCard";


import { Text } from "@/shared/ui/Text";
import { ProfileRating } from "@/features/profileRating";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "@/entities/Profile";




interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const { id } = useParams<{ id: string }>();

  const userData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)


  let profileRatingContent

  if (!id) {
    return <Text text={t("Профиль не найден") } />
  }

  if (userData?.id !== id && profileData) {
    profileRatingContent = (<ProfileRating profileId={id}/>)
  }




  return (

    <Page
      className={classNames(cls.profilePage, {}, [className])}
      data-testid={"ProfilePage"}
    >

      <EditableProfileCard id={id} />
      {/* {userData?.id !== id && <ProfileRating profileId={id} />} */}
      {profileRatingContent}

      </Page>

  );
};

export default ProfilePage;
