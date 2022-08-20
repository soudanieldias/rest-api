import { Request, Response } from "express";

export default class BooksController {
  public async getBooks (req:Request, res:Response) {
    const status = 200;
    const message = 'Resposta';

    return res.status(status).json({ message });
  }
}
