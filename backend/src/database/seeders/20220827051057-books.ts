'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books',
    [
      {
        "id": 1,
        "name": "Reinações de Narizinho",
        "description": "Reinações de Narizinho é um livro de fantasia e infantil de autoria do escritor brasileiro Monteiro Lobato. Publicado em 1931, é o livro que serve de propulsor à série que seria protagonizada no Sítio do Picapau Amarelo.",
        "author": "Monteiro Lobato",
        "published": true,
        "publishYear": "1931",
        "bookCover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401594634l/20733637.jpg"
      },
      {
        "id": 2,
        "name": "Quarto de Despejo",
        "description": "Quarto de Despejo: Diário de uma favelada é um livro autobiográfico de Carolina Maria de Jesus, que foi publicado em 1960. No livro, Carolina de Jesus relata sua vivência como moradora da favela, mãe e catadora de papel.",
        "author": "Carolina Maria de Jesus",
        "published": true,
        "publishYear": "1960",
        "bookCover": "https://images-na.ssl-images-amazon.com/images/I/81ykDTJWx9L.jpg"
      },
      {
        "id": 3,
        "name": "Harry Potter e a Pedra Filosofal",
        "description": "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. [...]",
        "author": "J. K. Rowling",
        "published": true,
        "publishYear": "1997",
        "bookCover": "https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg"
      },
      {
        "id": 4,
        "name": "A Culpa É das Estrelas",
        "description": "Hazel Grace é uma jovem prestes a completar dezessete anos de idade e desde os treze anos sofre com um cancro na tiroide, que evoluiu para uma metástase no pulmão e [...]",
        "author": "John Green",
        "published": true,
        "publishYear": "2012",
        "bookCover": "https://images-na.ssl-images-amazon.com/images/I/61oIS8ewc9L.jpg"
      },
      {
        "id": 5,
        "name": "50 Tons de Cinza",
        "description": "Quando Anastasia Steele entrevista o jovem empresário Christian Grey, descobre nele um homem atraente, brilhante e profundamente dominador. Ingênua e inocente, Ana se surpreende ao perceber que, a despeito da enigmática reserva de Grey, [...]",
        "author": "E. L. James",
        "published": true,
        "publishYear": "2011",
        "bookCover": "https://images-na.ssl-images-amazon.com/images/I/713-3IbW7WL.jpg"
      },
      {
        "id": 6,
        "name": "A princesa salva a si mesma neste livro",
        "description": "Esta é uma obra sobre amor, perda, sofrimento, redenção, empoderamento e inspiração. Dividido em quatro partes ('A princesa', 'A donzela', 'A rainha' e 'Você')",
        "author": "Amanda Lovelace",
        "published": true,
        "publishYear": "2017",
        "bookCover": "https://images-na.ssl-images-amazon.com/images/I/61l3pp4owJL.jpg"
      }20220827051057-books
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
