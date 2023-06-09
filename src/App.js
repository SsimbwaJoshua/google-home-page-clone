import "./App.css";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import cameraImage from "./images/Camera.PNG";
import microImage from "./images/mic.PNG";
import { AsideMenu } from "./components/AsideMenu";
import { useState } from "react";

function App() {
  // for the menu button
  const menuAppClick = () => {
    document.querySelector(".the-whole-aside").classList.toggle("hidden");
  };

  // for the input field
  const [text, setText] = useState("");

  const whenTyping = (event) => {
    setText(event.target.value);
  };

  // reseting the input field
  const resetClick = () => {
    setText("");
  };

  return (
    <div className="App">
      <div className="whole-page">
        <header>
          <nav className="navigation">
            <AsideMenu />
            <a className="nav-link" href="www.gmail.com">
              Gmail
            </a>
            <a className="nav-link" href="www.googleImages.com">
              Images
            </a>
            <button className="menu-apps" onClick={menuAppClick}>
              <CgMenuGridO className="menu-app" />
            </button>
            <button className="sign-in">Sign In</button>
          </nav>
        </header>
        <div className="sec-foot">
          <section className="main-section">
            <div className="google">
              <span className="g">G</span>
              <span className="o">o</span>
              <span className="o2">o</span>
              <span className="g">g</span>
              <span className="l">l</span>
              <span className="e">e</span>
            </div>

            <div className="the-whole-input-filed">
              <AiOutlineSearch className="search-icon" />
              <form>
                <input
                  className="Input-field"
                  value={text}
                  onChange={whenTyping}
                />
              </form>
              <div className="pic-btns">
                {text && (
                  <button className="reset-btn" onClick={resetClick}>
                    X
                  </button>
                )}
                <button
                  className="pic-btn"
                  style={{ display: text ? "none" : "block" }}
                >
                  <img src={microImage} height={28} className="mic" />
                </button>
                <button
                  className="pic-btn"
                  style={{ display: text ? "none" : "block" }}
                >
                  <img src={cameraImage} height={24} className="cam" />
                </button>
              </div>
            </div>

            <div>
              <button className="after-btns">Google Search</button>
              <button className="after-btns">I'm Feeling Lucky</button>
            </div>
            <div className="languages">
              <span>Google offered in:</span>
              <a href="#" className="language">
                Luganda
              </a>
              <a href="#" className="language">
                Kiswahili
              </a>
              <a href="#" className="language">
                Ikinyarwanda
              </a>
              <a href="#" className="language">
                luo
              </a>
              <a href="#" className="language">
                Runyakitara
              </a>
            </div>
          </section>
          <footer>
            <p className="uganda">Uganda</p>
            <div className="footer-links">
              <div className="footer-links-left">
                <a href="#" className="foot-link">
                  About
                </a>
                <a href="#" className="foot-link">
                  Advertising
                </a>
                <a href="#" className="foot-link">
                  Business
                </a>
                <a href="#" className="foot-link">
                  How search works
                </a>
              </div>
              <div className="footer-links-right">
                <a href="#" className="foot-link">
                  Privacy
                </a>
                <a href="#" className="foot-link">
                  Terms
                </a>
                <a href="#" className="foot-link">
                  Settings
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
