import { useContext } from "react";
import "./App.css";
import { config } from "./assets/config";
import Tile from "./Components/Tile";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import { dataContext } from "./context/d/DataProvider";

function App() {
  const { Winner, handleReset } = useContext(dataContext);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="main">
      {0 ? (
        <Particles className="bg" init={particlesInit} options={config} />
      ) : null}
      <h1 className="Topic"> T i c - T a c - T o e </h1>
      <div className="container">
        <div className="row">
          <Tile Index={0} />
          <Tile Index={1} />
          <Tile Index={2} />
        </div>
        <div className="row">
          <Tile Index={3} />
          <Tile Index={4} />
          <Tile Index={5} />
        </div>
        <div className="row">
          <Tile Index={6} />
          <Tile Index={7} />
          <Tile Index={8} />
        </div>
      </div>

      <div className="Result">
        {Winner === "Draw"
          ? `Its a ${Winner}!`
          : Winner && `Winner is ${Winner}`}
      </div>

      <div className="button-container">
        <button onClick={handleReset}>{!Winner ? "Reset" : "New Game"}</button>
      </div>
    </div>
  );
}

export default App;
