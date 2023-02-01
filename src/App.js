import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/globalstyles";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log("activated darkmode", darkMode);

  useEffect(() => {
    document.body.classList.add('UI__js--body-hook');
    document.documentElement.classList.add('UI__js--document-hook');
  }, [])
  
  return (
    <>
      <Global styles={GlobalStyles} />
      <div
        className={`UI ${
          darkMode ? "UI__toggle-theme__dark" : "UI__toggle-theme__light"
        }`}
      >
        <div class="UI__container">
        <Header />
        </div>
      </div>
    </>
  );
}

export default App;
