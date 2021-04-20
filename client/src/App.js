import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestForm from "./pages/TestForm";
import CartProvider from "./context/CartProvider";

//Pages
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <CartProvider>
        <Home />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <TestForm />
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
