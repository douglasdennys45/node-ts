import { AddClientController, Controller } from '@/interfaces/controllers'
import { makeAddClient } from '@/infrastructure/server/api/factories/usecases'

export const makeAddClientController = (): Controller => {
  return new AddClientController(makeAddClient())
}
