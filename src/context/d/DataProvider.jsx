import { useState, useEffect, createContext } from "react";
export const dataContext = createContext();

export function DataProvider({ children }) {
  const [Value, setValue] = useState(Array(9).fill(null));
  const [Turn, setTurn] = useState("X");
  const [Winner, setWinner] = useState(null);

  const Condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleWinner = () => {
    Condition.map((subarray) => {
      const [a, b, c] = subarray;
      if (
        Value[a] === Value[b] &&
        Value[b] === Value[c] &&
        Value[a] === Value[c] &&
        Value[a] !== null
      ) {
        setWinner(Value[a]);
      }
    });
    if (!Value.some((element) => element === null)) {
      if (!Winner) setWinner("Draw");
    }
  };
  ``;
  const handleReset = () => {
    setValue(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };

  const handleChange = (index) => {
    if (!Winner) {
      if (Value[index] === null) {
        const nextCounters = Value.map((c, i) => {
          if (i === index) {
            return Turn;
          } else {
            return c;
          }
        });
        setValue(nextCounters);
        setTurn(Turn === "X" ? "O" : "X");
      }
    }
  };

  useEffect(() => {
    handleWinner();
  }, [Value]);

  return (
    <dataContext.Provider
      value={{
        Value,
        setValue,
        Turn,
        setTurn,
        Winner,
        setWinner,
        Condition,
        handleWinner,
        handleReset,
        handleChange,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
