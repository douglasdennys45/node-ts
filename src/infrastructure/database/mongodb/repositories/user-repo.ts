import { AddUserRepo } from '@/domain/contracts'
import { MongoConnection } from '@/infrastructure/database/mongodb'

export class UserRepo implements AddUserRepo {
  constructor (private readonly collection: string) {}

  async create (request: AddUserRepo.Request): Promise<AddUserRepo.Response> {
    const col = await MongoConnection.getCollection(this.collection)
    const { insertedId } = await col.insertOne(request)
    return insertedId.toString()
  }
}
