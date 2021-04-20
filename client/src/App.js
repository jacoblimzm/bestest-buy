import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestForm from "./pages/TestForm";

//Pages
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Switch>
          <Route exact path="/">
            <TestForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
