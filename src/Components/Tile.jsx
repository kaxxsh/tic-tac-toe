import React, { useContext } from "react";
import { dataContext } from "../context/d/DataProvider";

function Tile({ Index }) {
  const { Value, handleChange } = useContext(dataContext);
  return (
    <div className={`tile ${Value[Index]}`} onClick={() => handleChange(Index)}>
      {Value[Index]}
    </div>
  );
}

export default Tile;
