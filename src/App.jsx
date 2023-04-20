import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Orangutan Life"} />
    </div>
  );
}

export default App;
