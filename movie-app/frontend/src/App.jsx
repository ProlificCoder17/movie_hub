import "./css/App.css";
import Moviecard from "./components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Routes>
         {/* Define Home route explicitly */}
         <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </main>

    </div>
    
  );
}

export default App;
