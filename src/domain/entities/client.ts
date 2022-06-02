import { Error } from '@/domain/entities/errors'
import { ClientRequest, ClientResponse, Error as TypeError } from '@/domain/entities/types'

export class Client {
  constructor (private readonly client: ClientRequest) {}

  create (): ClientResponse {
    const errors = this.isValidFields()
    if (errors) {
      return { error: errors }
    }
    return { value: this.client }
  }

  private isValidFields (): TypeError | null {
    let errors: string[] = []
    if (!this.client.name) errors = [...errors, 'Name required']
    if (!this.client.type) errors = [...errors, 'Type required']

    if (errors.length > 0) {
      const error = new Error({ code: 'FIELD_REQUIRED', status: 400, detail: errors.join(', '), title: 'Field required' })
      return error.generateError()
    }
    return null
  }
}
