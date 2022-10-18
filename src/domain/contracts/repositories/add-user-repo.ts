import { BaseUser } from '@/domain/entities'

export interface AddUserRepo {
  create: (request: AddUserRepo.Request) => Promise<AddUserRepo.Response>
}

export namespace AddUserRepo {
  export type Request = BaseUser
  export type Response = string
}
