import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} /> */}
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/addnewproduct">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Container>
  );
}

export default App;
