import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', booksController.getBooks);

export default booksRouter;