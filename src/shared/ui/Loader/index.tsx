import { FC } from "react";

import { classNames as cn } from "shared/lib";

import styles from "./styles.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.loader, {}, [className])}>
      <div />
    </div>
  );
};

export default Loader;
