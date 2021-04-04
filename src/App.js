import "./App.css";
import Navbar from "./layout/Navbar";
import SignIn from "./layout/Signin";
import { Route, Switch } from "react-router-dom";
import Private from "./auth/Private";
import Admin from "./auth/Admin";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import ForgotPassword from "./layout/ForgotPassword";
import ResetPassword from "./layout/ResetPassword";
import Dashboard from "../src/components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/auth/password/forgot" component={ForgotPassword} />
        <Route
          exact
          path="/auth/password/reset/:token"
          component={ResetPassword}
        />
        <PrivateRoute exact path="/private" component={Private} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <AdminRoute exact path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default App;
