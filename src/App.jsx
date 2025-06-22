import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import EditPage from "./Components/EditPage";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold m-2">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
