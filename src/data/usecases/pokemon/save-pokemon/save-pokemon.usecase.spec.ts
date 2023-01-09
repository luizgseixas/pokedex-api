import { ISavePokemonRepository } from '@src/data/contracts/db/pokemon/save-pokemon';
import { PokemonModel } from '@src/domain/models/pokemon';

class SavePokemonRepositoryStub {
  async save (params: ISavePokemonRepository.Params): Promise<void> {

  }
}

class SavePokemonUseCase {
  constructor (private readonly pokemonRepository: SavePokemonRepositoryStub) {}

  async execute (params: ISavePokemonRepository.Params) {
    await this.pokemonRepository.save(params);
  }
}

const mockPokemon = (): PokemonModel => ({
  name: 'any_name',
  heigth: 1,
  weight: 20,
  sprite_front_default: 'any_front_default',
  sprite_front_shiny: 'any_front_shiny',
  sprite_front_female: 'any_front_female',
  sprite_front_shiny_female: 'any_front_shiny_female',
  sprite_back_default: 'any_back_default',
  sprite_back_shiny: 'any_back_shiny',
  sprite_back_female: 'any_back_female',
  sprite_back_shiny_female: 'any_back_shiny_female',
  hp: 60,
  attack: 20,
  defense: 40,
  special_attack: 20,
  special_defense: 40,
  speed: 60,
  types: [{
    name: 'grass',
  }],
});

describe('SavePokemonUseCase', () => {
  it('should call SavePokemonRepository with correct params', async () => {
    const savePokemonRepo = new SavePokemonRepositoryStub();
    const sut = new SavePokemonUseCase(savePokemonRepo);
    const saveSpy = jest.spyOn(savePokemonRepo, 'save');

    await sut.execute(mockPokemon());

    expect(saveSpy).toHaveBeenCalledWith(mockPokemon());
  });
});
