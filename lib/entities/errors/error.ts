import { ErrorResponse } from '@/entities/types'

export class Error {
  constructor (private readonly error: ErrorResponse) {}

  generateError (): ErrorResponse {
    return this.error
  }
}
