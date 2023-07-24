import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import CloseIcon from "shared/assets/icons/sidebar-right.svg";
import OpenIcon from "shared/assets/icons/sidebar-left.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
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
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggle}
        className={styles.Button}
        data-testid="sidebar_button"
      >
        {collapsed ? (
          <CloseIcon className={styles.sidebar_icon} width={40} height={40} />
        ) : (
          <OpenIcon className={styles.sidebar_icon} width={40} height={40} />
        )}
      </Button>
    </div>
  );
};
