import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";

import { classNames as cn } from "shared/lib";

import styles from "./styles.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;

  return (
    <Link
      to={to}
      className={cn(styles.AppLink, {}, [className, styles[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default AppLink;
