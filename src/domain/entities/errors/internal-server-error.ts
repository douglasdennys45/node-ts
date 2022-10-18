import { IError, TypeError } from '@/domain/entities'

export class InternalServerError extends Error implements IError {
  constructor (stack: string) {
    super()
    this.name = 'InternalServerError'
    this.stack = stack
    this.message = 'Internal Server Error'
  }

  generate (): TypeError {
    return {
      code: this.name,
      status: 500,
      title: this.message,
      detail: this.stack
    }
  }
}
