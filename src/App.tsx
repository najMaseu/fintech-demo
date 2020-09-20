import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/cats">
            <div>Catssss</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
