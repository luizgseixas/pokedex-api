import { Request, Response } from "express";

export interface IController<T> {
  execute: (req: Request, res: Response) => Promise<T>;
}