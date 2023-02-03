import { useState, useRef, useEffect } from "react";
import { IconBurger } from "../assets/Index";
import OffCanvas from "./OffCanvas";

export default function MainNav() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false)

  let toggleMobileMenuRef = useRef();

const  handleToggleMobileNav = () =>{
  setMobileNavMenu(true);

}

useEffect(() => {
let handleExitMobileMenu = (e) => {
  if(!toggleMobileMenuRef.current.contains(e.target)) {
    setMobileNavMenu(false);
  }
}
document.addEventListener("mousedown", handleExitMobileMenu); 
}, [])

  return (
    <>
      <div className="UI__header__nav">
        
          <nav className="UI__primary-nav">
            <ul className="UI__primary-nav__list">
              <li className="UI__primary-nav__list__item">Explore</li>
              <li className="UI__primary-nav__list__item">Ask an AI</li>
              <li className="UI__primary-nav__list__item">Top 100</li>
            </ul>
          </nav>


       {/*  start mobile nav */}
<button onClick={handleToggleMobileNav} className="UI__primary-nav-mobile-icon"><IconBurger /></button>
{mobileNavMenu ?
          <nav ref={toggleMobileMenuRef} className="UI__primary-nav-mobile">
            <ul className="UI__primary-nav__list">
              <li className="UI__primary-nav__list__item">Explore</li>
              <li className="UI__primary-nav__list__item">Ask an AI</li>
              <li className="UI__primary-nav__list__item">About</li>
            </ul>
          </nav>
          : null

}


      </div>
    </>
  );
}
