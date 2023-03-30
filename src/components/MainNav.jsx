import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconBurger, IconClose } from "../assets/Index";
import AccountNav from "./AccountNav";
import ToggleTheme from "./ToggleTheme";

export default function MainNav() {
  let toggleMobileNav = useRef();
  let mobileNavExit = useRef();

  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const [collapseMobileNav, setCollapseMobileNav] = useState("");

  const handleToggleMobileNav = () => {
    setMobileNavMenu(true);
  };
  const handleToggleMobileNavExit = () => {
    setMobileNavMenu(false);
  };

  const mappedNavListItems = [
    {
      navName: "new",
      navItemLink: "/new",
      navItemTitleText: "click here to go to new",
    },
    {
      navName: "Explore",
      navItemLink: "/explore",
      navItemTitleText: "click here to go to Explore",
    },
    {
      navName: "ask the AI",
      navItemLink: "/faq",
      navItemTitleText: "click here to go to FAQ",
    },
  ];

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
            {mappedNavListItems.map((navItem, index) => {
              return (
                <li key={index} className="UI__primary-nav__list__item">
                  <a
                    className="UI__primary-nav__list__item__link"
                    href={navItem.navItemLink}
                    title={navItem.navItemTitleText}
                  >
                    {navItem.navName}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/*  start mobile nav */}
        <button
          aria-label="enable mobile navigation menu"
          className="UI__primary-nav-mobile-icon"
        >
          <IconBurger
            className="UI__utility__icon__l"
            onClick={handleToggleMobileNav}
          />
        </button>
        <div ref={toggleMobileNav}>
          {mobileNavMenu ? (
            <>
              <div className={`UI__primary-nav-mobile ${collapseMobileNav}`}>
                <div className="UI__primary-nav-mobile__header">
                  <IconClose
                    onClick={handleToggleMobileNavExit}
                    className="UI__utility__icon__l  UI__utility__m-l-auto"
                  />

                  <div className="UI__utility__selector  UI__primary-nav-mobile__header__account">
                    <AccountNav
                      mobileNavMenu={mobileNavMenu}
                      setMobileNavMenu={setMobileNavMenu}
                      setCollapseMobileNav={setCollapseMobileNav}
                      collapseMobileNav={collapseMobileNav}
                    />
                  </div>
                </div>

                <ul className="UI__primary-nav-mobile__list">
                  {mappedNavListItems.map((navItem, index) => {
                    return (
                      <li
                        key={index}
                        className="UI__primary-nav-mobile__list__item"
                      >
                        <Link
                          to={navItem.navItemLink}
                          onClick={handleToggleMobileNavExit}
                          className="UI__primary-nav-mobile__list__item__link"
                          title={navItem.navItemTitleText}
                        >
                          {navItem.navName}
                        </Link>
                      </li>
                    );
                  })}
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
