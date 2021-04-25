import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
import Children from "./pages/children/Children";

function App() {
  const api = "https://tryfamly.co/api/";

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/daycare"
            component={(props) => <Children api={api} {...props} />}
          />
          <Redirect from="/*" to="/daycare" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
