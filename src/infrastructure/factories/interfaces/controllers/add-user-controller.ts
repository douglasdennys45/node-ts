import { mountAddUser } from '@/infrastructure/factories/domain/use-cases'
import { AddUserController, Controller } from '@/interfaces/controllers'

export const mountAddUserController = (): Controller => new AddUserController(mountAddUser())
