import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
    <Router>
      <UserProvider>
      <CartProvider>
        < Nav/>
          <Container maxWidth="lg">
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="/product/:productId">
                  <ProductDetails />
                </Route>
                <Route path="/products/:category">
                  <ProductList />
                </Route>
              </Switch>
            </div>
          </Container>
      </CartProvider>
      </UserProvider>
    </Router>
    </>
  );
}

export default App;
