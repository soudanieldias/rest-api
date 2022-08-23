import { Router } from 'express';
import { BooksController } from '../controllers';
import { BooksService } from '../services';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', booksController.findAll);
booksRouter.get('/:id', booksController.findOne);
booksRouter.post('/', booksController.create);
booksRouter.put('/:id', booksController.update);

export default booksRouter;