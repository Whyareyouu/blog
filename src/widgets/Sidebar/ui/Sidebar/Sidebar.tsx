import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import CloseIcon from "shared/assets/icons/sidebar-right.svg";
import OpenIcon from "shared/assets/icons/sidebar-left.svg";
import { AppLink, AppLinkSize } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();
  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.links}>
        <AppLink to={"/"} className={styles.link} size={AppLinkSize.L}>
          <HomeIcon className={styles.link__icon} />
          <span className={styles.link__text}>{t("Главная")}</span>
        </AppLink>
        <AppLink to={"/about"} className={styles.link} size={AppLinkSize.L}>
          <AboutIcon className={styles.link__icon} />
          <span className={styles.link__text}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={styles.button__container}>
        <LangSwitcher />
        <Button
          theme={ThemeButton.CLEAR}
          onClick={toggle}
          data-testid="sidebar_button"
        >
          {collapsed ? (
            <CloseIcon className={styles.sidebar_icon} width={40} height={40} />
          ) : (
            <OpenIcon className={styles.sidebar_icon} width={40} height={40} />
          )}
        </Button>
      </div>
    </div>
  );
};
