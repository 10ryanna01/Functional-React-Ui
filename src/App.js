import logo from "./logo.svg";
import "./App.css";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/globalstyles";
import "./styles/styles.scss";

import MainNav from "./components/MainNav";
import { Moon, Sun } from "./assets/Index";

function App() {
  return (
    <>
      <div className="App">
        <Global styles={GlobalStyles} />

        <header className="App-header dude">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Moon className="UI__icon__l" />
          <Sun className="UI__icon__l" />
          <MainNav />
        </header>
      </div>
    </>
  );
}

export default App;
