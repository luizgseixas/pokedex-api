export interface IHttpResponse {
  statusCode: number;
  body: any;
}

export interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
}
