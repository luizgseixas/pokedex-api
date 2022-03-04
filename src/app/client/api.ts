import axios, { AxiosInstance, AxiosResponse} from "axios";

export class Api {
  instance: AxiosInstance
  constructor () {
    this.instance = axios.create({
      baseURL: "https://pokeapi.co/api/v2"
    })
  }

  get<T>(url: string): Promise<AxiosResponse<any>> {
      return this.instance.get<T>(url);
  }
}
