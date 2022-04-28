import { Error as TypeError } from '@/entities/types'

export class Error {
  constructor (private readonly error: TypeError) {}

  generateError (): TypeError {
    return this.error
  }
}
