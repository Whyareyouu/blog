import React, { useCallback, useState } from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        nesciunt, voluptatem? Consequuntur eum iste laboriosam? Earum error
        excepturi fuga nisi.
      </Modal>
    </nav>
  );
};
