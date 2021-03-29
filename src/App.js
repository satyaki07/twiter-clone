import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
function App() {
  return (
    // BEM
    <div className="App">
      {/* SIDEBAR */}
      <Sidebar />

      {/* FEED */}
      <Feed />

      {/* WIDGETS */}
      <Widgets />
    </div>
  );
}

export default App;
