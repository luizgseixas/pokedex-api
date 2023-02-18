import { PostgresTypeOrmDataSource } from './postgres-datasource';

export const setupTypeorm = async () => {
  await PostgresTypeOrmDataSource.getInstance();
};
