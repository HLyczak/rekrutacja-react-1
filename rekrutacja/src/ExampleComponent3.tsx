//Ile razy wykona się funkcja expensiveCalculation w poniższym kodzie?
//W jakich sytuacjach zostanie ponownie uruchomiona?

import React, { useState, useMemo } from "react";

const ExampleComponent3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Wykonuję kosztowną operację...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Sprawdź konsolę!</h2>
      <p>Wynik obliczeń: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ count</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Wpisz coś"
      />
    </div>
  );
};

export default ExampleComponent3;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
