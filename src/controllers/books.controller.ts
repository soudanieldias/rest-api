import { Request, Response } from "express";
import { BooksService } from "../services";

const booksService = new BooksService();

export default class BooksController {
  public async findAll(_req: Request, res: Response) {
    const { status, message } = await booksService.findAll();
    return res.status(status).json(message);
  };

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const { status, message } = await booksService.findOne(id);
    return res.status(status).json(message);
  };

  public async create(req: Request, res: Response) {
    const { status, message} = await booksService.create(req.body);
    return res.status(status).json(message);
  };

  public async update(req: Request, res: Response) {};

  public async delete(req: Request, res: Response) {};
}
