import axios from "axios";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestForm from "./pages/TestForm";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
    <Router>
      <UserProvider>
      <CartProvider>
        <div className="App">
        < Nav/>
          <Switch>
            <Route exact path="/" component={Login}/>
              {/* <TestForm /> */}

            <Route exact path="/signup" component={SignUp}/>

          </Switch>
        </div>
      </CartProvider>
      </UserProvider>
    </Router>
    </>
  );
}

export default App;
