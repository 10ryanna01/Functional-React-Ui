import React from "react";
import { Logo } from "../assets/Index";
import AccountNav from "./AccountNav";
import MainNav from "./MainNav";
import ToggleTheme from "./ToggleTheme";
export default function Header() {
  return (
    <>
      {/*  <ToggleTheme /> */}
      <header className="UI__header">
        <Logo className="UI__header__logo" alt="logo" />

        <div className="UI__header__title">
          <h1 className="UI__header__title__copy">Demo UI</h1>
        </div>

        <MainNav />
        <AccountNav />

        <ToggleTheme />
      </header>
    </>
  );
}
