import { IError, TypeError } from '@/domain/entities'

export class BadRequest extends Error implements IError {
  constructor (stack: string) {
    super()
    this.name = 'BadRequest'
    this.stack = stack
    this.message = 'We have mandatory fields'
  }

  generate (): TypeError {
    return {
      code: this.name,
      status: 400,
      title: this.message,
      detail: this.stack
    }
  }
}
