import "./App.css";
import Moviecard from "./components/Moviecard";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </main>
  );
}

export default App;
