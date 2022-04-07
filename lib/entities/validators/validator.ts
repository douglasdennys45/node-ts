export class Validator {
  constructor (private readonly param: string | number) {}

  isString (): boolean {
    return typeof this.param === 'string'
  }

  isNumber (): boolean {
    return typeof this.param === 'number'
  }
}
