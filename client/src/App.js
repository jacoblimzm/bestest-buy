import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestForm from "./pages/TestForm";

function App() {
  return (
    <Router>
      <div className="App">
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
