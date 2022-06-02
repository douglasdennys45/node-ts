import { makeAddClient } from '@/infrastructure/server/api/factories/usecases'
import { AddClientController, Controller } from '@/interfaces/controllers'

export const makeAddClientController = (): Controller => {
  return new AddClientController(makeAddClient())
}
