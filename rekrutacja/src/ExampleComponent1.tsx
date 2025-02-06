import React, { useEffect } from "react";
// Ile razy uruchomi się useEffect ?
const ExampleComponent1 = () => {
  useEffect(() => {
    console.log("Komponent zamontowany!");

    return () => {
      console.log("Komponent odmontowany!");
    };
  }, []);

  return <div>Sprawdź konsolę!</div>;
};

export default ExampleComponent1;
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
//ODP: uruchomi się tylko raz podczas montowania komponentu
