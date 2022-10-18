import { faker } from '@faker-js/faker'
import { Collection } from 'mongodb'

import { MongoConnection, UserRepo } from '@/infrastructure/database/mongodb'

let userCollection: Collection

describe('Test UserRepo Infrastructure', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await MongoConnection.connect(MONGO_URL) }
  })

  afterAll(async () => {
    await MongoConnection.disconnect()
  })

  beforeEach(async () => {
    userCollection = await MongoConnection.getCollection('users')
    await userCollection.deleteMany({})
  })

  const makeSut = (): UserRepo => {
    return new UserRepo('users')
  }

  describe('create()', () => {
    test('should return id successfully', async () => {
      const sut = makeSut()
      const payload = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.random.alphaNumeric()
      }
      const user = await sut.create(payload)
      expect(user).toBeTruthy()
      expect(typeof user).toEqual('string')
    })
  })
})
