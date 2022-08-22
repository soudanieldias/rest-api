import { BookModel } from "../database/models";
import { IBook } from "../interfaces";

export default class BooksService {
  public async findAll() {
    const books = await BookModel.findAll();
    return {status: 200, message: books };
  };

  public async findOne(id:string) {
    const book = await BookModel.findOne({ where: { id } });
    if (!book) return { status: 404, message: { error: 'Erro. Livro não Encontrado!' } };
    return {status: 200, message: book };
  };

  public async create(bookData:IBook) {
    const book = await BookModel.create({ ...bookData });
    return { status: 201, message: book };
  };
}
