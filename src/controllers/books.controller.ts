import { NextFunction, Request, Response } from "express";
import { BooksService } from "../services";

const booksService = new BooksService();

export default class BooksController {
  public async findAll(_req: Request, res: Response, next:NextFunction) {
    try {
      const { status, message } = await booksService.findAll();

      return res.status(status).json(message);

    } catch (error) {

      console.error(error);
      next(error);
    }
  };

  public async findOne(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await booksService.findOne(id);

      return res.status(status).json(message);

    } catch (error) {

      console.error(error);
      next(error);
    }
  };

  public async create(req: Request, res: Response, next:NextFunction) {
    try {
      const { status, message} = await booksService.create(req.body);

      return res.status(status).json(message);

    } catch (error) {

      console.error(error);
      next(error);
    }
  };

  public async update(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await booksService.update(req.body, id);

      return res.status(status).json(message);

    } catch (error) {

      console.error(error);
      next(error);
    }
  };

  public async delete(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;
      const {status, message } = await booksService.delete(id);

      return res.status(status).json(message);

    } catch (error) {

      console.error(error);
      next(error);
    }
  };
}
