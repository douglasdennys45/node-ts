import { ClientRequest } from '@/domain/entities/types'

export interface AddClientRepository {
  create(payload: AddClientRepository.Request): Promise<AddClientRepository.Response>
}

export namespace AddClientRepository {
  export type Request = ClientRequest
  export type Response = string
}
