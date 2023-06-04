import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RandomBeer() {
  const [beers, setBeers] = useState(null);
  const params = useParams();

  console.log(params)
  
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(beers);

  if (beers === null) {
    return <h3>... cargando </h3>;
  }

  return (
    <div>
      <img src={beers.image_url} alt="beers" width={"100px"} />
      <h4>{beers.name}</h4>
      <span>{beers.tagline}</span>
      <p>{beers.first_brewed}</p>
      <p>{beers.attenuation_level}</p>
      <p>{beers.description}</p>
      <footer>{beers.contributed_by}</footer>
    </div>
  );
}

export default RandomBeer;
