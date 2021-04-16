import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const handleRegister = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email= e.target.email.value;
    const password = e.target.password.value;

    // upon submit, an API POST request must be made to the backend to /usersbackend
    axios
      .post("/usersbackend", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data); // the backend responds with a json object!!
        // handleAddBookmark(res.data); // need to haul the user object to the TOP;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
  };
  const handleGetUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input type="text" name="username" placeholder="username" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="submit" value="Register" />
        </form>
      </div>
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleLogIn}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="submit" value="Log In" />
        </form>
      </div>
      <div>
        <h1>Get User</h1>
        <form onSubmit={handleGetUser}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="submit" value="Get User" />
        </form>
      </div>
    </div>
  );
}

export default App;
