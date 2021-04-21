import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
=======
import { Switch, Route } from "react-router-dom";
>>>>>>> 618ecdb7f01e7da1346724319961e62a759b948c
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"

function App() {

  return (
<<<<<<< HEAD
    <>
    <Router>
      <UserProvider>
      <CartProvider>
        < Nav/>
=======
>>>>>>> 618ecdb7f01e7da1346724319961e62a759b948c
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
                <Route exact path="/cart">
                  <Cart />
                </Route>
              </Switch>
            </div>
          </Container>
<<<<<<< HEAD
      </CartProvider>
      </UserProvider>
    </Router>
    </>
=======
>>>>>>> 618ecdb7f01e7da1346724319961e62a759b948c
  );
}

export default App;
