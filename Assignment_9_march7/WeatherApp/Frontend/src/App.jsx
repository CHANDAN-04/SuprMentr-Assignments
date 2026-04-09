import "./App.css";
import { useState } from "react";
import MainContent from "./Components/MainContent";
import Topbox from "./Components/Topbox";

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <Topbox setCity={setCity} />
      <MainContent city={city} />
    </>
  );
}

export default App;
