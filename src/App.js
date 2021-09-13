import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import { members } from "./Components/Members";
import Company from "./Components/pages/Company";
import Customer from "./Components/pages/Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members} />
          </Route>
          <Route path="/customer/:id">
            <Customer />
          </Route>
          <Route path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
