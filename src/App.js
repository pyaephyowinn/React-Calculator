import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Calculator</h1>
      </div>

      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
