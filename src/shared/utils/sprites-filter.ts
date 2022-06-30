import { ISprite } from '@src/domain/adapters/responses';

export const spritesFilter = (sprites: ISprite) => {
  return {
    back_default: sprites.back_default,
    back_female: sprites.back_female,
    back_shiny: sprites.back_shiny,
    back_shiny_female: sprites.back_shiny_female,
    front_default: sprites.front_default,
    front_female: sprites.front_female,
    front_shiny: sprites.front_shiny,
    front_shiny_female: sprites.front_shiny_female,
  };
};

// "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
// "back_female": null,
// "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
// "back_shiny_female": null,
// "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
// "front_female": null,
// "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
// "front_shiny_female": null,
