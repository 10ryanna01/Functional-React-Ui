import { useContext, useState } from "react";
import { Sun, IconDarkMode } from "../assets/Index";
import { DarkModeContext } from "../context/DarkModeContext";

export default function ToggleTheme() {
  // const [theme, setTheme] = useState("UI__toggle-theme__dark");
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  
  
  const [altMode, setAltMode] = useState(false);
  const handletoggleThemeDark = () => {
    /*  setTheme((theme) =>
      theme === "UI__toggle-theme__light"
        ? "UI__toggle-theme__dark"
        : "UI__toggle-theme__light"
        
    ); */
    setDarkMode(true);
    setAltMode(true);
  };

  const handletoggleThemeLight = () => {
    setDarkMode(false);
  };

  return (
    <>
      <div className="UI__header__theme ">
        {darkMode ? (
          <button  aria-label="enable light mode theme" onClick={handletoggleThemeLight} className="UI__utility__icon__l">
            <Sun />
          </button>
        ) : (
          <button   aria-label="enable dark mode theme" onClick={handletoggleThemeDark} className="UI__utility__icon__l">
            <IconDarkMode />
          </button>
        )}
      </div>
    </>
  );
}
