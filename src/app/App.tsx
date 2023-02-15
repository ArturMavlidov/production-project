import { Suspense } from "react";
import { classNames as cn } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
