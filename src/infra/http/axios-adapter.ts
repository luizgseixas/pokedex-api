import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IHttpGetClient } from './client';

export class AxiosHttpClient implements IHttpGetClient {
  public readonly instance: AxiosInstance;

  constructor (config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  public async get <T = any> ({ url, params }: IHttpGetClient.Params): Promise<T> {
    const result = await this.instance.get(url, { params });
    return result.data;
  }
}
