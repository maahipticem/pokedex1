import React from "react";

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  };
  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button key={pokemon.name} onClick={() => handleClick(pokemonIndex)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
