import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={"/"}>Главная</AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
      <ThemeSwitcher />
    </nav>
  );
};
