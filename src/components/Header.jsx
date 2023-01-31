import React from "react";
import { Logo } from "../assets/Index";
import MainNav from "./MainNav";
import ToggleTheme from "./ToggleTheme";
export default function Header() {
  return (
    <>
     {/*  <ToggleTheme /> */}
      <header className="App-header dude">
        <div className="UI__header__logo">
          <Logo className="App-logo" alt="logo" />
        </div>
        <div className="UI__header__title">
          <h1>Demo UI</h1>
        </div>
<ToggleTheme />
        <MainNav />
      </header>
    </>
  );
}
