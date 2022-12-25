import { DataSource, DataSourceOptions } from 'typeorm';
import { Environment } from '@src/main/config/env';
import { entities } from './entities';

export const config: DataSourceOptions = {
  type: 'postgres',
  ...Environment.PG_CONFIG,
  entities: [...entities],
};

const datasource = new DataSource(config);

export class PostgresTypeOrmDataSource {
  public static instance: DataSource;

  public static async getInstance (): Promise<DataSource> {
    if (!this.instance) {
      console.log('[TypeORM - Postgres 📄] Initializing TypeORM DataSource...');
      this.instance = datasource;
    }

    if (!this.instance.isInitialized) {
      await this.instance.initialize();
    }

    return this.instance;
  }
}

export default datasource;
