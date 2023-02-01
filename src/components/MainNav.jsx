
import React from "react";
import OffCanvas from "./OffCanvas";

export default function MainNav() {
  return (
    <>     

         <div className="UI__header__nav">
         <OffCanvas>
          <nav className="UI__primary-nav">
            <ul className="UI__primary-nav__list">
 
              <li className="UI__primary-nav__list__item">Explore</li>
              <li className="UI__primary-nav__list__item">Ask an AI</li>
              <li className="UI__primary-nav__list__item">
                About  
              </li>
            </ul>
          </nav>
          </OffCanvas>

        </div>

    </>
  );
}

