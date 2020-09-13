import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Heroes from "../Heroes";
import Pelis from "../Pelis";
import Series from "../Series";
import Libros from "../Libros";

const Menu = ({ props }) => {
  return (
    <div>
      <Navbar variant="light" bg="danger">
        <Nav className="mr-auto">
          <Nav.Link href="/heroes">Heroes</Nav.Link>
          <Nav.Link href="/pelis">Pelis</Nav.Link>
          <Nav.Link href="/series">Series</Nav.Link>
          <Nav.Link href="/libros">Libros</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/heroes">
          <Heroes />
        </Route>
        <Route path="/pelis">
          <Pelis />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/libros">
          <Libros />
        </Route>
        <Route path="/">
          <Heroes />
        </Route>
      </Switch>
    </div>
  );
};

Menu.displayName = "Menu";

export default Menu;
