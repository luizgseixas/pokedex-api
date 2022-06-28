import { Either } from '../shared/utils/either'
import { IFamilyTree } from '../../domain/interfaces/interfaces'

export interface IMapFamilyTreeService {
  execute: (pokemonId: string) => IMapFamilyTreeService.Result;
}

export namespace IMapFamilyTreeService {
  export type Result = Promise<Either<unknown,IFamilyTree>>
}