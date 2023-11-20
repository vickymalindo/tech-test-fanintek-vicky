//Add
export function SavePokemons(list: any) {
  localStorage.setItem('pokedex_pokemons', JSON.stringify(list));
}

//----------------------------------------------

// Verify
export function VerifyPokemons() {
  let pokemons = localStorage.getItem('pokedex_pokemons');
  return JSON.parse(pokemons!);
}
