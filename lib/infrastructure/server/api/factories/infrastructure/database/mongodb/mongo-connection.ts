import { MongoConnection } from '@/infrastructure/database/mongodb'

export const makeMongoConnection = async (uri: string) => {
  return await MongoConnection.connect(uri)
}
