import { Router } from "express";
import booksRouter from "./books.route";

const routes = Router();

routes.use('/books', booksRouter);

export default routes;
