import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import IError from '../../../src/Interfaces/IError';
import * as mocks from './Vehicle.mocks';

const service = new CarService();

describe('Testando os métodos da camada Service', function () {
  describe('Método create', function () {
    it('Deve retornar um novo objeto em caso de sucesso', async function () {
      sinon.stub(Model, 'create').resolves(mocks.createOutput);
      
      const result = await service.create(mocks.createInput);
      expect(result).to.be.deep.equal(mocks.createOutput);

      sinon.restore();
    });
  });

  describe('Método findAll', function () {
    it('Deve retornar um array de objetos em caso de sucesso', async function () {
      sinon.stub(Model, 'find').resolves(mocks.findAllOutput);
  
      const result = await service.findAll();
      expect(result).to.be.deep.equal(mocks.findAllOutput);

      sinon.restore();
    });
  });

  describe('Método findOne', function () {
    afterEach(sinon.restore);

    it('Deve retornar um objeto em caso de sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(mocks.findOneOutput);

      const result = await service.findOne('634852326b35b59438fbea2f');
      expect(result).to.be.deep.equal(mocks.findOneOutput);
    });

    it('Deve retornar um erro se o id for inválido', async function () {
      try {
        await service.findOne('7');
      } catch (e) {
        expect((e as IError).status).to.be.equal(422);
        expect((e as IError).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Deve retornar um erro se o veículo não for encontrado', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      try {
        await service.findOne('634852326b35b59438fbea2f');
      } catch (e) {
        expect((e as IError).status).to.be.equal(404);
        expect((e as IError).message).to.be.equal('Car not found');
      }
    });
  });
  
  describe('Método update', function () {
    afterEach(sinon.restore);

    it('Deve retornar um objeto atualizado em caso de sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(mocks.updateOutput);

      const result = await service.update('634852326b35b59438fbea2f', mocks.updateInput);
      expect(result).to.be.deep.equal(mocks.updateOutput);
    });

    it('Deve retornar um erro se o id for inválido', async function () {
      try {
        await service.update('7', mocks.createInput);
      } catch (e) {
        expect((e as IError).status).to.be.equal(422);
        expect((e as IError).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Deve retornar um erro se o veículo não for encontrado', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await service.update('634852326b35b59438fbea2f', mocks.updateInput);
      } catch (e) {
        expect((e as IError).status).to.be.equal(404);
        expect((e as IError).message).to.be.equal('Car not found');
      }
    });
  });
});