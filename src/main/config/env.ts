export class Environment {
  NODE_ENV: string;
  API_URL: string;

  static get NODE_ENV (): string {
    return process.env.NODE_ENV;
  }

  static get API_URL (): string {
    return process.env.API_URL;
  }
}
