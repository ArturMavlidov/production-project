import { classNames as cn } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
