import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";
import UserProvider from "./context/UserProvider";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"

function App() {
  return (
    <Router>
      <CartProvider>
        <UserProvider>
          <Container maxWidth="lg">
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/product/:productId">
                  <ProductDetails />
                </Route>
                <Route path="/products/:category">
                  <ProductList />
                </Route>
                <Route exact path="/cart">
                  <Cart />
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
