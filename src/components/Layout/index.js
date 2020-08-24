import React, { useState, useEffect } from "react";
import { searchSuperHero } from "../../services/serviceApiMarvel";
import { Navbar, Jumbotron, Button } from "react-bootstrap";

function Layout() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchSuperHeros = async () => {
      const results = await searchSuperHero("hulk");
      setNomes(results.map((result) => result.name));
    };
    fetchSuperHeros();
  }, []);

  return (
    <div>
      <Navbar />
      <Button>Ola</Button>
      <h1>Listado</h1>
      <ul>
        {nomes.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Layout;
