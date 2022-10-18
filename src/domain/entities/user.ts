import { BaseUser, ErrorStrategyFactory } from '@/domain/entities'

export class User {
  constructor (private readonly data: BaseUser) {}

  create (): BaseUser {
    const errors = this.isValid()
    if (errors.length > 0) throw new ErrorStrategyFactory(errors.join(', '), 'BadRequest').builder()
    return this.data
  }

  private isValid (): string[] {
    const errors: string[] = []
    if (!this.data.name) errors.push('Name is required')
    if (!this.data.email) errors.push('E-mail is required')
    if (!this.data.password) errors.push('Password is required')
    return errors
  }
}
