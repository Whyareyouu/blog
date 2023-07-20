import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={"/"}>{t("Главная")}</AppLink>
        <AppLink to={"/about"}>{t("О сайте")}</AppLink>
      </div>
      <LangSwitcher />
      <ThemeSwitcher />
    </nav>
  );
};
