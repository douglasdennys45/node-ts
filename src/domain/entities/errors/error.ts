import { Error as TypeError } from '@/domain/entities/types'

export class Error {
  constructor (private readonly error: TypeError) {}

  generateError (): TypeError {
    return this.error
  }
}
