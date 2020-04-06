import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Home      from "./pages/Home";
import Login   from "./pages/Login";
import Signup from "./pages/Signup";
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
        <Switch>
          <Route exact path="/Home" component= {Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
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
