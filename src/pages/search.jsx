import React, { Suspense, useEffect, useState } from "react";
import { pokemonRoute } from "../utils/constants";
import Loader from "@/components/Loader";
import PokemonCardGrid from "@/components/PokemonCardGrid";
import { getPokemonCardInfo } from "@/app/reducers/getPokemonCardInfo";

export const getPokemons = async () => {
  const LIMIT = 500;
  const resTemp = await fetch(`${pokemonRoute}?limit=1`);
  let res = [];

  const { count } = await resTemp.json();

  const pages = Math.ceil(count / LIMIT);
  for (let i = 0; i < pages; i++) {
    let response = await fetch(
      `${pokemonRoute}?limit=${LIMIT}&offset=${LIMIT * i}`
    );
    const { results } = await response.json();
    res.push(...results);
  }

  return { count, res };
};

export default function Search(props) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemons();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.res) {
      //lay ve gia list pokemon
      const filteredResults =
        searchQuery !== ""
          ? data.res.filter((item) => item.name.includes(searchQuery))
          : data.res;

      //set total page de phan trang
      setTotalPage(Math.ceil(filteredResults.length / 21));

      //lay ve list pokemon theo tung page
      const pokemons = filteredResults.slice((page - 1) * 21, page * 21);

      //list pokemon lay ve theo tung page co thuoc tinh id, name, image, types
      let pokemonPromises = [];
      if (pokemons.length > 0) {
        pokemonPromises = pokemons.map((item) => getPokemonCardInfo(item));
        const validPromises = pokemonPromises.filter((promise) => promise);

        //convert tu promise ve {id, name, image, types}
        convertPromisesToArray(validPromises)
          .then((objects) => setPokemonCards(objects))
          .catch((error) => console.log("Error:", error));
      }
    }
  }, [data, page, searchQuery]);

  const { res = [] } = data;
  if (!data.res || !pokemonCards.length) {
    return <Loader />;
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pokemon-searchbar"
        placeholder="Search Pokemon"
      />
      <PokemonCardGrid pokemons={pokemonCards} />
      {Array(totalPage)
        .fill(null)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log("set new page");
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

async function convertPromisesToArray(promises) {
  try {
    // Wait for all the Promises to complete and get the results
    const results = await Promise.all(promises);

    // Use Array.map to convert the results to an array of objects
    const objects = results.map((result) => {
      // Check if the result is valid
      if (result && typeof result === "object") {
        return result;
      }
      return null;
    });

    return objects.filter((object) => object !== null);
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}
