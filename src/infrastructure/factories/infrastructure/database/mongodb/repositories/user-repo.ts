import { UserRepo } from '@/infrastructure/database/mongodb'

export const mountUserRepo = (): UserRepo => new UserRepo('users')
