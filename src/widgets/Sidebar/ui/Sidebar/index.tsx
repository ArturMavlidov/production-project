import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames as cn } from "shared/lib";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button } from "shared/ui";

import styles from "./styles.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>{t("Переключить")}</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
