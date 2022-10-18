import { faker } from '@faker-js/faker'

import { ErrorStrategyFactory } from '@/domain/entities'

describe('Test Error Entity', () => {
  let stack: string

  beforeEach(() => {
    stack = faker.random.words()
  })

  it('should return a BadRequest error', () => {
    const sut = new ErrorStrategyFactory(stack, 'BadRequest')
    const errors = sut.builder()
    expect(errors.generate()).toEqual({
      code: 'BadRequest',
      status: 400,
      title: 'We have mandatory fields',
      detail: stack
    })
  })

  it('should return a UnprocessableEntity error', () => {
    const sut = new ErrorStrategyFactory(stack, 'UnprocessableEntity')
    const errors = sut.builder()
    expect(errors.generate()).toEqual({
      code: 'UnprocessableEntity',
      status: 422,
      title: 'We understand your request but we are unable to process',
      detail: stack
    })
  })

  // it('should return an undefined', () => {
  //   const sut = new ErrorStrategyFactory(stack, 'error')
  //   const errors = sut.builder()
  //   expect(errors).toEqual(undefined)
  // })
})
