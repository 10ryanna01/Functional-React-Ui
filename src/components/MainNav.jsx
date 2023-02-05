import { useState, useRef, useEffect } from "react";
import { IconBurger, IconClose } from "../assets/Index";
import AccountNav from "./AccountNav";
import ToggleTheme from "./ToggleTheme";

export default function MainNav() {
  let toggleMobileNav = useRef();
  let mobileNavExit = useRef();

  const [mobileNavMenu, setMobileNavMenu] = useState(false);

  const handleToggleMobileNav = () => {
    setMobileNavMenu(true);
  };
  const handleToggleMobileNavExit = () => {
    setMobileNavMenu(false);
  };

  useEffect(() => {
    let handleToggleMobileNav = (e) => {
      if (!toggleMobileNav.current.contains(e.target)) {
        setMobileNavMenu(false);
      }
    };
    document.addEventListener("mousedown", handleToggleMobileNav);

    return () => {
      document.removeEventListener("mousedown", handleToggleMobileNav);
    };
  }, []);

  return (
    <>
      <div className="UI__header__nav">
        <nav className="UI__primary-nav">
          <ul className="UI__primary-nav__list">
            <li className="UI__primary-nav__list__item">
              <a
                className="UI__primary-nav__list__item__link"
                href="/"
                title=""
              >
                Explore
              </a>
            </li>
            <li className="UI__primary-nav__list__item">
              <a
                className="UI__primary-nav__list__item__link"
                href="/"
                title=""
              >
                ask the AI
              </a>
            </li>
            <li className="UI__primary-nav__list__item">
              <a
                className="UI__primary-nav__list__item__link"
                href="/"
                title="go to"
              >
                Top 100
              </a>
            </li>
          </ul>
        </nav>

        {/*  start mobile nav */}
        <button className="UI__primary-nav-mobile-icon">
          <IconBurger
            className="UI__utility__icon__l"
            onClick={handleToggleMobileNav}
          />
        </button>
        <div  ref={toggleMobileNav}>
        {mobileNavMenu ? (
          <>
            <div className="UI__primary-nav-mobile">
              <div className="UI__primary-nav-mobile__header">
                <IconClose
                  onClick={handleToggleMobileNavExit}
                  className="UI__utility__icon__l  UI__utility__m-l-auto"
                />

                <div className="UI__utility__selector  UI__primary-nav-mobile__header__account">
                  <AccountNav />
                </div>
              </div>

              <ul className="UI__primary-nav-mobile__list">
                <li className="UI__primary-nav-mobile__list__item">
                  <a
                    className="UI__primary-nav-mobile__list__item__link"
                    href="/"
                    title=""
                  >
                    explore
                  </a>
                </li>
                <li className="UI__primary-nav-mobile__list__item">
                  <a
                    className="UI__primary-nav-mobile__list__item__link"
                    href="/"
                    title=""
                  >
                    ask the AI{" "}
                  </a>
                </li>
                <li className="UI__primary-nav-mobile__list__item">
                  <a
                    className="UI__primary-nav-mobile__list__item__link"
                    href="/"
                    title=""
                  >
                    top 100
                  </a>
                </li>
              </ul>

              <div className=" UI__utility__selector UI__primary-nav-mobile__footer">
                <ToggleTheme />
              </div>
            </div>
          </>
        ) : null}
        </div>
      </div>
    </>
  );
}
