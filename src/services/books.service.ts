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

  public async update(bookData:IBook, id:string) {
    const findBook = await BookModel.findOne({ where: { id }});
    if (!findBook) return { status: 404, message: { error: 'Erro. Livro não Encontrado!' } };

    const book = await BookModel.update({ ...bookData }, { where: {id}});
    return { status: 201, message: `Livro de ID ${id} atualizado com Sucesso` };
  };

  public async delete(id:string) {
    const findBook = await BookModel.findOne({ where: { id }});
    if (!findBook) return { status: 404, message: { error: 'Erro. Livro não Encontrado!' } };

    const book = await BookModel.destroy({ where: { id } });
    return { status: 201, message: `Livro de ID ${id} deletado com Sucesso` };
  }
}
