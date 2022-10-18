import { AddUser as IAddUser } from '@/domain/contracts'
import { AddUser } from '@/domain/use-cases'
import { mountUserRepo } from '@/infrastructure/factories/infrastructure/database'

export const mountAddUser = (): IAddUser => new AddUser(mountUserRepo())
