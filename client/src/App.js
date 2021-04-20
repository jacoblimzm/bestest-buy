import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";
import UserProvider from "./context/UserProvider";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
>>>>>>> ea161bd70fda7ca86b0704871164c78d8a0dda3c

function App() {
  return (
    <Router>
      <CartProvider>
        <UserProvider>
          <Home />
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
              </Switch>
            </div>
          </Container>
        </UserProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
