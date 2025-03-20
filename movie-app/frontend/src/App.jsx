import "./App.css";
import Moviecard from "./components/Moviecard";
import Home from "./pages/Home"

function App() {
  const movieNum = 1;

  return (
    <div>
      <header>
        <h1>MovieHub Database </h1>
      </header>
      <main>
        {movieNum === 1 &&
        <Moviecard movie={{ title: "The Book", release_date: "2025" }} />
        }
        <Home />
      </main>
    </div>
  );
}

export default App;
