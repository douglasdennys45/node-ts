
import { MongoConnection as sut } from '@/infrastructure/database/mongodb'

describe('Test Mongo Connection', () => {
  beforeAll(async () => {
    const { MONGO_URL } = process.env
    if (MONGO_URL) { await sut.connect(MONGO_URL) }
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('should reconnect when not connected to database', async () => {
    let col = await sut.getCollection('test')
    expect(col).toBeTruthy()
    await sut.disconnect()
    col = await sut.getCollection('test')
    expect(col).toBeTruthy()
  })
})
