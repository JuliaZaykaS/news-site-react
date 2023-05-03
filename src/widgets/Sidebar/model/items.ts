import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text: string;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "Главная",
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: "О сайте",
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: ProfileIcon,
    authOnly: true,
  },
];
