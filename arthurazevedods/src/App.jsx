import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
