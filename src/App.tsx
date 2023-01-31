import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import { MainAsync, AboutAsync } from "./pages";
import { useTheme } from "./theme/useTheme";
import { classNames as cn } from "./helpers";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
