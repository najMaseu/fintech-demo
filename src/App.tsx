import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CatGenerator } from "./components/cat-generator/CatGenerator";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cats">
          <Container title={"Random Cat Generator"}>
            <CatGenerator />
          </Container>
        </Route>
        <Route path="/">
          <Container title={"Counter"}>
            <div>Home</div>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
};
