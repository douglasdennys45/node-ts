import { MongoConnection as sut } from '@/infrastructure/database/mongodb'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await sut.connect(MONGO_URL) }
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('deve reconectar quando não tiver conectado no banco de dados', async () => {
    let col = await sut.getCollection('clients')
    expect(col).toBeTruthy()
    await sut.disconnect()
    col = await sut.getCollection('clients')
    expect(col).toBeTruthy()
  })
})
