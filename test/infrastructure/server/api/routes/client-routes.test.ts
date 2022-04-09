import request from 'supertest'
import { Collection } from 'mongodb'
import { faker } from '@faker-js/faker'
import app from '@/infrastructure/server/api/config/app'
import { MongoConnection } from '@/infrastructure/database/mongodb'

let collection: Collection
describe('Cliente Rotas', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await MongoConnection.connect(MONGO_URL) }
  })

  beforeEach(async () => {
    collection = await MongoConnection.getCollection('clients')
    await collection.deleteMany({})
  })

  describe('POST /v1/clients', () => {
    test('deve retornar 201 ao chamar a rota', async () => {
      await request(app)
        .post('/v1/clients')
        .send({
          name: faker.name.firstName(),
          type: faker.name.jobType()
        })
        .expect(201)
    })
  })
})
