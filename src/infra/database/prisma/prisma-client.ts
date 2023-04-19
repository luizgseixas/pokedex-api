import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  constructor () {
    super();
  }
  async initialize () {
    await this.$connect();
  }
}

export const prismaSetup = async () => {
  const service = new PrismaService();
  await service.initialize();
};
