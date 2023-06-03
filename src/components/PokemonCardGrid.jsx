import React from "react";
import { IoGitCompare } from "react-icons/io5";
import { FaTrash, FaPlus } from "react-icons/fa";
import Image from "next/image";

function PokemonCardGrid({ pokemons }) {
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data) => <PokemonCard key={data.id} pokemon={data} />)}
      </div>
    </div>
  );
}

export default PokemonCardGrid;

export const PokemonCard = ({ pokemon }) => {
  return (
    <div key={pokemon.name} className="pokemon-card">
      <div className="pokemon-card-list">
        <FaPlus className="plus" />
        <FaTrash className="trash" />
      </div>
      <div className="pokemon-card-compare">
        <IoGitCompare />
      </div>
      <h3 className="pokemon-card-title">{pokemon.name}</h3>
      <Image
        width={160}
        height={160}
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-card-image"
      />
      <div className="pokemon-card-types">
        {pokemon.types?.map((ele) => {
          return (
            <div className="pokemon-card-types-type" key={ele.slot}>
              <Image
                width={32}
                height={32}
                key={ele.slot}
                src={`/assets/types/${ele.type.name}.svg`}
                alt={ele.type.name}
                className="pokemon-card-types-type-image"
                loading="lazy"
              />
              <h6 className="pokemon-card-types-type-text">{ele.type.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
