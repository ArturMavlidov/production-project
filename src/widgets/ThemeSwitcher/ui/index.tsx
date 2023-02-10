import { FC } from "react";

import { classNames as cn } from "shared/lib";
import { Button } from "shared/ui";
import { useTheme } from "app/providers/ThemeProvider";

import ThemeIcon from "shared/assets/icons/theme.svg";
import styles from "./styles.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={cn(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={styles.icon} />
    </Button>
  );
};

export default ThemeSwitcher;
