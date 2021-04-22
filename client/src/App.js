import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./components/Nav";
import MyProfile from "./pages/MyProfile";

function App() {

  return (
    <>
    < Nav />
          <Container maxWidth="lg">
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login">
                <Login />
                </Route>
                <Route exact path="/myprofile">
                <MyProfile/>
                </Route>
                <Route exact path="/signup">
                <SignUp />
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
          </>
  );
}

export default App;
