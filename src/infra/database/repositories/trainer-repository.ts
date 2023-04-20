import { ISaveTrainerRepostiory } from '@src/data/contracts/db/trainer/save-trainer';
import { PrismaService } from '../prisma/prisma-client';

export class TrainerRepository implements ISaveTrainerRepostiory {
  constructor (private readonly prismaService: PrismaService) {}

  async save ({ name, email, password }: ISaveTrainerRepostiory.Params): Promise<void> {
    await this.prismaService.trainer.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}
