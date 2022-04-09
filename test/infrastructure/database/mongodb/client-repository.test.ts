import { MongoConnection, ClientRepository } from '@/infrastructure/database/mongodb'
import { Collection } from 'mongodb'
import { faker } from '@faker-js/faker'

let accountCollection: Collection

describe('ClientRepository', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await MongoConnection.connect(MONGO_URL) }
  })

  afterAll(async () => {
    await MongoConnection.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoConnection.getCollection('clients')
    await accountCollection.deleteMany({})
  })

  const makeSut = (): ClientRepository => {
    return new ClientRepository(faker.name.jobArea())
  }

  describe('create()', () => {
    test('deve retornar o id com sucesso', async () => {
      const sut = makeSut()
      const payload = {
        name: faker.name.firstName(),
        type: faker.name.jobType()
      }
      const account = await sut.create(payload)
      expect(account).toBeTruthy()
      expect(typeof account).toEqual('string')
    })
  })
})
