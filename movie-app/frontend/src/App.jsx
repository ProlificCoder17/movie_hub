import "./App.css";
import Moviecard from "./components/Moviecard";

function App() {
  return (
    <div>
      <header>
        <h1>MovieHub Database </h1>
      </header>
      <main>
        <Moviecard movie={{ title: "The Book", release_date: "2025" }} />
      </main>
    </div>
  );
}

export default App;
