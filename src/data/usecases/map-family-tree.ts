import { IMapFamilyTree } from '@src/domain/usecases/map-family-tree';
import { left, right } from '@src/domain/shared/utils/either';
import { evolutions_filter } from '@src/shared/utils/evolutions-filter';
import { IPokemonApi } from '@src/domain/adapters/api';

export class MapFamilyTree implements IMapFamilyTree {
  private readonly api: IPokemonApi;
  constructor(api: IPokemonApi) {
    this.api = api;
  }

  async execute({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.getFamilyTree(pokemonId);
      console.log(data);

      const first_evolution = {
        name: data.chain.species.name,
      };

      let second_evolution = {};
      let third_evolution = {};

      if (data.chain.evolves_to.length > 0) {
        second_evolution = {
          name: data.chain.evolves_to[0].species.name,
          evolves_details: evolutions_filter(data.chain.evolves_to[0].evolution_details),
        };
      }

      if (data.chain.evolves_to[0].evolves_to.length > 0) {
        third_evolution = {
          name: data.chain.evolves_to[0].evolves_to[0].species.name,
          evolves_details: evolutions_filter(
            data.chain.evolves_to[0].evolves_to[0].evolution_details,
          ),
        };
      }

      const familyTree = {
        first_evolution,
        second_evolution,
        third_evolution,
      };

      console.log(familyTree);

      return right(familyTree);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
