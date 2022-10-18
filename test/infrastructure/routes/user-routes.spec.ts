import { faker } from '@faker-js/faker'
import { Collection } from 'mongodb'
import request from 'supertest'

import { app } from '@/infrastructure/config/app'
import { MongoConnection } from '@/infrastructure/database/mongodb'

let collection: Collection
describe('Test User Rotes Infrastructure', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await MongoConnection.connect(MONGO_URL) }
  })

  beforeEach(async () => {
    collection = await MongoConnection.getCollection('users')
    await collection.deleteMany({})
  })

  describe('POST /v1/users', () => {
    test('deve retornar 201 ao chamar a rota', async () => {
      await request(app)
        .post('/v1/users')
        .send({
          name: faker.name.fullName(),
          email: faker.internet.email(),
          password: faker.random.alphaNumeric()
        })
        .expect(200)
    })
  })
})
