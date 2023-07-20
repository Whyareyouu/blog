import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";

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
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    ></div>
  );
};
