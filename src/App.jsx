import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Hola mundo"} />
    </div>
  );
}

export default App;
