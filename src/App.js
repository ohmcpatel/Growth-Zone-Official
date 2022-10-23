import LogIn from "./components/LogIn.js"
import RegisterInfo from "./components/RegisterInfo.js"
import RegisterTasks from "./components/RegisterTasks.js"
import Dashboard from "./components/Dashboard.js"
import Profile from "./components/Profile.js"
import Setting from "./components/Setting.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



function App() {
  


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={RegisterInfo} />
        <Route exact path="/registertasks" component={RegisterTasks} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/setting" component={Setting} />
      </Switch>
    </Router>
  );
};

export default App;
