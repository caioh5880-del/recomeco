import { TabType } from "../types";

export interface NavItem {
  id: TabType;
  label: string;
  iconName: "Home" | "BookOpen" | "HeartHandshake" | "RotateCcw" | "User";
  badge?: string;
}

export const mainNavItems: NavItem[] = [
  {
    id: "home",
    label: "Início",
    iconName: "Home"
  },
  {
    id: "word",
    label: "Palavra",
    iconName: "BookOpen"
  },
  {
    id: "prayers",
    label: "Orações",
    iconName: "HeartHandshake"
  },
  {
    id: "recomeco",
    label: "Recomeço",
    iconName: "RotateCcw"
  },
  {
    id: "profile",
    label: "Perfil",
    iconName: "User"
  }
];
