import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
//import Header from "./components/Header";
import Children from "./pages/children/Children";
import SingleChild from "./pages/children/SingleChild";

function App() {
  const api = "https://tryfamly.co/api/";

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Children api={api} {...props} />}
          />
          <Route
            exact
            path="/child/:id"
            component={(props) => <SingleChild api={api} {...props} />}
          />

          <Redirect from="/*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
