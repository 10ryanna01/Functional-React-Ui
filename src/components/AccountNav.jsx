import { useState, useEffect, useRef } from "react";
import {
  IconAddUser,
  IconLogin,
  IconLogOut,
  IconSettings,
} from "../assets/Index";
import AccountSignUpStepper from "./AccountSignUpStepper";

export default function AccountNav({mobileNavMenu, setMobileNavMenu}) {
  const logUserInToggled = localStorage.getItem("user-logged-in") === "true";

  const [logUserIn, setLoguserIn] = useState(logUserInToggled);
  const [userSignUp, setUserSignUp] = useState(false);
  const [userAccontSettings, setAccontSettings] = useState(false);
  const [applyOverlay, setApplyOverlay] = useState(false);

  let userSignUpRef = useRef();

  useEffect(() => {
    localStorage.setItem("user-logged-in", logUserIn);
  }, [logUserIn]);

  useEffect(() => {
    let handleExitUserSignUp = (e) => {
      if (!userSignUpRef.current.contains(e.target)) {
        setUserSignUp(false); 
        setApplyOverlay(false);
      }
    };
    document.addEventListener("mousedown", handleExitUserSignUp);
    return () => {
      document.removeEventListener("mousedown", handleExitUserSignUp);
    };
  }, []);

  const handleLogIn = () => {
    setLoguserIn(true);
    setUserSignUp(false); 
  };
  const handleSignUpStepper = () => {
    setUserSignUp(true);
    
    setApplyOverlay(true);
  };
  const handleLogOut = () => {
    setLoguserIn(false);
  };

  return (
    <>
      <div className="UI__header__acc-nav">
        {!logUserIn ? (
          <div className="UI__header__acc-nav__list">
            <button
              className=" UI__utility__button-reset UI__header__acc-nav__list__item"
              onClick={handleSignUpStepper}
            >
              
              <IconAddUser className="UI__header__acc-nav__list__item__icon" />
              <h3 className="UI__header__acc-nav__list__item__copy" data-testid="AccNavtestC">sign up</h3>
            </button>

            <button className="UI__utility__button-reset" onClick={handleLogIn}>
              <IconLogin className="UI__header__acc-nav__list__item__icon" />
              <h3 className="UI__header__acc-nav__list__item__copy" data-testid="AccNavtestB">sign in</h3>
            </button>
          </div>
        ) : (
          <>
            <button className="UI__utility__button-reset">
              <IconSettings className="UI__header__acc-nav__list__item__icon" />
              <h3 className="UI__header__acc-nav__list__item__copy">
                {" "}
                settings{" "}
              </h3>
            </button>
            <button
              className="UI__utility__button-reset"
              onClick={handleLogOut}
            >
              <IconLogOut className="UI__header__acc-nav__list__item__icon" />
              <h3 className="UI__header__acc-nav__list__item__copy">
                {" "}
                log out{" "}
              </h3>
            </button>
          </>
        )}
      </div>
      <div data-testid="AccNavtestA" ref={userSignUpRef}>
        {userSignUp ? (
          <>
            <div className="UI__signup-form">
              <AccountSignUpStepper  setApplyOverlay={setApplyOverlay} setUserSignUp={setUserSignUp} mobileNavMenu={mobileNavMenu} setMobileNavMenu={setMobileNavMenu} />
            </div>
          </>
        ) : null}
      </div>

      {applyOverlay ? <div className="overlay" data-testid=""testD></div> : null}
    </>
  );
}
