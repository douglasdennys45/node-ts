import { BadRequest, InternalServerError, TypeError, UnprocessableEntity } from '@/domain/entities'

export interface IError {
  generate: () => TypeError
}

export class ErrorStrategyFactory {
  constructor (private readonly stack: string, private readonly type: string) {}

  builder (): IError {
    switch (this.type) {
      case 'BadRequest':
        return new BadRequest(this.stack)
      case 'UnprocessableEntity':
        return new UnprocessableEntity(this.stack)
      default:
        return new InternalServerError(this.stack)
    }
  }
}
