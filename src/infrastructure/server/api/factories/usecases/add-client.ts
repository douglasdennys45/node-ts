import { AddClient, setupAddClient } from '@/domain/usecases'
import { makeClientRepository } from '@/infrastructure/server/api/factories/infrastructure/database/mongodb'

export const makeAddClient = (): AddClient => {
  return setupAddClient(makeClientRepository())
}
