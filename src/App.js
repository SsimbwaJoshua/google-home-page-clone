import "./App.css";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
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
                <button>
                  <img src="./images/mic.PNG" />
                </button>
                <button>
                  <img src="./images/Camera.PNG" />
                </button>
              </div>
            </div>
            <div>
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
            <div>
              <p>Google offered in :</p>
              <a href="#">luganda</a>
              <a href="#">Kiswahili</a>
              <a href="#">Ikinyarwanda</a>
              <a href="#">luo</a>
              <a href="#">Runyakitara</a>
            </div>
          </section>
          <footer className="footer">
            <p>Uganda</p>
            <div>
              <div>
                <a href="#">About</a>
                <a href="#">Advertising</a>
                <a href="#">Business</a>
                <a href="#">How search works</a>
              </div>
              <div>
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
