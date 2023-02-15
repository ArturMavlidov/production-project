import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      <BugButton />
      {t("Главная")}
    </div>
  );
};

export default Main;
