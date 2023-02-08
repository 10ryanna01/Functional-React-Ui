import React, {useContext, useState} from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../assets/Index";
import AccountNav from "./AccountNav";
import MainNav from "./MainNav";
import ToggleTheme from "./ToggleTheme";

import { DarkModeContext } from "../context/DarkModeContext"; 

import "../styles/styles.scss";
export default function Header() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);


  return (
    <>
    <div
        className={`UI  ${
          darkMode ? "UI__toggle-theme__dark" : " UI__toggle-theme__light"
        }`}
      > 
      {/*  <ToggleTheme /> */}
      <div className="UI__container">
      <header className="UI__header">
        <Logo className="UI__header__logo" alt="logo" /> 
        <div className="UI__header__title">
          <a href="/" className="UI__header__title__link" ><h1 className="UI__header__title__copy">Demo UI</h1></a>
        </div>

        <MainNav />
        <AccountNav /> 
        <ToggleTheme />
      </header>

      <main>
      <Outlet />
      </main>
      </div>
      
     
      </div>
       
    
     
    </>
  );
}
