import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import GraphArea from './components/GraphArea';

function App() {
  return (
    <div>
      <TopMenu />
      <div className="columns" style={{minHeight: '90vh'}}>
        <div className="column is-2">
          <SideMenu />
        </div>
        <div className="column is-10">
          <GraphArea />
        </div>
      </div>
    </div>
  );
}

export default App;
