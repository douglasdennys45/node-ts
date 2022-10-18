import { BaseUser } from '@/domain/entities'

export interface AddUser {
  perform: (request: AddUser.Request) => Promise<AddUser.Response>
}

export namespace AddUser {
  export type Request = BaseUser
  export type Response = string
}
