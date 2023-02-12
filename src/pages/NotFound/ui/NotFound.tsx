import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames as cn } from "shared/lib";

import styles from "./styles.module.scss";

interface NotFoundProps {
  className?: string;
}

const NotFound: FC<NotFoundProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={cn(styles.NotFound, {}, [className])}>{t("Страница не найдена")}</div>;
};

export default NotFound;
