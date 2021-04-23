import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsersPage } from "features/users/UsersPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UsersPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
