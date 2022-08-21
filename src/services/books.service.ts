// import { BookModel } from "../database/models";
import { IBook } from "../interfaces";

export default class BooksService {

  public async getBooks () {
    // const allBooks = await BookModel.findAll();
    const allBooks: IBook[]= [];

    return { status: 200, message: allBooks };
  }
}
