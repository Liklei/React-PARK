
import "./App.css";
import State from "./commponet/state";
import Effects from "./hooks/Effect";
import States from "./hooks/State";

function App() {
  return (
    <div className="App">
      <Effects />
      <p>Hello, friends</p>
      <State />
      <States />
      
    </div>
  );
}

export default App;
