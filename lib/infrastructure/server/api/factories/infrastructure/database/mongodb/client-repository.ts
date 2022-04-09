import { ClientRepository } from '@/infrastructure/database/mongodb'

export const makeClientRepository = (): ClientRepository => {
  return new ClientRepository('clients')
}
