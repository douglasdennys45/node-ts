export interface AddClientRepository {
  create(payload: AddClientRepository.Request): Promise<AddClientRepository.Response>
}

export namespace AddClientRepository {
  export type Request = {
    name: string
    document?: Document[]
    type: string
  }
  export type Response = string
}
