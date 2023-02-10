import { FC } from "react";

import { classNames as cn } from "shared/lib";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink";

import styles from "./styles.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.Navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
    </div>
  </div>
);

export default Navbar;
