import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Donate from "./components//Donate/Donate";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Contact />
      <Donate />
    </div>
  );
}

export default App;
