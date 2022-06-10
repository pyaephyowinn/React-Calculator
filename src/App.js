import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    //comments added
    <div className="App">
      <div className="header">
        <h1>Calculator App</h1>
      </div>

      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
