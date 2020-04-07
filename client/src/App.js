import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Home      from "./pages/Home";
import Login   from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import About from "./pages/About";
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
          <Route exact path="/About" component={About} />
          <Route path="/" render={() => <div>404 Error Page not found</div>} />
        </Switch>
      </Wrapper>
    </Router>

  );
};

export default App;
