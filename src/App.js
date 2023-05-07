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
            <div>
              <AiOutlineSearch />
              <form>
                <input
                  className="Input-field"
                  placeholder="Search google or type a URL"
                  defaultValue={""}
                />
              </form>
              <div>
                <button></button>
              </div>
            </div>
            <div>
              <p>+</p>
              <p>Add Shortcut</p>
            </div>
          </section>
          <footer className="footer">
            <p>Light Blue</p>
            <p>##</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
