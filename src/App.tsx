import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CatGenerator } from "./components/cat-generator/CatGenerator";
import { Container } from "./components/container/Container";
import { Counter } from "./components/counter/Counter";
import { Navbar } from "./components/navbar/Navbar";
import { Buttons } from "./components/table-demo/Table";
import { CounterContextProvider } from "./context/CounterContext";

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
        <Route path="/table">
          <Container title={"useCallback Demo"}>
            <Buttons />
          </Container>
        </Route>
        <Route path="/">
          <Container title={"Counter"}>
            <CounterContextProvider>
              <Counter />
            </CounterContextProvider>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
};
