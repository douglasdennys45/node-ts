import { IError, TypeError } from '@/domain/entities'

export class UnprocessableEntity extends Error implements IError {
  constructor (stack: string) {
    super()
    this.name = 'UnprocessableEntity'
    this.stack = stack
    this.message = 'We understand your request but we are unable to process'
  }

  generate (): TypeError {
    return {
      code: this.name,
      status: 422,
      title: this.message,
      detail: this.stack
    }
  }
}
