function NavBar({
  pokemonIndex,
  handleClickPrecedent,
  handleClickSuivant,
  pokemonList,
}) {
  return (
    <div>
      <button onClick={handleClickPrecedent} disabled={pokemonIndex === 0}>
        precedent
      </button>
      <button
        onClick={handleClickSuivant}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        suivant
      </button>
    </div>
  );
}

export default NavBar;
