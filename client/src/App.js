import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (
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
  );
}

export default App;
