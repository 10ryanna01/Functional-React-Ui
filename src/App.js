import { useContext, useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/globalstyles";
import Header from "./components/Header";
import "./App.css";
import "./styles/styles.scss";

function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log("activated darkmode", darkMode);
  return (
    <>
      <div
        className={`wrapper ${
          darkMode
            ? "UI__toggle-theme__dark"
            : "UI__toggle-theme__light"
        }`}
      >
        <Global styles={GlobalStyles} />
        <span className={darkMode}>what themse is this</span> hello world
        <Header   />
      </div>
    </>
  );
}

export default App;
