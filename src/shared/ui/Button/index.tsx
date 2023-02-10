import { ButtonHTMLAttributes, FC } from "react";

import { classNames as cn } from "shared/lib";

import styles from "./styles.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme = ThemeButton.CLEAR, children, ...rest } = props;

  return (
    <button
      type="button"
      className={cn(styles.Button, {}, [className, styles[theme], "Some text"])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
