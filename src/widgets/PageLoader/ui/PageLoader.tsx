import { FC } from "react";

import { classNames as cn } from "shared/lib";
import { Loader } from "shared/ui";

import styles from "./styles.module.scss";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
