import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';

import { Dropdown } from "shared/ui/Popups";
import { Avatar } from "shared/ui/Avatar";
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
   className?: string;
}

// eslint-disable-next-line react/display-name
export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
   const { className } = props;
   const { t } = useTranslation()
   //  const dispatch = useDispatch();
    const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin)
   const isManager = useSelector(isUserManager)
   const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);



     const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);


    const isAdminPanelAvaliable = isAdmin || isManager

   const navbarItems = [
    ...(isAdminPanelAvaliable ? [{
      content: t("Админка"),
      href: RoutePath.admin_panel,
    }] : []),
    {
      content: t("Профиль"),
      href: RoutePath.profile + authData?.id,
    },
    {
      content: t("Выйти"),
      onClick: onLogout,
    },

   ]


   if (!authData) {
      return null
   }

   return (

         <Dropdown
            className={classNames(cls.avatarDropdown, {}, [className])}
            items={navbarItems}
            trigger={<Avatar src={authData.avatar || ""} alt={authData.username} size={30} />}
            // className={cls.dropdown}
            direction={"bottom-left"}
          />


   );
})