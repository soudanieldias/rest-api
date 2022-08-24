import { Router } from "express";
import booksRouter from "./books.route";

const routes = Router();

routes.get('/', (_req, res) => res.status(200).json({ message: 'Rota OK!'}));
routes.use('/books', booksRouter);

export default routes;
