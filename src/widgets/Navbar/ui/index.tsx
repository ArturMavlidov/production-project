import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames as cn } from "shared/lib";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink";

import styles from "./styles.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
