import { IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import {
  Chain, IFamilyTreeRequester, EvolutionDetail, ISpeciesRequester,
} from '@src/data/contracts/apis';
import { FamilyTreeModel } from '@src/domain/models/pokemon';

export class MapFamilyTreeUseCase implements IMapFamilyTree {
  constructor (
    private readonly speciesRequester: ISpeciesRequester,
    private readonly familyTreeRequester: IFamilyTreeRequester,
  ) {}

  async execute ({ id }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const species = await this.speciesRequester.species(id);
      const familyTreeId = species.evolution_chain.url.split('evolution-chain/');
      const tree = await this.familyTreeRequester.familyTree(familyTreeId[1]);
      return success(this.chainFilter(tree.chain));
    } catch (err) {
      return failure(err);
    }
  }

  private evolutionsDetailsFilter = (evolutionDetails: Array<EvolutionDetail>): any => {
    if (evolutionDetails.length === 0) return null;
    const evolutions = evolutionDetails.map((datail) => {
      return Object.entries(datail).reduce((newObj, [key, value]) => {
        if (value !== null && value !== false && value !== '') {
          if (key === 'trigger') {
            newObj[key] = value.name;
          } else if (typeof value === 'object') newObj[key] = value.name;
          else newObj[key] = value;
        }
        return newObj;
      }, {});
    });
    return evolutions;
  };

  private chainFilter = (chain: Chain, count: number = 1): FamilyTreeModel[] => {
    let evolutions: FamilyTreeModel[] = [];

    evolutions.push({
      evolution_lvl: count,
      name: chain.species.name,
      evolution_details: this.evolutionsDetailsFilter(chain.evolution_details),
    });

    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution, index) => {
        count += 1;

        evolutions.push({
          evolution_lvl: count,
          name: evolution.species.name,
          evolution_details: this.evolutionsDetailsFilter(chain.evolves_to[index].evolution_details),
        });

        if (chain.evolves_to[index].evolves_to.length > 0) {
          const lastChain = this.chainFilter(chain.evolves_to[index].evolves_to[0], count + 1);
          if (lastChain) {
            evolutions.push(...lastChain);
          }
        }
      });
    }
    return evolutions;
  };
}
