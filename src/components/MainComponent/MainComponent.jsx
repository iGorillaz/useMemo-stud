import { useState, useCallback, useEffect, useMemo } from "react";

const MainComponent = () => {
  const [userNumber, setUserNumber] = useState("");
  const [input, setInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  useEffect(() => {
    console.log("Here!");
  }, []);

  return (
    <div>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number:</p>
      <br />
      <br />
      <label>Input:</label>
      <input
        type="text"
        value={input}
        placeholder="Input"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </div>
  );
};

export default MainComponent;
