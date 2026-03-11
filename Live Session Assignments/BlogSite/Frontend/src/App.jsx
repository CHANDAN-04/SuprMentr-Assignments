import "./App.css";
import TopbarBL from "./Components/Topbar/TopbarBL/TopbarBL";
import TopbarAL from "./Components/Topbar/TopbarAL/TopbarAL";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="App">
        <TopbarAL />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
