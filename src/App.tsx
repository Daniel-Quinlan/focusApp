import Stopwatch from "./Components/Stopwatch/Stopwatch";
import "./App.css";

function App() {
  let currentTime = new Date();
  console.log(currentTime);

  return <Stopwatch />;
}

export default App;
