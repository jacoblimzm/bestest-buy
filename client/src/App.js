import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestForm from "./pages/TestForm";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <>
    <Nav />
    <Router>
      <CartProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <TestForm />
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </Router>
    </>
  );
}

export default App;
