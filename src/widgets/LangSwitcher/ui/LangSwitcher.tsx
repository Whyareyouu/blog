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
  const { t, i18n } = useTranslation();
  const switchToRusLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(styles.LangSwitcher, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={switchToRusLang}
        className={styles.LangSwitcher}
      >
        {t("Язык")}
      </Button>
    </div>
  );
};
