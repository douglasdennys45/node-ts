import { mock, MockProxy } from 'jest-mock-extended'
import { faker } from '@faker-js/faker'
import { AddClientRepository } from '@/ports'
import { AddClient, setupAddClient } from '@/usecases'

describe('Caso de uso - Criação de cliente', () => {
  let payload: any
  let uuid: string
  let repo: MockProxy<AddClientRepository>
  let sut: AddClient

  beforeEach(() => {
    repo = mock()
    uuid = faker.datatype.uuid()
    repo.create.mockResolvedValue(uuid)
    payload = {
      name: faker.name.firstName(),
      type: faker.name.jobType()
    }
  })

  beforeEach(() => {
    sut = setupAddClient(repo)
  })

  it('Deve chamar a função e retornar os parametros corretos', async () => {
    await sut(payload)
    expect(repo.create).toHaveBeenCalledWith(payload)
    expect(repo.create).toHaveBeenCalledTimes(1)
  })

  it('Deve retornar o id da criação do registro quando tudo der certo', async () => {
    const newClient = await sut(payload)
    expect(newClient).toEqual({ value: uuid })
  })

  it('deve tratar quando ocorrer error na validação e não registrar dos dados', async () => {
    await sut({})
    expect(repo.create).not.toHaveBeenCalled()
  })

  it('deve tratar quando ocorrer error na validação e retornar um erro', async () => {
    const notNewClient = await sut({})
    expect(notNewClient.error).toBeTruthy()
  })

  it('deve retornar uma exception caso ocorra algum erro na infra', async () => {
    repo.create.mockRejectedValueOnce(new Error('error_infra'))
    expect.assertions(2)
    const promise = sut(payload)
    promise.catch(() => {
      expect(repo.create).toHaveBeenCalledWith(payload)
      expect(repo.create).toHaveBeenCalledTimes(1)
    })
  })
})
