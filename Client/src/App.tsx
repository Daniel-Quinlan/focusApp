import Stopwatch from "./Components/Stopwatch/Stopwatch";
import "./App.css";
import Calendar from "./Components/Calendar/Calendar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000");
      console.log(res.json());
    };
    fetchData();
  }, []);
  return (
    <>
      <Stopwatch />
      <Calendar />
    </>
  );
}

export default App;
