import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  public readonly instance: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
}