import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "features/auth/LoginPage";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};
