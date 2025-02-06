import React, { useEffect, useState } from "react";
// Ile razy uruchomi się useEffect ?
const ExampleComponent2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Zmieniono count: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ</button>
    </div>
  );
};

export default ExampleComponent2;
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
