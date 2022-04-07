type ErrorRequest = {
  code: string
  detail: string
  status: number
  title: string
}

export class Error {
  constructor (private readonly error: ErrorRequest) {}

  generateError (): ErrorRequest {
    return this.error
  }
}
