import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import Register from "./components/Header/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <Hero />
        </div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/companies" component={Companies} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

