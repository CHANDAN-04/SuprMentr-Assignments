import { useRef } from "react";
function Topbox({ setCity }) {
  let inputValue = useRef();
  function handleSearch() {
    setCity(inputValue.current.value);
  }
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 id="heading">Weather App</h1>
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            id="cityInput"
            placeholder="Enter city name"
            ref={inputValue}
          />
          <button id="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Topbox;
