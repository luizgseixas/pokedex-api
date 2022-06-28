import { Request, Response } from "express";
import { IController } from "src/domain/controller/controller";
import { IFamilyTree } from "src/domain/interfaces/interfaces";
import { IMapFamilyTreeService } from "src/domain/services/map-family-tree.service";
import { MapFamilyTreeService } from '../../application/services/map-family-tree.service'

export class GetFamilyTreeController implements IController<IFamilyTree> {
  private readonly getFamilyTreeService: IMapFamilyTreeService

  constructor(getFamilyTreeService: IMapFamilyTreeService){
    this.getFamilyTreeService = getFamilyTreeService
  }

  async execute (req: Request, res: Response) {
    const { id } = req.params

    const result = await this.getFamilyTreeService.execute(id)

    if (result.isLeft()) {
      throw new Error()
    }
    return result
  };
}