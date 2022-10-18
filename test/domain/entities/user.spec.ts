import { faker } from '@faker-js/faker'

import { BaseUser, User } from '@/domain/entities'

describe('Test User Entity', () => {
  let request: BaseUser

  beforeEach(() => {
    request = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric()
    }
  })

  it('should return a success', () => {
    const sut = new User(request)
    const newUser = sut.create()
    expect(newUser).toEqual(request)
  })

  it('should return a run with all validation errors', () => {
    // @ts-expect-error
    delete request.email
    // @ts-expect-error
    delete request.name
    // @ts-expect-error
    delete request.password

    const sut = new User(request)
    try {
      sut.create()
    } catch (error: any) {
      expect(error.generate()).toEqual({
        code: 'BadRequest',
        detail: 'Name is required, E-mail is required, Password is required',
        status: 400,
        title: 'We have mandatory fields'
      })
    }
  })
})
