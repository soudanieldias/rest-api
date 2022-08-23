import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('1- Verifica APP e suas Rotas', () => {
  let chaiHttpResponse: Response;

  it('1.1 - Verifica a existência de uma instância em app', () => {
    expect(app).to.exist;
  });

  it('1.2 - Verifica se a rota \'/books\' retorna o statusCode 200 e um Array vazio', async () => {
    chaiHttpResponse = await chai.request(app).get('/books');
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.an('array').empty;
  });

  it('1.3 - Se acessar um livro inexistente, uma mensagem de erro é retornada', async () => {
    chaiHttpResponse = await chai.request(app).get('/books/999');
    expect(chaiHttpResponse).to.have.status(404);
    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.property('error');
    expect(chaiHttpResponse.body.error).to.equal('Erro. Livro não Encontrado!');
  });

});
