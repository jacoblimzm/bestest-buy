import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ProductList from "./pages/ProductList";

//Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./components/Nav";
import MyProfile from "./pages/MyProfile";
import AddProduct from "./pages/AddProduct";
import ErrorPage from "./pages/ErrorPage";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

function App() {
  const user = useContext(UserContext);
  console.log(user.state);
  return (
    <>
      <Nav />
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
              <MyProfile />
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
            {user.state.user.role === "admin" && (
              <Route path="/addnewproduct">
                <AddProduct />
              </Route>
            )}
            <Route path="/orders">
              <Orders />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </Container>
    </>
  );
}

export default App;
