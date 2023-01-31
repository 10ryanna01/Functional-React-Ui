import { useContext } from "react";
import { Moon, Sun } from "../assets/Index";
import { DarkModeContext } from "../context/DarkModeContext";

export default function ToggleTheme() {
  // const [theme, setTheme] = useState("UI__toggle-theme__dark");
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const handletoggleThemeDark = () => {
    /*  setTheme((theme) =>
      theme === "UI__toggle-theme__light"
        ? "UI__toggle-theme__dark"
        : "UI__toggle-theme__light"
        
    ); */
    setDarkMode(true);
  };

  const handletoggleThemeLight = () => {
    setDarkMode(false);
  };

  
  const handletoggleThemeCyberPunk = () => {
    setDarkMode(false);
  };
  return (
    <div>
      ToggleTheme
      <div className="UI__toggle-theme">
        {darkMode ? (
          <div onClick={handletoggleThemeLight}>
            <Sun className="UI__icon__l" />
          </div>
        ) : (
          <div onClick={handletoggleThemeDark}>
            <Moon className="UI__icon__l" />
          </div>
        )}
      </div>
    </div>
  );
}
