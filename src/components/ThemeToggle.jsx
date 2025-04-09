import Logo from "../assets/images/logo.svg?react";
import IconMoon from "../assets/images/icon-moon.svg?react";
import IconSun from "../assets/images/icon-sun.svg?react";
import "../styles/ThemeToggle.css";
import { useState } from "react";
const ThemeToggle = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const app =  document.querySelector("#app");
    setTheme(theme === "light" ? "dark" : "light")
    app.setAttribute("data-theme", theme);
  }

  
  return (
    <div className="theme-toggle__container">
      <div className="theme-toggle__logo-container">
        <Logo/>
        <h2>Extensions</h2>
      </div>
      <div className="theme-toggle__switch-container">
        <button onClick={toggleTheme}>
         {theme === "light" ? <IconSun /> : <IconMoon />}
        </button>
      </div>

    </div>
  )
}

export default ThemeToggle