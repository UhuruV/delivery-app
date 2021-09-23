import "./App.css";
import NavbarComponent from "./components/nav/Navbar";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const LoginContainer = () => {
    return (
      <>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Register} />
      </>
    );
  };

  const SignUpContainer =()=>{
    return (
      <>
        <Route path="/sign-up" component={Register} />
      </>
    );
  }

  const DefaultContainer = () => {
    return (
    <>
      <NavbarComponent />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Register} />
      <Footer />
    </>
    )
  };

  return (
    <div className="App">
      <Router>
        {/* <NavbarComponent /> */}
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} /> */}
          <Route exact path="/(login)" component={LoginContainer} />
          <Route exact  path="/(sign-up)"component={ SignUpContainer }/>
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
