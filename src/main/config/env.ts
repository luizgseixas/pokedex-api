type PostgresConfig = { host: string, port: number, username: string, password: string, database: string }

export class Environment {
  NODE_ENV: string;
  API_URL: string;
  PG_CONFIG: PostgresConfig;

  static get NODE_ENV (): string {
    return process.env.NODE_ENV;
  }

  static get API_URL (): string {
    return process.env.API_URL;
  }

  static get PG_CONFIG (): PostgresConfig {
    return {
      host: process.env.PG_HOST ?? 'localhost',
      port: Number(process.env.PG_PORT) ?? 5432,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    };
  }
}
