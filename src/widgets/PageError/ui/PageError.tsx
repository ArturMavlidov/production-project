import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames as cn } from "shared/lib";
import { Button } from "shared/ui";

import styles from "./styles.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cn(styles.PageError, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};

export default PageError;
