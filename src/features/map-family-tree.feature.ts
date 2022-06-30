import { IMapFamilyTree } from '@src/domain/features/map-family-tree';
import { left, right } from '@src/domain/shared/utils/either';
import { evolutions_filter } from '@src/shared/utils/evolutions-filter';
import { PokemonApi } from '../adapters/poke-api/api';

export class MapFamilyTreeFeature implements IMapFamilyTree {
  private api: PokemonApi;
  constructor() {
    this.api = new PokemonApi();
  }

  async execute({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const { data } = await this.api.getFamilyTree(pokemonId);
      console.log(data);

      const familyTree = {
        first_evolution: {
          name: data.chain.species.name,
        },

        second_evolution: {
          name: data.chain.evolves_to[0].species.name,
          evolves_details: evolutions_filter(data.chain.evolves_to[0].evolution_details),
        },

        third_evolution: {
          name: data.chain.evolves_to[0].evolves_to[0].species.name,
          evolves_details: evolutions_filter(
            data.chain.evolves_to[0].evolves_to[0].evolution_details,
          ),
        },
      };

      console.log(familyTree);

      return right(familyTree);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
