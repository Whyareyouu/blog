import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export enum Languages {
  RU = "ru",
  EN = "en",
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  const switchToRusLang = () => {
    i18n.changeLanguage(Languages.RU);
  };
  const switchToEnLang = () => {
    i18n.changeLanguage(Languages.EN);
  };
  return (
    <div className={classNames(styles.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={switchToRusLang}>
        RU
      </Button>
      <Button theme={ThemeButton.CLEAR} onClick={switchToEnLang}>
        EN
      </Button>
    </div>
  );
};
