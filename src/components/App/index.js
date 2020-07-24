import React, { useState, useEffect } from "react";
import { searchSuperHero } from "../../services/serviceApiMarvel";
import "./index.css";

function App() {
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
      <h1>Listado</h1>
      <ul>
        {nomes.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
