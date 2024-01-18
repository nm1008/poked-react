import "./App.css";
import Header from "./Header/Header";
import { PokemonProvider } from "./contexts/PokemonContext";
import Home from "./pages/Home";

function App() {
  return (
    <PokemonProvider>
      <div className="h-full bg-gradient-to-t from-white to-yellow-100 pb-5 app">
        <Header />
        <Home />
      </div>
    </PokemonProvider>
  );
}

export default App;
