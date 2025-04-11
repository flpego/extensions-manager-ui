import Logo from "../../public/images/logo.svg?react";
import IconMoon from "../../public/images/icon-moon.svg?react";
import IconSun from "../../public/images/icon-sun.svg?react";
import { useEffect, useState } from "react";
const ThemeToggle = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const app = document.querySelector("html");
    app.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  
  return (
    <div className="theme-toggle__container">
      <div className="theme-toggle__logo-container">
        <Logo/>
        <h2>Extensions</h2>
      </div>
      <div className="theme-toggle__switch-container">
        <button onClick={toggleTheme}>
         {theme === "light" ? <IconMoon /> : <IconSun />}
        </button>
      </div>

    </div>
  )
}

export default ThemeToggle