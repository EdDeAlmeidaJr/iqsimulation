import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import GraphArea from "./components/GraphArea";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <TopMenu />
      <div className="app-body">
        <SideMenu />
        <main className="app-main">
          <GraphArea />
        </main>
      </div>
    </div>
  );
}

export default App;
