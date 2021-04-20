import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

import UserProvider from "./context/UserProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <UserProvider>
          <Container maxWidth="lg">
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <ProductList />
                </Route>
              </Switch>
            </div>
          </Container>
        </UserProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
