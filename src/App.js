import "./App.css";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import cameraImage from "./images/Camera.PNG";
import microImage from "./images/mic.PNG";
function App() {
  return (
    <div className="App">
      <div className="whole-page">
        <header>
          <nav className="navigation">
            <a href="www.gmail.com">Gmail</a>
            <a href="www.googleImages.com">images</a>
            <button>
              <CgMenuGridO />
            </button>
            <button>Sign In</button>
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
                  placeholder="Search google or type a URL"
                  defaultValue={""}
                />
              </form>
              <div className="pic-btns">
                <button className="pic-btn">
                  <img src={microImage} height={30} />
                </button>
                <button className="pic-btn">
                  <img src={cameraImage} height={24} />
                </button>
              </div>
            </div>

            <div>
              <button className="after-btns">Google Search</button>
              <button className="after-btns">I'm Feeling Lucky</button>
            </div>
            <div className="languages">
              <span>Google offered in :</span>
              <a href="#" className="language">
                luganda
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
                <a href="#">About</a>
                <a href="#">Advertising</a>
                <a href="#">Business</a>
                <a href="#">How search works</a>
              </div>
              <div className="footer-links-right">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Settings</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
