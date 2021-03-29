import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Trending from "./components/Trending";
import Upcoming from "./components/Upcoming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          {/*NavBar from react boostrap: https://react-bootstrap.github.io/components/navbar/ */}
          <Navbar className="navBar" bg="light" variant="light" expand="lg">
            <Navbar.Brand to="/home">Find-A-Flick</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="navLink" to="/">
                  Home
                </Link>
                <Link className="navLink" to="/trending">
                  Trending
                </Link>
                <Link className="navLink" to="/popular">
                  Popular
                </Link>
                <Link className="navLink" to="/topRated">
                  Top Rated
                </Link>
                <Link className="navLink" to="/upcoming">
                  Upcoming
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* ==== Routes to components ==== */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/topRated">
              <TopRated />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}
