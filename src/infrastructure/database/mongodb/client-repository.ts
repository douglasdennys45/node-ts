import { AddClientRepository } from '@/domain/contracts'
import { MongoConnection } from './mongo-connection'

export class ClientRepository implements AddClientRepository {
  constructor (private readonly collection: string) {}

  async create (payload: AddClientRepository.Request): Promise<AddClientRepository.Response> {
    const col = await MongoConnection.getCollection(this.collection)
    const { insertedId } = await col.insertOne(payload)
    return insertedId.toString()
  }
}
