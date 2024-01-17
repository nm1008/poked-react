import "./App.css";
import Header from "./Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-full bg-gradient-to-t from-white to-yellow-100 pb-5 app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
