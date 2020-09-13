import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { searchSuperHero } from "../../services/serviceApiMarvel";

const Heroes = ({ props }) => {
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
      <Button>Ola</Button>

      <h1>Listado</h1>
      <ul>
        {nomes.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

Heroes.displayName = "Heroes";

export default Heroes;
