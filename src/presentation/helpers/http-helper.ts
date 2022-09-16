import { ServerError } from '../errors/server-error';
import { IHttpResponse } from '../protocols';

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export const ok = (data: unknown): IHttpResponse => ({
  statusCode: 200,
  body: data,
});
