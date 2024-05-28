import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
