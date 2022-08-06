import { IMapFamilyTree } from '@src/domain/usecases/map-family-tree';
import { failure, success } from '@src/domain/shared/utils/either';
import { evolutionsFilter } from '@src/shared/utils/evolutions-filter';
import { FamilyTreeRequester } from '@src/domain/adapters';
import { FamilyTreeModel } from '@src/domain/models/family-tree';

export class MapFamilyTree implements IMapFamilyTree {
  private readonly api: FamilyTreeRequester;

  constructor (api: FamilyTreeRequester) {
    this.api = api;
  }

  async execute ({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.familyTree(pokemonId);

      let familyTree: FamilyTreeModel;

      familyTree = {
        first_evolution: { name: data.chain.species.name },
      };

      if (data.chain.evolves_to.length > 0) {
        familyTree.second_evolution = {
          name: data.chain.evolves_to[0].species.name,
          evolves_details: evolutionsFilter(data.chain.evolves_to[0].evolution_details),
        };

        if (data.chain.evolves_to[0].evolves_to.length > 0) {
          familyTree.third_evolution = {
            name: data.chain.evolves_to[0].evolves_to[0].species.name,
            evolves_details: evolutionsFilter(
              data.chain.evolves_to[0].evolves_to[0].evolution_details,
            ),
          };
        }
      }

      console.log(familyTree);

      return success(familyTree);
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
