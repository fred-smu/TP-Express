import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Nav           from "./components/Nav";
import Home      from "./pages/Home";
import Login   from "./pages/Login";
import Signup from "./pages/Signup";
import PWReset from "./pages/PWReset";
import Account from "./pages/Account";
import Product from "./pages/Product";
import About from "./pages/About";
import ImageUpload from "./pages/ImageUpload";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/PWReset" component={PWReset} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ImageUpload" component={ImageUpload} />
          <Route path="/" render={() => <div>404 Error Page not found</div>} />
        </Switch>
      </Wrapper>
    </Router>

  );
};

export default App;
