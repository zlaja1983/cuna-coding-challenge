import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoanForm from "./LoanForm";


export default function App() {
  return (
    <>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <LoanForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </>


  );


}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}