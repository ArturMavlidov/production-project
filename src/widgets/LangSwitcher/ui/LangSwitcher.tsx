import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames as cn } from "shared/lib";
import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button";

import styles from "./styles.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.match("ru") ? "en" : "ru");
  };

  return (
    <Button
      className={cn(styles.LangSwitcher, {}, [className])}
      theme={ThemeButton.OUTLINE}
      onClick={toggleLanguage}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
