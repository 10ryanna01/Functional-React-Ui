import { useState, useEffect, useRef } from "react";
import {
  IconAddUser,
  IconLogin,
  IconLogOut,
  IconSettings,
} from "../assets/Index";
import AccountSignUpStepper from "./AccountSignUpStepper";

export default function AccountNav() {
  const logUserInToggled = localStorage.getItem("user-logged-in") === "true";

  const [logUserIn, setLoguserIn] = useState(logUserInToggled);
  const [userSignUp, setUserSignUp] = useState(false);
  const [userAccontSettings, setAccontSettings] = useState(false);

 
let userSignUpRef = useRef();

  useEffect(() => {
    localStorage.setItem("user-logged-in", logUserIn);
  }, [logUserIn]);


  useEffect(() => {
    let handleExitUserSignUp = (e) => {
      if(!userSignUpRef.current.contains(e.target)) {
        setUserSignUp(false);
      }
    }
    document.addEventListener("mousedown", handleExitUserSignUp); 
    }, [])

  const handleLogIn = () => {
    setLoguserIn(true);
    setUserSignUp(false);
  };
  const handleSignUpStepper = () => {
    setUserSignUp(true);
  };
  const handleLogOut = () => {
    setLoguserIn(false);
  };

  return (
    <>
      <div className="UI__header__acc-nav">
        {!logUserIn ? (
          <ul className="UI__header__acc-nav__list">
            <div
              className="UI__header__acc-nav__list__item"
              onClick={handleSignUpStepper}
            >
              <IconAddUser className="UI__header__acc-nav__list__item__icon" />
              <h3 className="">sign up</h3>
            </div>

            <div onClick={handleLogIn}>
              <IconLogin className="UI__header__acc-nav__list__item__icon" />
              <h3 className="">sign in</h3>
            </div>
          </ul>
        ) : (
          <>
            <button>
              <IconSettings />
              settings
            </button>
            <button onClick={handleLogOut}>
              <IconLogOut />
              log out
            </button>
          </>
        )}
      </div>

      {userSignUp ? (
        <div ref={userSignUpRef}>
          <AccountSignUpStepper  />
        </div>
      ) : null}
    </>
  );
}
