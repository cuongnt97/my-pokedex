export const getPokemonCardInfo = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    const id = data.id;
    const name = data.name;
    const image = data.sprites.front_default
      ? data.sprites.front_default
      : data.sprites.other.official_artwork.front_default;
    if (!image) {
      console.log(name);
    }
    const types = data.types;

    return { id, name, image, types };
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};
