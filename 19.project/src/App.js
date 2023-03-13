import "./App.css";
import { GrHome } from "react-icons/gr";

function App() {
  const handleClick = () => {
    console.log("deneme");
  };
  return (
    <div>
      <link rel="stylesheet" />
      <aside className="sidebar">
        <header>
          <GrHome />
          <span>DataHub</span>
        </header>
        <button>
          <span>home</span>
          <span>Home</span>
        </button>
        <button onClick={handleClick()}>
          <span>build</span>
          <span>Tools</span>
          <span>expand_more</span>
        </button>
        <div id="tools" className="subnav">
          <div className="subnav-inner">
            <button>
              <span>Documents</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
